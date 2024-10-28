"use client";

import '../styles/SobreNosotros.css'
import { useEffect } from "react";
import '../styles/Home.css'; 


const SobreNosotros = () =>{
// Seguimiento publicidad
useEffect(() => {
    // Agrega aquí el código del script del Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16497254972';
    document.head.appendChild(script);
    if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16497254972');


      const startCarouselInterval = (carouselId, interval) => {
        const carousel = document.getElementById(carouselId);
    
        // Limpia cualquier intervalo existente en este carousel
        if (carousel.dataset.intervalId) {
            clearInterval(carousel.dataset.intervalId);
        }
    
        const carouselInterval = setInterval(() => {
            const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
            const nextIndex = (activeIndex + 1) % carousel.querySelectorAll('.carousel-item').length;
    
            carousel.querySelector(`[data-bs-slide-to="${nextIndex}"]`).click();
        }, interval);
    
        // Almacena el ID del intervalo en el dataset del carousel
        carousel.dataset.intervalId = carouselInterval;
    
        return () => clearInterval(carouselInterval);
    };
    
    // Iniciar intervalos para cada carousel con intervalos específicos
    const clearIntervals = [
        startCarouselInterval('carouselExampleIndicators1', 10000), // 10 segundos
        startCarouselInterval('carouselExampleIndicators2', 12000), // 12 segundos
        startCarouselInterval('carouselExampleIndicators3', 8000), // 8 segundos
        startCarouselInterval('carouselExampleIndicators4', 9000), // 9 segundos
        startCarouselInterval('carouselExampleIndicators5', 11000), // 11 segundos
        startCarouselInterval('carouselExampleIndicators6', 12000)  // 12 segundos
    ];
    
    // Función para limpiar todos los intervalos (por si necesitas detenerlos en algún momento)
    const clearAllIntervals = () => {
        clearIntervals.forEach(clearIntervalFn => clearIntervalFn());
    };


    }

  

    return () => {
        // Elimina el script del DOM al desmontar el componente
        document.head.removeChild(script);
    };
}, []);
    return(
        <>
            <section id="sobreNosotros">

                <div style={{paddingTop:'6rem'}} className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h1>Sobre Nosotros</h1>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row row1">
                        <div class="ellipse"></div>
                        <div class="ellipse-2"></div>
                        <div class="ellipse-3"></div>
                        <div className="col-12 col-lg-6 imgStart img400 ">


                            {/* Carrousel 1 */}
                            <div id="carouselExampleIndicators1" class="carousel slide">
                                <div class="carousel-indicators d-none">
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"images/SobreNos/1/abasto.webp"} height='400px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"images/SobreNos/1/torreAbasto.webp"} height='400px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"images/SobreNos/1/torreAbasto2.webp"} height='400px' alt='Imagen de Miami' />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <h3>
                                96’ - 97’
                            </h3>
                            <p>
                            A mediados del 96 junto a mi padre quien tanto conocimiento nos otorgó; desde las bases de la <b>construcción</b> y el <b>revestimiento</b>, como en su especialización en colocación de azulejos con cal, la construcción de frigoríficos y torres, comenzamos nuestro camino. <br />
                            Empezábamos en la construcción de las <b>torres del abasto</b> trabajando para una de las constructoras más importantes del país, <b>Dinsa</b>. En este proyecto trabajamos desde la estructura de las torres, hasta en el fino detalle del acabado de los revestimientos.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                        <h3>
                            98’ - 00’
                        </h3>
                        <p> 
                        Trabajando en <b>Dinsa</b> tuvimos el privilegio de participar en la obra que daría apertura en el 98 a uno de los centros comerciales más importantes y con más historia, el <b>Abasto Shopping</b>. <br />
                        Los veredones de la <b>reserva urbana de puerto Madero</b>, y al año siguiente en el 2000, antes del estallido social, participamos en las reformas del aeropuerto de <b>Ezeiza</b> que conllevaron planta baja, primer piso y baños.
                        </p>
                        </div>
                        {/* Carrousle 2 */}
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img300">
                            <div id="carouselExampleIndicators2" class="carousel slide">
                                <div class="carousel-indicators d-none">
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"/images/SobreNos/2/eze.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/2/reservaUrbana1.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/2/reservaUrbana2.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                </div>
 
                            </div>
                        </div>
                    </div>

                    <div className="row row1">
                        {/* Carrousel 3 */}
                        <div className="col-12 col-lg-6 imgStart img300 ">
                            <div id="carouselExampleIndicators3" class="carousel slide">
                                <div class="carousel-indicators d-none">
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"/images/SobreNos/3/miami2.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/3/fisherIsland.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/3/cocoWalk.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3>
                                01’ - 08’
                            </h3>
                            <p>
                            En el 2001 emprendimos un viaje a los <b>Estados Unidos</b> que duraría hasta el 2008, durante este período trabajamos para la constructora <b>Kingston Holding</b>, recorriendo lugares como Fisher Island, Coconut Grove, entre otros. Además trabajamos con <b>xxx marmolera</b>.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            <h3>
                                08’ - 10’
                            </h3>
                            <p>
                                Al regresar a nuestra amada <b>Argentina</b> participamos en la construcción de <b>Madero Center</b> o La Rosadita, este sobrenombre sería conocido luego del escándalo de la ruta del dinero K, un año más tarde en la construcción de <b>las torres del Yacht</b>, dejando así una zona de la capital bonaerense finalizada. <br />
                                No solo nos dedicamos a la construcción de proyectos masivos, también realizamos trabajos para hogares en countries como <b>Boca Raton, San Diego,</b> entre otros.
                            </p>

                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img400">
                            {/* Carrousel 4 */}

                            <div id="carouselExampleIndicators4" class="carousel slide">
                                <div class="carousel-indicators d-none">
                                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"/images/SobreNos/4/torres.webp"} height='400px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/4/torres2.webp"} height='400px' alt='Imagen de Miami' />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6  imgStart img300">

                        {/* Carrousel 5 */}
                        <div id="carouselExampleIndicators5" class="carousel slide">
                            <div class="carousel-indicators d-none">
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={"/images/SobreNos/5/terminal.webp"} height='300px' alt='Imagen de Miami' />
                                </div>
                                <div class="carousel-item">
                                    <img src={"/images/SobreNos/5/construccionCasas1.webp"} height='300px' alt='Imagen de Miami' />
                                </div>
                                <div class="carousel-item">
                                    <img src={"/images/SobreNos/5/construccionCasas2.webp"} height='300px' alt='Imagen de Miami' />
                                </div>
                            </div>

                        </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <h3>
                                11’ - 18’
                            </h3>
                            <p>    
                                En el 2011 tuvimos el privilegio de volver a reformar el aeropuerto de <b>Ezeiza</b>, esta vez en la <b>sección C</b>. Luego de esto nos dedicamos puramente a la <b>construcción de hogares</b> hasta el año 2018, donde nuevamente viajamos a los <b>Estados Unidos</b>.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            <h3>
                                18’ - 23’
                            </h3>
                            <p>
                                Alli, comenzamos la dedicación y especialización a <b>tiempo completo</b> en los revestimientos trabajando en <b>Orlando, Florida, Colorado, Miami</b>, etc. Participamos en proyecto en <b>Mármol</b>, material de alta complejidad debido a su fragilidad, de la mano de <b>Argenta Moitai.</b> <br />
                                Durante estos años aprendimos a <b>revestir en cualquier superficie</b>, cal, cemento, vidrio, pvc, lo que fuera, tenemos no solo la <b>experiencia</b> y <b>capacitación</b>, si no la <b>habilidad</b> para revestir lo que usted desee, nuestro objetivo al volver en el 2023 a la Argentina es <b>cumplir su sueño</b> o visión, <b>nada es imposible de revestir en OCC</b>.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img300">

                            {/* Carrousel 6 */}


                            <div id="carouselExampleIndicators6" class="carousel slide">
                                <div class="carousel-indicators d-none">
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"/images/SobreNos/6/miami.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/6/construccionPileta.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={"/images/SobreNos/6/piletaFinalCarrousel.webp"} height='300px' alt='Imagen de Miami' />
                                    </div>
                                </div>

                            </div>

                            
                        </div>
                    </div>
                </div>
                
            </section>

        </>
    )


}

export default SobreNosotros;