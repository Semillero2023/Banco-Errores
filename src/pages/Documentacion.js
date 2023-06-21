import React from "react";
import { showErrors } from "../querys/getAllDocs";
/* TARJETA 2 */
import BoxCard from "../components/boxCard";
/* TARJETA 1 */
//import Tarjeta from "../components/Tarjeta";
import styles from "../components/styles/Documentacion.module.css";
import Loading from "../components/Loading";
/* COSAS PARA LA LIBRERIA DEL SCROLLBAR */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideNextButton } from "../components/BotonAvanzar"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Keyboard, Scrollbar, A11y } from "swiper";
import { Container } from "react-bootstrap";
/*COSAS PARA SEPARAR LAS DOCUMENTACIONES EN PAGINACIONES */
import ReactPaginate from "react-paginate";
//Importo loader


class Documentacion extends React.Component {

    state = {
        errores: [],
        PageNumber: 0,
        data: [],
        loading: true,
        error: null
    }

    CambiarPagina = (e) => {
        this.setState({
            PageNumber: e.selected
        })
        console.log(e.selected);
    }

    async componentDidMount() {
        await this.fetchConsulta();
    }

    fetchConsulta = async () => {
        try {
            const arrayErrores = await showErrors()
            this.setState({
                errores: arrayErrores,
                loading: false
            })
        }
        catch (error) {
            this.setState({
                loading: false
            })
            console.log("Error 404")
        }
    }
    render() {

        // Retornando Componentes con sus props respectivos
        if (this.state.loading) {
            return <Loading />
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
                </SwiperSlide>
            )
        })
        {/*<Tarjeta
        key = {doc.id}
        x = {doc.data()}
        docID = {doc.id}
        />*/}


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


        //La matriz d carrouseles se retorna como un solo corrosuel vertical
        return (
            <>
                <main className={styles.overlayMain}></main>
                <h1 className="mt-2 mb-4" style={{ textAlign: "center", color: "white" }}>Repositorio de errores</h1>
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

export default Documentacion;