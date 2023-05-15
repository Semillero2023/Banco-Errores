import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/BotonesDesplaza.module.css"

export  const SlideNextButton = () => {
  const swiper = useSwiper(); 

  return (
    <>
          <button onClick={() => swiper.slidePrev()} className={`${styles.ant} ${styles.Boton}`}>
             <FontAwesomeIcon icon={faArrowLeft} size="2x" /> 
          </button>
          <button onClick={() => swiper.slideNext()} className={`${styles.sig} ${styles.Boton}`}>
             <FontAwesomeIcon icon={faArrowRight} size="2x" /> 
          </button>
         
    </>
    
  );
}


export  const SlidePage = () => {
  const swiper = useSwiper(); 

  return (
    <>
          <button onClick={() => swiper.slidePrev()} className={`${styles.Pagant} ${styles.Boton}`}>
             <FontAwesomeIcon icon={faArrowLeft} size="2x" /> 
          </button>
          <button onClick={() => swiper.slideNext()} className={`${styles.Pagsig} ${styles.Boton}`}>
             <FontAwesomeIcon icon={faArrowRight} size="2x" /> 
          </button>
         
    </>
    
  );
}

