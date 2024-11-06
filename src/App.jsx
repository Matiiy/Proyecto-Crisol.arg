import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { NavBar } from "./Nav/NavBar"
import { PaginaPrincipal } from "./PagPr/PaginaPrincipal"
import { Footer } from "./components/Footer"
import { NotFound } from "./components/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
