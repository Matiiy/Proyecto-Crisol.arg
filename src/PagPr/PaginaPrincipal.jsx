import { Prendas } from "../components/Prendas"
import prendas from "../assets/pren.json"

export function PaginaPrincipal() {
    return (
        <>
            <div className="Estilo">
                {
                    prendas.map((Element, key) => {
                        return (<Prendas
                            key={key}
                            id={Element.id}
                            img={Element.img}
                            nombre={Element.nombre}
                            descripcion={Element.descripcion}
                            precio={Element.precio}
                        />)
                    })
                }
            </div>
        </>
    )
}