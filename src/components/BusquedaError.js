import React from "react";
import { Container } from 'react-bootstrap';
import { searchMessageID, searchReturnCode } from "../querys/searchErrors";
import Tarjeta from "./Tarjeta";
import styles from "./styles/Documentacion.module.css";
/* COSAS PARA LA LIBRERIA DEL SCROLLBAR */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "../components/BotonAvanzar"
// import required modules
import { EffectCoverflow, Keyboard, Scrollbar, A11y } from "swiper";
/*COSAS PARA SEPARAR LAS DOCUMENTACIONES EN PAGINACIONES */
import ReactPaginate from "react-paginate";
/*Estilos*/
import "./styles/radiobutons.css"
import "./styles/searchbox.css"



class BusquedaError extends React.Component {

    handleClick = () => {
        try {
            let type = document.getElementsByName("tools");
            let filter = document.getElementById("search").value;
            type.forEach(async radio => {
                if (radio.checked) {
                    switch (radio.value) {

                        case "IdError":
                            const responseId = await this.getErrorsByIdMessage(filter);
                            this.fillRows(responseId);
                            break;

                        default:
                            //RC, FS, AB
                            const responseCode = await this.getErrorsByReturnCode(radio.value, filter);
                            this.fillRows(responseCode);
                            break;
                    }
                }
            })
        } catch (error) {
            alert(error.message);
        }
    }

    getErrorsByIdMessage = async (filter) => {
        const response = await searchMessageID(filter);
        return response
    }

    getErrorsByReturnCode = async (type, filter) => {
        const response = await searchReturnCode(type, filter);
        return response
    }

    render() {
        return (
            <>
                <Container className="mb-4 mt-4 container" style={{ textAlign: "center", color: "white" }}>
                    <div className="section over-hide z-bigger">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-1"
                                        value="RC"
                                        defaultChecked="checked"
                                    />
                                    <label className="for-checkbox-tools" htmlFor="tool-1">
                                        <i className="uil uil-line-alt" />
                                        Return Code (RC)
                                    </label>
                                    {/*
             */}
                                    <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-2"
                                        value="FS"
                                    />
                                    <label className="for-checkbox-tools" htmlFor="tool-2">
                                        <i className="uil uil-vector-square" />
                                        File Status (FS)
                                    </label>
                                    {/*
             */}
                                    <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-3"
                                        value="AB"
                                    />
                                    <label className="for-checkbox-tools" htmlFor="tool-3">
                                        <i className="uil uil-ruler" />
                                        Abend (AB)
                                    </label>
                                    {/*
             */}
                                    <input
                                        className="checkbox-tools"
                                        type="radio"
                                        name="tools"
                                        id="tool-4"
                                        value="IdError"
                                    />
                                    <label className="for-checkbox-tools" htmlFor="tool-4">
                                        <i className="uil uil-crop-alt" />
                                        ID Mensaje Error
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="mb-4 mt-4 container" style={{ textAlign: "center", color: "white", width: "100%", maxWidth: "600px" }}>
                    <div className="s132">
                        <form>
                            <div className="inner-form">
                                <div className="input-field second-wrap">
                                    <input id="search" type="text" placeholder="Inserte filtro de Busqueda" />
                                </div>
                                <div className="input-field third-wrap">
                                    <button className="btn-search" type="button" onClick={this.handleClick}>
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </>
        );
    }
}

export default BusquedaError;
