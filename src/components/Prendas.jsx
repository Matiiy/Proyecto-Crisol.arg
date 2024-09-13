import "./prend.css"

export function Prendas({ id, img, nombre, descripcion, precio }) {
    return (
        <>
            <div className="prendas">
                <div className="prendas-img"><img src={img} alt="imagen del producto" /></div>
                <div className="prendas-body">
                    <h1 className="prendas-tittle">{nombre}</h1>
                    <p className="prendas-descripcion">{descripcion}</p>
                    <h3>{precio}</h3>
                    <a href="">Comprar</a>
                </div>
            </div>
            {/* <li>{id}</li> */}
        </>
    )
}