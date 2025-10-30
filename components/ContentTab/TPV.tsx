import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function TPV() {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 bg-white rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 items-start w-full md:max-w-xl">
                <header>
                    <h1 className="text-2xl sm:text-3xl font-bold">Ventas</h1>
                </header>
                <div className="w-full">
                    <article className="flex flex-col gap-3">
                        <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                            <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                                <CheckCircle className="w-4 h-4 text-[#E4512F]" />
                            </div>
                            <p className="text-gray-700 leading-snug">Filtra tus ventas por fecha, mesa, cliente, producto, etc.</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                            <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                                <CheckCircle className="w-4 h-4 text-[#E4512F]" />
                            </div>
                            <p className="text-gray-700 leading-snug">Revisa el contenido de cada venta.</p>
                        </div>
                        <div className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-2xl p-4 border border-gray-200">
                            <div className="w-8 h-8 rounded-full bg-[#FFF0EB] flex items-center justify-center shrink-0">
                                <CheckCircle className="w-4 h-4 text-[#E4512F]" />
                            </div>
                            <p className="text-gray-700 leading-snug">Envía las ventas a tu correo electrónico.</p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Image
                    className="w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-[700px] h-auto rounded-2xl shadow-2xl border border-gray-200 object-contain"
                    src="/imagesNavigator/tpv.png"
                    alt="Dashboard"
                    width={700}
                    height={600}
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 640px, 700px"
                    priority
                />
            </div>
        </section>
    )
}