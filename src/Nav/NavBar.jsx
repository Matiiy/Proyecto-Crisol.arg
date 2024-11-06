import "./Nav.css"
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <nav>
                <Link to="/" className="link">Inicio</Link>
                <img src="../public/logo.png" alt="marca de ropa" className="marca" />
                <Link to="/" className="link">Clientes</Link>
                <div className="carro">
                    <img className="img-car" src="public/carrito.png" alt="" />
                    <div id="carrito">
                        <h2>Carrito de Compras</h2>
                        <table id="lista-carrito">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                        <button id="vaciar-carrito">Vaciar carrito</button>
                        <button id="comprar">Comprar</button>
                    </div>
                </div>
            </nav>
        </>
    )
}