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
                    <button className="agregar-carrito" data-id={id} data-img={img} data-nombre={nombre} data-precio={precio}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}





// export function Prendas({ id, img, nombre, descripcion, precio }) {
//     return (
//         <>
//             <h1>Mi Tienda</h1>
//             <div id="productos">
//                 <div className="producto">
//                     <h3>Producto 1</h3>
//                     {/* <div className="prendas-body"> */}
//                     {/* <h1 className="prendas-tittle">{nombre}</h1> */}
//                     {/* <p className="prendas-descripcion">{descripcion}</p> */}
//                     <p className="precio">{precio}</p>
//                     {/* <img src={img} alt="imagen del producto" /> */}
//                     <button className="agregar-carrito" data-id={id}>Agregar al carrito</button>
//                     {/* </div> */}
//                 </div>
//             </div>
//         </>
//     )
// }
