import "./Nav.css"
export function NavBar() {
    return (
        <nav>
            <div className="link">
                <a href=".">Inicio</a>
            </div>
            <img src="/img/logo.png" alt="marca de ropa" className="marca" />
            <div className="link">
                <a href="">Clientes</a>
            </div>
        </nav>
    )
}