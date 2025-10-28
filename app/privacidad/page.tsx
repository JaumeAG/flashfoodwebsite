"use client"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import { useRouter } from "next/navigation"

// export const metadata: Metadata = {
//   title: "Política de Privacidad - FlashFood",
//   description: "Política de privacidad de FlashFood. Conoce cómo protegemos y utilizamos tu información personal.",
// }

export default function PrivacidadPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()} 
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
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
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
              <p>
                En FlashFood, recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Te registras en nuestra plataforma</li>
                <li>Realizas pedidos a través de nuestra aplicación</li>
                <li>Te comunicas con nuestro servicio de atención al cliente</li>
                <li>Participas en programas de fidelización</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Procesar y gestionar tus pedidos</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Enviarte notificaciones sobre el estado de tus pedidos</li>
                <li>Personalizar recomendaciones de productos</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartir Información</h2>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Con restaurantes asociados para procesar tus pedidos</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestra plataforma</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos</li>
                <li>Con tu consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Tus Derechos</h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Limitar el procesamiento de tus datos</li>
                <li>Portabilidad de datos</li>
                <li>Oponerte al procesamiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra plataforma. Puedes gestionar tus preferencias de cookies en cualquier momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cambios en esta Política</h2>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos a través de nuestra plataforma o por correo electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> privacidad@flashfood.com</p>
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
