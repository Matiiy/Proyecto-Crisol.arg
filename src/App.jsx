import "./App.css"
import { NavBar } from "./nav/NavBar"
import prendas from "./assets/pren.json"
import { Prendas } from "./components/Prendas"
function App() {
  return (
    <>
      <NavBar />
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

export default App
