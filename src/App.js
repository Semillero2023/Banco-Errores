// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Banco-Errores"  element={<Home/>}/>
        <Route path="/Documentacion"  element={<Documentacion/>}/>
        <Route path="/Formulario"     element={<Formulario/>}/>
        <Route path="/CargaMasiva"    element={<CargaMasiva/>}/>
      </Routes>

    </Router>
  );
}

export default App;
