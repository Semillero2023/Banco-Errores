import React from "react";
import "./styles/boxCard.css";

class BoxCard extends React.Component {
    render() {
        const { errorObject, docID } = this.props;
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
                        <h1 className="title">IB24242 - Nombre Descriptivo del Error</h1>
                        <h5><strong>Tipo de error        : </strong> {errorObject['Tipo_Error']}</h5>
                        <h5><strong>Codigo de retorno    : </strong> {errorObject['Codigo_Retorno']}</h5>
                        <h5><strong>Fecha del reporte    : </strong> {errorObject['Fecha']}</h5>
                        <h5><strong>Reportado por        : </strong> {errorObject['Reportado_Por']}</h5>
                        <ul className="sizes-box">
                            <li>Complejidad: {errorObject['Complejidad']}</li>
                        </ul>
                        <div className="button-box">
                            <button className="purchase" >
                                Descripcion del Error
                            </button>
                        </div>
                    </div>
            </>
        );
    }
}

export default BoxCard;
