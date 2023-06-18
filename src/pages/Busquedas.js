import React from "react";
import { Container } from 'react-bootstrap';
import OpcionesConsulta from "../components/OpcionesConsulta";
import Loading from "../components/Loading";
import { searchMessageID, searchReturnCode } from "../querys/searchErrors";
import BoxCard from "../components/boxCard";
import styles from "../components/styles/Documentacion.module.css";
/* COSAS PARA LA LIBRERIA DEL SCROLLBAR */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "../components/BotonAvanzar"
// import required modules
import { EffectCoverflow, Keyboard, Scrollbar, A11y } from "swiper";
/*COSAS PARA SEPARAR LAS DOCUMENTACIONES EN PAGINACIONES */
import ReactPaginate from "react-paginate";

class Busquedas extends React.Component {
    state = {
        errores: [],
        PageNumber: 0,
        data: [],
        loading: false,
        error: null,
        consultaRealizada: false
    }

    CambiarPagina = (e) => {
        this.setState({
            PageNumber: e.selected
        })
    }

    handleClick = () => {
        try {
            this.setState({
                loading: true,
                consultaRealizada: true
            })
            let type = document.getElementsByName("tools");
            let filter = document.getElementById("search").value;
            type.forEach(async radio => {
                if (radio.checked) {
                    switch (radio.value) {

                        case "IdError":
                            const responseId = await this.getErrorsByIdMessage(filter);
                            this.setState({
                                errores: responseId,
                                loading: false
                            })
                            break;

                        default:
                            //RC, FS, AB
                            const responseCode = await this.getErrorsByReturnCode(radio.value, filter);
                            this.setState({
                                errores: responseCode,
                                loading: false
                            })
                            break;
                    }
                }
            })
        } catch (error) {
            alert(error.message);
            this.setState({
                loading: false
            })
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
        if (this.state.loading) {
            return (
                <>
                    <OpcionesConsulta
                        handleClick={this.handleClick}
                    />
                    <Loading />
                </>
            );
        }

        if (this.state.errores.length === 0) {
            return (
                <OpcionesConsulta
                    handleClick={this.handleClick}
                />
            );
        }

        const documents = [];
        this.state.errores.forEach((doc) => {
            documents.push(
                <SwiperSlide>
                    <BoxCard
                        key={doc.id}
                        errorObject={doc.data()}
                        docID={doc.id}
                    />
                    {/*<Tarjeta
                    key = {doc.id}
                    x = {doc.data()}
                    docID = {doc.id}
            />*/}
                </SwiperSlide>
            )
        })

        const ItemsPorPag = 5;

        //Separa los componentes de documentaciones en subarreglos
        const MatrizSub = [];
        for (var i = 0; i < documents.length; i = i + ItemsPorPag) {
            var TempArr = documents.slice(i, i + ItemsPorPag);
            MatrizSub.push(TempArr);
        }


        //En base a la matriz de subarreglos, se crea una matriz de carrouseles, cada una con su 
        //Paginacion
        const MatrizCarrousel = [];
        MatrizSub.forEach((x) => {
            MatrizCarrousel.push(
                <SwiperSlide>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        mousewheel={true}
                        keyboard={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 500,
                            modifier: 4,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Keyboard, Scrollbar, A11y]}
                        className="mySwiper"
                    >
                        <Container>
                            {x}
                        </Container>
                        <Container>
                            <SlideNextButton />
                        </Container>
                    </Swiper>
                </SwiperSlide>
            )
        })
        //Contador de paginas
        const ContPag = Math.ceil(MatrizCarrousel.length);
        
        if (ContPag === 0 && this.state.consultaRealizada) {
            console.log('No hubo resultados');
            return (
                <OpcionesConsulta
                    handleClick={this.handleClick}
                />
            );
        }

        return (
            <>
                <OpcionesConsulta
                    handleClick={this.handleClick}
                />
                <Container >
                    {MatrizCarrousel[this.state.PageNumber]}
                    <ReactPaginate
                        previousLabel={"Ant. Pag."}
                        nextLabel={"Sig. Pag."}
                        pageCount={ContPag}
                        onPageChange={this.CambiarPagina}
                        containerClassName={styles.pagbutton}
                        previousLinkClassName={"prevbutton"}
                        nextLinkClassName={"nextbutton"}
                        activeClassName={"activebutton"}
                    />
                </Container>
            </>
        );
    }
}

export default Busquedas;