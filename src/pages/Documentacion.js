import React from "react";
import { showErrors } from "../querys/getAllDocs";
import Tarjeta from "../components/Tarjeta";

class Documentacion extends React.Component {

    state = {
        errores : []
    }

    async componentDidMount(){
        const arrayErrores = await showErrors()
        this.setState({errores : arrayErrores})
        // arrayErrores.forEach((doc) => {
        //    console.log(doc.id, " => ", doc.data());
        // });
    }

    render(){

        const documents = [];
        this.state.errores.forEach((doc) => {
            documents.push(
                <Tarjeta
                   key = {doc.id}
                   x = {doc.data()}
                   docID = {doc.id}
                />
            )
        })

        return(
            <>
            <h1 className="display-4 mt-4 mb-4" style={{textAlign: "center"}}>Repositorio de errores</h1>
            {documents}
            </>
        );
    }
}

export default Documentacion;