"use client"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import { useRouter } from "next/navigation"

// export const metadata: Metadata = {
//   title: "Términos y Condiciones - FlashFood",
//   description: "Términos y condiciones de uso de FlashFood. Conoce las condiciones para utilizar nuestra plataforma de pedidos.",
// }

export default function TerminosPage() {
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
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar la plataforma FlashFood, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
              <p>
                FlashFood es una plataforma digital que permite a los usuarios realizar pedidos de comida y bebida en restaurantes asociados. Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Catálogo digital de productos de restaurantes</li>
                <li>Sistema de pedidos en tiempo real</li>
                <li>Procesamiento de pagos</li>
                <li>Gestión de entregas y recogidas</li>
                <li>Programa de fidelización</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta de Usuario</h2>
              <p>
                Para utilizar nuestros servicios, debes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Ser mayor de 18 años o tener consentimiento parental</li>
                <li>Mantener la confidencialidad de tu cuenta</li>
                <li>Notificarnos inmediatamente sobre cualquier uso no autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pedidos y Pagos</h2>
              <p>
                Al realizar un pedido:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Confirmas que tienes fondos suficientes para el pago</li>
                <li>Aceptas los precios mostrados en la plataforma</li>
                <li>Reconoces que los tiempos de entrega son estimados</li>
                <li>Entiendes que los productos pueden variar según disponibilidad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cancelaciones y Reembolsos</h2>
              <p>
                Las cancelaciones están sujetas a las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Puedes cancelar antes de que el restaurante confirme el pedido</li>
                <li>Los reembolsos se procesarán en un plazo de 5-10 días hábiles</li>
                <li>Los gastos de entrega no son reembolsables</li>
                <li>Los productos personalizados pueden no ser elegibles para cancelación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilidades del Usuario</h2>
              <p>
                Como usuario, te comprometes a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>No utilizar la plataforma para actividades ilegales</li>
                <li>No interferir con el funcionamiento del servicio</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>Proporcionar información precisa y actualizada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
              <p>
                FlashFood no será responsable por:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Retrasos en la entrega causados por terceros</li>
                <li>Calidad de los productos preparados por los restaurantes</li>
                <li>Daños causados por el mal uso de la plataforma</li>
                <li>Interrupciones temporales del servicio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos de la plataforma FlashFood, incluyendo textos, gráficos, logos, imágenes y software, son propiedad de FlashFood o sus licenciantes y están protegidos por las leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ley Aplicable</h2>
              <p>
                Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta por los tribunales competentes de Madrid.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos términos, puedes contactarnos en:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> legal@flashfood.com</p>
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
