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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas nuestro sitio web. Estas cookies contienen información que se transfiere a tu dispositivo y nos permiten reconocer tu dispositivo y recordar información sobre tu visita, como tu idioma preferido, configuraciones y otras preferencias.
              </p>
              <p className="mt-4">
                Las cookies hacen que tu próxima visita sea más fácil y el sitio te resulte más útil. También nos ayudan a mejorar nuestros servicios y a ofrecerte una experiencia personalizada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. ¿Cómo Utilizamos las Cookies?</h2>
              <p>
                FlashFood utiliza cookies y tecnologías similares para diversos fines:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Funcionalidad esencial:</strong> Mantener tu sesión activa, recordar tus preferencias y garantizar la seguridad de tu cuenta</li>
                <li><strong>Mejora de la experiencia:</strong> Personalizar el contenido y las ofertas según tus preferencias y comportamiento</li>
                <li><strong>Análisis y estadísticas:</strong> Entender cómo los usuarios interactúan con nuestra plataforma para mejorar nuestros servicios</li>
                <li><strong>Gestión de pedidos:</strong> Recordar tu carrito de compras, historial de pedidos y restaurantes favoritos</li>
                <li><strong>Marketing y publicidad:</strong> Mostrarte contenido relevante y ofertas personalizadas (solo con tu consentimiento)</li>
                <li><strong>Integración con servicios de terceros:</strong> Facilitar el uso de funciones como mapas, pagos y redes sociales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tipos de Cookies que Utilizamos</h2>
              
              <div className="mt-6 space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1. Cookies Esenciales o Técnicas</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies son estrictamente necesarias para el funcionamiento del sitio web y no se pueden desactivar. Son esenciales para que puedas navegar por el sitio y utilizar sus funciones básicas.
                  </p>
                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Ejemplos de uso:</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Mantener tu sesión de usuario activa mientras navegas</li>
                      <li>Recordar tus preferencias de idioma y región</li>
                      <li>Gestionar el carrito de compras durante tu sesión</li>
                      <li>Garantizar la seguridad y prevenir fraudes</li>
                      <li>Recordar que has aceptado nuestra política de cookies</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Duración:</strong> Sesión o hasta 1 año según el tipo
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2. Cookies de Rendimiento y Análisis</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando y reportando información de forma anónima. Solo se activan con tu consentimiento.
                  </p>
                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Servicios que utilizamos:</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li><strong>Google Analytics:</strong> Análisis de tráfico web, páginas más visitadas, tiempo de permanencia</li>
                      <li><strong>Cookies de rendimiento:</strong> Medición de velocidad de carga y optimización del sitio</li>
                      <li><strong>Cookies de error:</strong> Identificación de problemas técnicos y errores</li>
                      <li><strong>Heatmaps y grabaciones:</strong> Análisis de comportamiento del usuario (si aplica)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Duración:</strong> Hasta 2 años
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3. Cookies de Funcionalidad</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o región) y proporcionen características mejoradas y más personales. Solo se activan con tu consentimiento.
                  </p>
                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Funcionalidades:</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Recordar tus preferencias de idioma y ubicación</li>
                      <li>Guardar tus restaurantes favoritos</li>
                      <li>Recordar tus configuraciones de notificaciones</li>
                      <li>Mantener tus preferencias de visualización (tema claro/oscuro)</li>
                      <li>Recordar información de direcciones de entrega frecuentes</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Duración:</strong> Hasta 1 año
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4. Cookies de Marketing y Publicidad</h3>
                  <p className="text-gray-700 mb-3">
                    Estas cookies se utilizan para hacer seguimiento de los visitantes a través de diferentes sitios web con la intención de mostrar anuncios relevantes y personalizados. Solo se activan con tu consentimiento explícito.
                  </p>
                  <div className="bg-gray-50 p-4 rounded mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Propósitos:</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1 text-sm">
                      <li>Mostrar anuncios personalizados basados en tus intereses</li>
                      <li>Realizar remarketing y seguimiento de conversiones</li>
                      <li>Medir la efectividad de nuestras campañas publicitarias</li>
                      <li>Compartir información con plataformas de publicidad (Google Ads, Facebook Ads, etc.)</li>
                      <li>Mostrar ofertas y promociones relevantes para ti</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Duración:</strong> Hasta 2 años
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies de Terceros</h2>
              <p>
                Algunas cookies en nuestro sitio web son establecidas por servicios de terceros que aparecen en nuestras páginas. Estos servicios pueden establecer sus propias cookies para realizar sus funciones. No tenemos control sobre estas cookies.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Analytics</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Utilizamos Google Analytics para analizar el uso de nuestro sitio web. Google Analytics genera estadísticas y otros informes sobre el uso del sitio web mediante cookies almacenadas en tu dispositivo.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Política de privacidad:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Maps</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Utilizamos Google Maps para mostrar ubicaciones de restaurantes y facilitar la navegación. Google Maps puede establecer cookies para mejorar la funcionalidad del mapa.
                  </p>
                  <p className="text-gray-600 text-xs">
                    <strong>Política de privacidad:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proveedores de Pago</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Cuando realizas un pago, nuestros proveedores de pago (como Stripe, PayPal u otros) pueden establecer cookies para procesar tu transacción de forma segura.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Estas cookies son necesarias para el procesamiento de pagos y están sujetas a las políticas de privacidad de cada proveedor.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Redes Sociales</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Si utilizas funciones de redes sociales en nuestro sitio (como botones de compartir), estas plataformas pueden establecer cookies para rastrear tu actividad.
                  </p>
                  <p className="text-gray-600 text-xs">
                    Las cookies de redes sociales están sujetas a las políticas de privacidad de cada plataforma (Facebook, Twitter, Instagram, etc.).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Duración de las Cookies</h2>
              <p>
                Las cookies pueden clasificarse según su duración:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong>Cookies de sesión:</strong> Son temporales y se eliminan automáticamente cuando cierras tu navegador. Se utilizan para mantener tu sesión activa durante tu visita.
                </li>
                <li>
                  <strong>Cookies persistentes:</strong> Permanecen en tu dispositivo durante un período determinado (días, meses o años) o hasta que las elimines manualmente. Se utilizan para recordar tus preferencias entre visitas.
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Nota importante:</strong> La duración específica de cada cookie puede variar. Puedes consultar la configuración de tu navegador para ver qué cookies están almacenadas y su fecha de expiración.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Gestión y Control de Cookies</h2>
              <p>
                Tienes el derecho y la capacidad de controlar y gestionar las cookies en tu dispositivo. Puedes configurar tu navegador para rechazar todas las cookies, aceptar solo ciertas cookies o recibir una notificación antes de que se establezca una cookie.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">6.1. Configuración del Navegador</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envíen cookies. Sin embargo, si rechazas las cookies esenciales, es posible que no puedas utilizar todas las funciones de nuestro sitio web.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-blue-900">Enlaces para gestionar cookies en los principales navegadores:</p>
                    <ul className="list-disc pl-6 text-blue-800 space-y-1">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline">Microsoft Edge</a></li>
                      <li><a href="https://help.opera.com/es/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="underline">Opera</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">6.2. Panel de Preferencias de Cookies</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Utiliza nuestro panel de preferencias de cookies para gestionar qué tipos de cookies aceptas. Puedes cambiar tus preferencias en cualquier momento accediendo a la configuración de cookies desde el pie de página o desde el banner de cookies.
                  </p>
                  <p className="text-green-800 text-sm">
                    <strong>Nota:</strong> Si desactivas ciertas cookies, algunas funcionalidades del sitio pueden no estar disponibles o no funcionar correctamente.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.3. Eliminación de Cookies</h3>
                  <p className="text-gray-700 text-sm">
                    Puedes eliminar todas las cookies que ya están en tu dispositivo. La mayoría de los navegadores también ofrecen la opción de eliminar cookies de sitios específicos. Ten en cuenta que si eliminas las cookies, es posible que tengas que volver a introducir información o ajustar tus preferencias.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies y Dispositivos Móviles</h2>
              <p>
                Si accedes a nuestro sitio web desde un dispositivo móvil, también utilizamos tecnologías similares a las cookies, como identificadores de dispositivos y almacenamiento local. Puedes gestionar estas configuraciones en las opciones de privacidad de tu dispositivo móvil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Base Legal para el Uso de Cookies</h2>
              <p>
                El uso de cookies se basa en las siguientes bases legales según el Reglamento General de Protección de Datos (RGPD):
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Cookies esenciales:</strong> Interés legítimo y necesidad contractual para proporcionar el servicio</li>
                <li><strong>Cookies de rendimiento y funcionalidad:</strong> Tu consentimiento explícito</li>
                <li><strong>Cookies de marketing:</strong> Tu consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Tus Derechos</h2>
              <p>
                En relación con las cookies y tus datos personales, tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Retirar tu consentimiento para el uso de cookies no esenciales en cualquier momento</li>
                <li>Acceder a información sobre qué cookies utilizamos y para qué propósito</li>
                <li>Eliminar las cookies almacenadas en tu dispositivo</li>
                <li>Configurar tu navegador para rechazar cookies</li>
                <li>Solicitar información sobre los datos recopilados a través de cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Actualizaciones de esta Política</h2>
              <p>
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Te recomendamos que revises esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
              <p className="mt-4">
                La fecha de la última actualización se indica en la parte superior de esta política. Los cambios significativos se comunicarán mediante un aviso destacado en nuestro sitio web o por correo electrónico cuando sea apropiado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Más Información</h2>
              <p>
                Para obtener más información sobre cookies y cómo funcionan, puedes visitar:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.youronlinechoices.com/es</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contacto</h2>
              <p>
                Si tienes preguntas, comentarios o solicitudes sobre nuestra política de cookies o sobre cómo gestionamos las cookies, puedes contactarnos en:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:cookies@flashfood.com" className="text-blue-600 hover:underline">cookies@flashfood.com</a></p>
                <p className="mb-2"><strong>Teléfono:</strong> +34 900 123 456</p>
                <p className="mb-2"><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid, España</p>
                <p className="text-sm text-gray-600 mt-4">
                  También puedes contactarnos a través de nuestro <a href="/contact" className="text-blue-600 hover:underline">formulario de contacto</a>.
                </p>
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
