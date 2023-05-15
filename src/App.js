import { Routes, Route } from "react-router-dom";
import './index.css'
// import pages
import Home from "./pages/Home";
import Documentacion from "./pages/Documentacion";
import Formulario from "./pages/Formulario";
import CargaMasiva from "./pages/CargaMasiva";
import Busquedas from "./pages/Busquedas";
// import components
import Navbar from "./components/Navbar";
import FondoInicio from "./components/FondoInicio";
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Documentacion" element={<Documentacion />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/CargaMasiva" element={<CargaMasiva />} />
        <Route path="/Busquedas" element={<Busquedas />} />
      </Routes>
      <FondoInicio/>
    </>
  );
}

export default App;
