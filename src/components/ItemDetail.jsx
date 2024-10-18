"use client"
import { ItemDetailCarrousel } from "./ItemDetailCarrousel";
import React, { useEffect, useState } from 'react';
import ReproductorVideos from "./reactselacome";
import itemDetail from "../styles/ItemDetail.css"

const Icono = ({ imagen, nombre, onClick }) => {

  const [clicked, setClicked] = useState(false);

  const toggleClickState = () => {
    setClicked(!clicked);
    onClick(); // Llama a la función de retorno de llamada proporcionada por el componente principal
  };

  return (
    <div className={`icono-container ${clicked ? 'clicked' : ''}`} onClick={toggleClickState}>
      <img src={imagen} alt="" className="iconos-p" />
      <span className="def-iconos"><p>{nombre}</p></span>
    </div>
  );
};

export function ItemDetail({ titulo, detalleFinal, nivelacion, opcionesPuenteAdherencia, higienizacion, opcionesPuenteAdherenciaLink, imgPortada, caracteristicas, listaDeAssets, cantImgCarrusel, pegamentos, pegamentosLink, preparacionSuperficie, puenteAdherencia, preparacionMaterial, juntas}) {
  const [clickedIcons, setClickedIcons] = useState([]);
  const [portadaHeight, setPortadaHeight] = useState(0);
  const [tipoContenido, setTipoContenido] = useState('imagen');
  
  const parseText = (text) => {
    const parsedText = text.replace(/\*(.*?)\*/g, (_, p1) => `<strong>${p1}</strong>`)
                                 .replace(/_(.*?)_/g, (_, p1) => `<u>${p1}</u>`);

    return <p dangerouslySetInnerHTML={{ __html: parsedText }} />;
  };
  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider .lista-img");
      const sildeButtons = document.querySelectorAll(".slider .slide-button");
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      sildeButtons.forEach(button => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      const handleSlideButtons = () => {
        sildeButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        sildeButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
      };

      imageList.addEventListener("scroll", () => {
        handleSlideButtons();
      });
    };

    initSlider();

    return () => {
      window.removeEventListener("load", initSlider);
    };

    
  }, []); 

  //--------------------------------------------------- Logica scroll ----------------------------------
  useEffect(() => {
    const portadaImg = document.getElementById('Portada');
    const contenedorPortada = document.getElementById('contenedor-portada');
  
    const handleImageLoad = () => {
      const esMasAnchaQueAlta = portadaImg.naturalWidth > portadaImg.naturalHeight;
      const esMasAltaQueAncha = portadaImg.naturalHeight > portadaImg.naturalWidth;
      const esIgual = portadaImg.naturalHeight == portadaImg.naturalWidth;
      const descripcion = document.getElementById('descripcion');
  
      if (esMasAnchaQueAlta) {
        if (window.innerWidth > 600){
          setPortadaHeight(70);
          }else{
          setPortadaHeight(40);
          }
        contenedorPortada.style.overflowX = 'auto';
        contenedorPortada.style.overflowY = 'hidden';
        portadaImg.style.height = '100%';
        portadaImg.style.width = 'auto';

      } else if (esMasAltaQueAncha) {
        if (window.innerWidth > 600){
        setPortadaHeight(70);
        }else{
        setPortadaHeight(52);
        }
        contenedorPortada.style.overflowX = 'hidden';
        contenedorPortada.style.overflowY = 'auto';
        portadaImg.style.width = '100%';
        portadaImg.style.height = 'auto';
      } 
    };
    
    if (imgPortada.complete) {
      handleImageLoad();
    } else {
      portadaImg.addEventListener('load', handleImageLoad);
    }
    return () => {
      portadaImg.removeEventListener('load', handleImageLoad);
    };
  }, [imgPortada]);
  //---------------------------------------- Logica cambio de imagen --------------------------------
  function cambiarPortada(nuevaImagen) {
    const portadaImg = document.getElementById('Portada');
    portadaImg.src = nuevaImagen;
  }
  const handleIconClick = (iconIndex) => {
  };

  return (
    <>
      <section style={{ paddingTop: '15vh', height: '100vh', height: 'auto' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7" style={{ marginTop: '1.5em' }}>
              <h1 id="titulo-pileta">{titulo} 
              {/* - {ubicacion} */}
              <hr /></h1>
              <div id="contenedor-portada" style={{ height: `${portadaHeight}vh`}}>
                {tipoContenido === 'imagen' ? (
                  <img src={imgPortada} alt="" id="Portada" className="portada-img" />
                ) : (
                  <ReproductorVideos />
                )}
              </div>

              <div className="carrusel">
                <div className="slider">
                  <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                  <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                  <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 descripcion" style={{ marginTop: "1.5em;" }}>
              <h3 style={{ color: "transparent" }}>{titulo}
              <hr /></h3>
              <h2>Preparación de la superficie:</h2>
              <ul>
                {preparacionSuperficie.map((preparacionSuperficie, index) => (
                  <li key={index}>
                    {preparacionSuperficie}
                  </li>
                ))}
              </ul>
              <h2>Colocación del puente de adherencia:</h2>
                <ul>
                  {puenteAdherencia.map((puenteAdherencia, index) => (
                    <li key={index}>
                      {puenteAdherencia}
                    </li>
                  ))}
                </ul>
                <div className="cont-button">
                {opcionesPuenteAdherencia.map(function(opcionesPuenteAdherencia, index) {
                  return (
                    <a href={opcionesPuenteAdherenciaLink[index]} key={index} style={{ display: 'block' }} target="_blank" rel="noopener noreferrer">
                      {opcionesPuenteAdherencia}
                    </a>
                  );
                })}
              </div>
              <h2>Preparación de la pieza:</h2>
                <ul>
                {preparacionMaterial.map((preparacionMaterial, index) => (
                  <li key={index} >
                    {preparacionMaterial}
                  </li>
                ))}
                </ul>
              <h2>Tomado de juntas:</h2>
                <ul>
                {juntas.map((juntas, index) => (
                  <li key={index}>
                    {juntas}
                  </li>
                ))}
                </ul>
                <div className="cont-button">
                {pegamentos.map((pegamentos, index) => (
                  <a href={pegamentosLink[index]} key={index} style={{ display: 'block' }} target="_blank" rel="noopener noreferrer">
                    {pegamentos}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
            <div class="container">
                <div class="row" style={{marginBottom:'20vh'}}> 
                    <div class="col-12 col-md-6 descripcion">
                      {/* <h2 style={{marginTop: '2em'}}>Consideracion y Cuidados:</h2>
                      <p>
                        {'->'} Fragilidad: <br />
                        Riesgos de ruptura al cortar {'->'} Solcuion, cuidar la temperatura de trabajo, mano firme pero cuidadosa con las heramientas, herramientas adecuadas. <br />
                        Riesgo de ruptura en la ciolocacion, si una seccion queda muy fragil,
                          por ejemplo por su finura o acabado en punta, el riesgo de ruptura enlña colocacion es altisimo, una mano experimentada es la unica solucion. <br /> <br />
                        {'->'} Pensaralguno mas para pileta, para pisos tengo mas.
                      </p> */}
                      <h2>Nivelación:</h2>
                        <ul>
                          {nivelacion.map((nivelacion, index) => (
                            <li key={index}>
                              {nivelacion}
                            </li>
                          ))}
                        </ul>
                      <h2>Consideraciones generales:</h2>
                        <ul>
                          {caracteristicas.map((caracteristicas, index) => (
                            <li key={index}>
                              {caracteristicas}
                            </li>
                          ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 descripcion">
                      <h2>{detalleFinal}:</h2>
                        <ul>
                          {higienizacion.map((higienizacion, index) => (
                            <li key={index}>
                              {higienizacion}
                            </li>
                          ))}
                        </ul>
                    </div>
                    {/* <div class="col-12 col-md-7">
                      <div className="carrusel">
                        <div className="slider">
                          <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                          <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                          <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                        </div>
                      </div>
                            <a className="btn btn-primary" href="/nuestrosTrabajos">Nuestros Trabajos</a>
                      <div className="carrusel">
                        <div className="slider">
                          <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                          <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                          <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                        </div>
                      </div>
                            <a className="btn btn-primary" href="/nuestrosTrabajos">Nuestros Trabajos</a>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  );
}

export default ItemDetail;