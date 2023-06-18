import React from "react";
import Loader from "./media/LOADER.gif";
import LoadStyles from "../components/styles/Loading.module.css"

class Loading extends React.Component {
  
  render() { 
    
    return (
      <>
        <main> 
        </main>  
        <img src={Loader} alt="" className={LoadStyles.Loader}/>      
      </>
    );
  }
}

export default Loading;