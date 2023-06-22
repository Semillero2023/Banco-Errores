import React from "react";
import ErrorEmergente from "./ErrorEmergente";
import "./styles/boxCard.css";

class BoxCard extends React.Component {
    render() {
        const { errorObject, docID } = this.props;
        var tipoError = "";
        switch(errorObject['Tipo_Error']){
            case 'AB':
                tipoError = 'Abend'
                break;
            case 'FS':
                tipoError = 'File Status'
                break;
            case 'RC':
                tipoError = 'Return Code'
                break;
            default:
                tipoError = ''
                break;
        }
        var fechaError = errorObject['Fecha'].split("-");
        var fechaErrorNueva = "";
        if (parseInt(fechaError[0]) >= 2000) {
            fechaErrorNueva = fechaError[2] + '/' + fechaError[1] + '/' + fechaError[0];
        } else {
            fechaErrorNueva = fechaError[0] + '/' + fechaError[1] + '/' + fechaError[2];
        }

        return (
            <>
                <div key={docID} className="card">
                    {/*
                        <img class="card-img-top"
                            ref={imgRef}
                            src={require("./media/COBOL.png")}
                            alt="Zos-series"
                            className="sneaaker-img"
                        />
        */}
                    <h2 className="title"> {errorObject['ID_Mensaje_Error']} - {errorObject['Nombre_Error']}</h2>

                    <h5><strong>Tipo de error        : </strong>{tipoError} ({errorObject['Tipo_Error']})</h5>
                    <h5><strong>Codigo de retorno    : </strong> {errorObject['Codigo_Retorno']}</h5>
                    <h5><strong>Fecha del reporte    : </strong> {fechaErrorNueva}</h5>
                    <h5><strong>Reportado por        : </strong> {errorObject['Reportado_Por']}</h5>
                    <ul className="sizes-box">
                        <li>Complejidad: {errorObject['Complejidad']}</li>
                    </ul>
                    <ErrorEmergente
                        errorObject={errorObject}
                    />
                </div>
            </>
        );
    }
}

export default BoxCard;
