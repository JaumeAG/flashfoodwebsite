"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Settings, Cookie } from "lucide-react"
import { getCookieConsent, setCookieConsent, clearNonEssentialCookies, type CookieConsent } from "@/lib/cookieConsent"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<Omit<CookieConsent, 'timestamp'>>({
    essential: true, // Siempre activas
    performance: false,
    functionality: false,
    marketing: false,
  })

  useEffect(() => {
    // Verificar si ya hay consentimiento guardado
    const savedConsent = getCookieConsent()
    if (!savedConsent) {
      // Mostrar banner después de un pequeño delay para mejor UX
      setTimeout(() => setShowBanner(true), 500)
    }
  }, [])

  const handleAcceptAll = () => {
    const fullConsent = {
      essential: true,
      performance: true,
      functionality: true,
      marketing: true,
    }
    setCookieConsent(fullConsent)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      essential: true,
      performance: false,
      functionality: false,
      marketing: false,
    }
    setCookieConsent(minimalConsent)
    clearNonEssentialCookies()
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    setCookieConsent(consent)
    // Si se rechazan cookies opcionales, limpiar las existentes
    if (!consent.performance && !consent.functionality && !consent.marketing) {
      clearNonEssentialCookies()
    }
    setShowBanner(false)
    setShowSettings(false)
  }

  const handleToggle = (type: keyof typeof consent) => {
    if (type === 'essential') return // Las esenciales no se pueden desactivar
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  if (!showBanner) {
    // Botón flotante para abrir configuración de cookies
    const savedConsent = getCookieConsent()
    if (savedConsent) {
      return (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={() => {
              setShowSettings(true)
              setShowBanner(true)
              const saved = getCookieConsent()
              if (saved) {
                setConsent({
                  essential: saved.essential,
                  performance: saved.performance,
                  functionality: saved.functionality,
                  marketing: saved.marketing,
                })
              }
            }}
            className="bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label="Configuración de cookies"
            title="Configuración de cookies"
          >
            <Cookie className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )
    }
    return null
  }

  return (
    <>
      {/* Overlay */}
      {showBanner && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => !showSettings && setShowBanner(false)}
        />
      )}

      {/* Banner/Modal */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showBanner ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-2xl max-w-4xl mx-auto rounded-t-2xl sm:rounded-2xl m-4 sm:m-6 max-h-[90vh] overflow-y-auto">
          {!showSettings ? (
            // Vista simple del banner
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Cookie className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Utilizamos cookies
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Para mejorar tu experiencia
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para análisis, 
                funcionalidad y marketing. Puedes aceptar todas, rechazar las opcionales o personalizar tus preferencias.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Solo esenciales
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="flex-1"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Personalizar
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Aceptar todas
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Al continuar, aceptas nuestra{" "}
                <Link
                  href="/cookies"
                  className="text-orange-600 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  Política de Cookies
                </Link>
              </p>
            </div>
          ) : (
            // Vista de configuración avanzada
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Settings className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Configuración de Cookies
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setShowSettings(false)
                    if (!getCookieConsent()) {
                      setShowBanner(false)
                    }
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-700 mb-6 text-sm">
                Gestiona tus preferencias de cookies. Las cookies esenciales son necesarias para el funcionamiento 
                del sitio y no se pueden desactivar.
              </p>

              <div className="space-y-4 mb-6">
                {/* Cookies Esenciales */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies Esenciales
                      </h4>
                      <p className="text-sm text-gray-600">
                        Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="relative inline-block w-12 h-6 bg-gray-300 rounded-full cursor-not-allowed opacity-50">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cookies de Rendimiento */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies de Rendimiento y Análisis
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handleToggle('performance')}
                        className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                          consent.performance
                            ? 'bg-orange-500'
                            : 'bg-gray-300'
                        }`}
                        aria-label="Toggle cookies de rendimiento"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            consent.performance ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cookies de Funcionalidad */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies de Funcionalidad
                      </h4>
                      <p className="text-sm text-gray-600">
                        Permiten que el sitio recuerde tus preferencias y ofrezca características mejoradas.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handleToggle('functionality')}
                        className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                          consent.functionality
                            ? 'bg-orange-500'
                            : 'bg-gray-300'
                        }`}
                        aria-label="Toggle cookies de funcionalidad"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            consent.functionality ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cookies de Marketing */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cookies de Marketing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Se utilizan para mostrar anuncios relevantes y medir la efectividad de campañas.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handleToggle('marketing')}
                        className={`relative inline-block w-12 h-6 rounded-full transition-colors ${
                          consent.marketing
                            ? 'bg-orange-500'
                            : 'bg-gray-300'
                        }`}
                        aria-label="Toggle cookies de marketing"
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            consent.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Rechazar opcionales
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="outline"
                  className="flex-1"
                >
                  Aceptar todas
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Guardar preferencias
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Más información en nuestra{" "}
                <Link
                  href="/cookies"
                  className="text-orange-600 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  Política de Cookies
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

