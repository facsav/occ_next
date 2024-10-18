// src/components/Home.jsx
"use client";
import  Carrusel  from './carrusel';
import { ContactUs } from './ContactUs';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css'; 
import Head from 'next/head';
import Link from 'next/link';
import {Helmet} from 'react-helmet';


export function Home (){
  const [backgroundPosition, setBackgroundPosition] = useState(0);
   const [showFirstImage, setShowFirstImage] = useState(true);

  const ulRef = useRef(null);
  const ulRef2 = useRef(null);

  useEffect(() => {
    // Configurar el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añade la clase 'animar' cuando la sección esté visible
            entry.target.classList.add('animar');
          }
        });
      },
      {
        threshold: 0.3, // Se activa cuando el 40% de la sección es visible
      }
    );

    // Observar el <ul>
    const currentUl = ulRef.current;
    if (currentUl) {
      observer.observe(currentUl);
    }
    const currentUl2 = ulRef2.current;
    if (currentUl2) {
      observer.observe(currentUl2);
    }
    // Limpiar el observer al desmontar el componente
    return () => {
      if (currentUl) {
        observer.unobserve(currentUl);
      }
      if (currentUl2) {
        observer.unobserve(currentUl2);
      }
    };
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Alternar entre las dos imágenes
  //     setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
  //   }, 5000);

  //   return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  // }, []);

  const sectionStyle = {
    backgroundImage: `url(/homeBanner.webp)`,
    color: 'var(--text-color)',
    transition: 'background-image 1s ease-in-out', // Añadir transición
  };
  
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
  }

    return () => {
        // Elimina el script del DOM al desmontar el componente
        document.head.removeChild(script);
    };
}, []);
  return(
  <>
  <Helmet>
    <meta
    name="description"
    content="OCC Revestimientos: Expertos en instalación de mármol, porcelanato y venecitas. Calidad y precisión en cada proyecto. Más de 13 años de experiencia transformando espacios con acabados duraderos y estéticos."
    />
    <title>Instalaciones OCC </title>
  </Helmet>
      <div style={{height:'8vh'}} ></div>
      <section id="home" style={sectionStyle}>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-sm-12 col-md-6 justify-content-center">
              <div id="cont-banner">
                <h1>Instalación de <br /> revestimientos</h1>
                <p>Expertos en la instalaciónes de revestimientos de alta calidad.
                   Transformamos cualquier espacio con mármol, porcelanato, venecitas y más,
                    ofreciendo soluciones duraderas para proyectos residenciales y comerciales.
                </p>
                <button className='buttonConocer' >
                  <a  href="/Trabajos">Conocer Más</a>
                </button>
                <button className='buttonConsultar'>
                  <a href="https://wa.link/5855u6">¡Consultanos!</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src="/homeBannerPhone.webp" alt="" />
  </section>
  <div className="caracteristicasOcc">
    <div><img src="/reloj.webp" alt="lupa" />Máxima eficiencia</div>
    <div><img src="/ondas.webp" alt="ondas" />Acabados más suaves</div>
    <div><img src="/lupa.webp" alt="reloj" />Especializados en el detalle</div>
  </div>
      <section id="home2">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <h2>¿A que nos dedicamos?</h2>
                      <div>
                          <p>
                          En OCC nos especializamos en la <b>instalación de revestimientos</b> de alta calidad, transformando espacios y llevando cada proyecto a su <b>máximo potencial. </b> <br />
                          Desde la <b>modernización de interiores</b>, pasando por <b>exteriores</b> con un estilo rústico, hasta zonas de alto tráfico como <b>veredas</b> u <b>oficinas</b>, sabemos adaptarnos a cualquier diseño que desees para tu proyecto. <br />
                          Nos mantenemos a la <b>vanguardia</b> de las tendencias y <b>técnicas más innovadoras</b>, trabajando con materiales delicados como <b>mármol</b> o <b>porcelanato</b>, hasta opciones más comunes como el <b>piso flotante</b>. <br />
                          En OCC, <b>cada detalle cuenta</b>. Si buscas calidad, innovación y un equipo comprometido, <b>Instalaciónes OCC</b> es tu mejor opción. <br />
                          <b>¡Si una superficie existe, en OCC la revestimos!</b>
                          </p>
                          <a className="btn btn-primary" href="/Trabajos">Nuestros Trabajos</a>
                      </div>
                  </div>
              </div>
          </div>

      </section>
      <section id="carrousel-home">
          <Carrusel/>
      </section>
      <section id="home3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6" id="porque">
              <h2>¿Porque revestir tu piscina?</h2>
              <p>Revestir las superficies de tu hogar no solo añade un toque moderno y elegante,
                   sino que también protege tus paredes y pisos contra el desgaste.
                    Con la elección de materiales adecuados, puedes transformar cualquier espacio
                     en uno funcional y visualmente atractivo.</p>
              <ul ref={ulRef}>
              <li>
                  <h4>Durabilidad:</h4>
                  <p>
                  Protege las paredes de tu piscina contra el desgaste y la corrosión.
                  </p>
                  <strong>
                  <b>Durabilidad:</b> Protege contra el desgaste y la corrosión.  
                  </strong>  
                </li>
                <li>
                  <h4>Fácil mantenimiento:</h4>
                  <p>
                  Superficies más lisas que facilitan la limpieza y reducen la acumulación de suciedad.
                  </p>
                  <strong>
                  <b>Fácil mantenimiento:</b> Superficies más lisas, menos suciedad, limpieza más facil.
                  </strong>  
                </li>
                <li>
                  <h4>Estética:</h4>
                  <p>
                  Mejora visualmente tu espacio, haciéndolo más atractivo y moderno.                   
                  </p>
                  <strong>
                    <b>Estética:</b> Espacios más atractivos y modernos.
                  </strong>  
                </li>
                <li>
                  <h4>Ahorro en costos:</h4>
                  <p>
                  Evita reparaciones mayores al prevenir daños estructurales.
                  </p>  
                  <strong>
                  <b>Ahorro en costos:</b> Evita reparaciones por daños estructurales.
                  </strong>
                </li>
                <li>
                  <h4>Seguridad:</h4>
                  <p>
                  Superficies antideslizantes que minimizan riesgos de accidentes.
                  </p>  
                  <strong>
                    <b>Seguridad:</b> Superficies antideslizantes, menos accidentes.
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              {/* <div className="img-home-fixed">
              </div> */}
              <img src="/images/Piscinas/piscina con jacuzzi.webp" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>¿Porque revestir tu hogar?</h2>
              <p>Revestir las superficies de tu hogar no solo añade un toque moderno y elegante,
                   sino que también protege tus paredes y pisos contra el desgaste.
                    Con la elección de materiales adecuados, puedes transformar cualquier espacio
                     en uno funcional y visualmente atractivo.</p>
              <ul  ref={ulRef2}>
              <li>
                  <h4>Protección:</h4>
                  <p>
                  Protege tus superficies de la humedad, el desgaste y otros daños.
                  </p>  
                  <strong>
                    <b>Protección:</b> Protege contra la humedad, el desgaste y otros daños.
                  </strong>
                </li>
                <li>
                  <h4>Estética renovada:</h4>
                  <p>
                  Mejora el aspecto de tus interiores con acabados de alta calidad.
                  </p>  
                  <strong>
                    <b>Estética renovada:</b> Mejora tus interiores con acabados de alta calidad.
                  </strong>
                </li>
                <li>
                  <h4>Durabilidad:</h4>
                  <p>
                  Aumenta la vida útil de las paredes y pisos.                    
                  </p>  
                  <strong>
                    <b>Durabilidad:</b> Aumenta la vida útil de las paredes y pisos. 
                  </strong>
                </li>
                <li>
                  <h4>Fácil limpieza:</h4>
                  <p>
                  Superficies más resistentes a manchas y fáciles de mantener.
                  </p>  
                  <strong>
                    <b>Fácil limpieza:</b> Superficies menos absorbentes y fáciles de mantener.
                  </strong>
                </li>
                <li>
                  <h4>Aumento del valor:</h4>
                  <p>
                  Incrementa el valor de tu hogar con revestimientos de materiales duraderos y atractivos.
                  </p> 
                  <strong>
                    <b>Aumento del valor:</b> Con materiales para revestir duraderos y atractivos.
                  </strong> 
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              {/* <div className="img-home-fixed2">
              </div> */}
              <img src="/images/trabajos-en-porcelanato/piso-revestido-en-porcelanto-gris-acabado.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
          <div className="container">
              <div id="contact" className="container contact">
              <hr />
                  <ContactUs/>
              </div>
          </div>            
      </section>
  </> 
  )
}