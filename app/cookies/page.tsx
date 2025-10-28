"use client"

import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import { useRouter } from "next/navigation"

// export const metadata: Metadata = {
//   title: "Política de Cookies - FlashFood",
//   description: "Política de cookies de FlashFood. Conoce cómo utilizamos las cookies para mejorar tu experiencia.",
// }

export default function CookiesPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()} 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Volver</span>
            </button>
            <div className="w-32 h-12 flex items-center justify-center">
              <img 
                src="/branding/Light-Background.svg" 
                alt="FlashFood Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a recordar información sobre tu visita, como tu idioma preferido y otras configuraciones, lo que puede hacer que tu próxima visita sea más fácil y el sitio te resulte más útil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Cómo Utilizamos las Cookies?</h2>
              <p>
                FlashFood utiliza cookies para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Recordar tus preferencias y configuraciones</li>
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Analizar cómo utilizas nuestro servicio</li>
                <li>Personalizar tu experiencia de usuario</li>
                <li>Proporcionar funciones de seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="mt-6 space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies Esenciales</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Cookies de sesión para mantener tu sesión activa</li>
                    <li>Cookies de seguridad para proteger contra ataques</li>
                    <li>Cookies de funcionalidad básica del sitio</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Rendimiento</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Google Analytics para análisis de tráfico</li>
                    <li>Cookies de rendimiento para optimizar la velocidad</li>
                    <li>Cookies de error para identificar problemas técnicos</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Funcionalidad</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies permiten que el sitio web recuerde las elecciones que haces.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Preferencias de idioma</li>
                    <li>Configuraciones de ubicación</li>
                    <li>Preferencias de notificaciones</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Marketing</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies se utilizan para mostrar anuncios más relevantes para ti.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Cookies de publicidad personalizada</li>
                    <li>Cookies de redes sociales</li>
                    <li>Cookies de remarketing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestión de Cookies</h2>
              <p>
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y puedes configurar la mayoría de navegadores para evitar que se coloquen.
              </p>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Configuración del Navegador</h3>
                  <p className="text-blue-800 text-sm">
                    Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envíen cookies. Sin embargo, si rechazas las cookies, es posible que no puedas utilizar todas las funciones de nuestro sitio web.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Panel de Preferencias</h3>
                  <p className="text-green-800 text-sm">
                    Utiliza nuestro panel de preferencias de cookies para gestionar qué tipos de cookies aceptas. Puedes cambiar tus preferencias en cualquier momento.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies de Terceros</h2>
              <p>
                Algunas cookies en nuestro sitio web son establecidas por servicios que aparecen en nuestras páginas. Estos incluyen:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Google Maps:</strong> Para mostrar ubicaciones de restaurantes</li>
                <li><strong>Redes Sociales:</strong> Para funciones de compartir</li>
                <li><strong>Proveedores de Pago:</strong> Para procesar transacciones</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Duración de las Cookies</h2>
              <p>
                Las cookies pueden ser:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Cookies de sesión:</strong> Se eliminan cuando cierras el navegador</li>
                <li><strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un período determinado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Actualizaciones de esta Política</h2>
              <p>
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
              <p>
                Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> cookies@flashfood.com</p>
                <p><strong>Teléfono:</strong> +34 900 123 456</p>
                <p><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid, España</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">© 2025 FlashFood. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="/privacidad" className="hover:text-brand-primary transition-colors">Privacidad</a>
              <span>•</span>
              <a href="/terminos" className="hover:text-brand-primary transition-colors">Términos</a>
              <span>•</span>
              <a href="/cookies" className="hover:text-brand-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
