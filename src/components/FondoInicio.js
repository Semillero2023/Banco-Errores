import React from "react";
import "./styles/Fondo.css";
import Suelo from "./media/SUELO.png"  ;
import Hollow from "./media/HK.gif";
import Rocas from "./media/ROCAS.png";
class FondoInicio extends React.Component {
    render(){
        return(    
        <div> 
            <div className="parallax">
                <img src={Hollow} id="Hollow" alt=""/>
            </div>  
            <img src={Rocas} id="rocas" alt=""/>
            <img src={Suelo} id="suelo" alt="" /> 
       </div>
        );
    }
}

export default FondoInicio;