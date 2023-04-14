// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
// import pages
import Home from "./pages/Home";
import Documentacion from "./pages/Documentacion";
import Formulario from "./pages/Formulario";
import CargaMasiva from "./pages/CargaMasiva";
// import components
import Navbar from "./components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Banco-Errores" element={<Home />} />
        <Route path="/Banco-Errores/Documentacion" element={<Documentacion />} />
        <Route path="/Banco-Errores/Formulario" element={<Formulario />} />
        <Route path="/Banco-Errores/CargaMasiva" element={<CargaMasiva />} />
      </Routes>
    </>
  );
}

export default App;
