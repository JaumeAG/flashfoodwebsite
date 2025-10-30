import {Dashboard} from "@/components/ContentTab/Dashboard"
import {TPV} from "@/components/ContentTab/TPV"
import {Analitica} from "@/components/ContentTab/Analitica"
import {Ventas} from "@/components/ContentTab/Ventas"
import {Comandero} from "@/components/ContentTab/Comandero"
import {AuraAsistente} from "@/components/ContentTab/AuraAsistente"
import {Clientes} from "@/components/ContentTab/Clientes"
import {Fidelizacion} from "@/components/ContentTab/Fidelizacion"

export default function ContentTab({ contentTab }: { contentTab: string }) {
    return (
        <div className="flex flex-col gap-4">
            {contentTab === 'dashboard' && <Dashboard />}
            {contentTab === 'tpv' && <TPV />}
            {contentTab === 'analitica' && <Analitica />}
            {contentTab === 'ventas' && <Ventas />}
            {contentTab === 'comandero' && <Comandero />}
            {contentTab === 'asistente-ia' && <AuraAsistente />}
            {contentTab === 'clientes' && <Clientes />}
            {contentTab === 'fidelizacion' && <Fidelizacion />}
        </div>
    )
}