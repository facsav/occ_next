// import assets from "../assets/assets";
import React, { useState, useEffect } from 'react';
import carrousel from '../styles/Carrousel.css'



export const Carrusel = () => {
  //flechitas
    const [direction, setDirection] = useState('left'); 
    const toggleDirection = () => {
      // Cambiar la dirección al hacer clic en el botón
      setDirection(direction === 'right' ? 'left' : 'right');
    };

  //carrusel
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); 
  

    return (
        <>
        <div className="scroller" data-direction={direction} data-speed="slow">
        <div className="scroller__inner">
            <img src='/images/carrusel-home/pileta-revestida-en-venecitas-biseladas.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/piso-revestido-en-marmol-blanco.webp' alt="Pisos revestidos en mármol"/>
            <img src='/images/carrusel-home/venecitas-biseladas.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/piso-revestido-en-porcelanato-gris.webp' alt="Pisos revestidos en porcelanato"/>
            <img src='/images/carrusel-home/piscina-ovalada.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/pileta-con-cascada-revestida-en-venecitas.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/piso-revestido-en-simil-madera.webp' alt="Pisos revestido en simil madera oscuro"/>
            <img src='/images/carrusel-home/fuente-revestida-en-marmol-y-venecitas.webp' alt="Fuente revestida con venecitas"/>
            <img src='/images/carrusel-home/pileta-con-jacuzzi-estilo-tropical.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/baño-revestido-en-marmol-marmoleado-marron.webp' alt="Baños revestidos en mármol"/>
            <img src='/images/carrusel-home/piscina-con-jacuzzi-revestida-con-venecitas-celestes.webp' alt="Piscina revestida con venecitas"/>
            <img src='/images/carrusel-home/piso-exterior-revestido-en-marmol.webp' alt="Pisos exteriores en mármol"/>
            <img src='/images/carrusel-home/pileta-con-venecitas.webp' alt="Piscina revestida con venecitas"/>
        </div>
        </div>
  </>
    );
  };