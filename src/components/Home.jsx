// src/components/Home.jsx
"use client";
import { Carrusel } from './Carrusel';
import { ContactUs } from './ContactUs';
import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; 
import Head from 'next/head';
import Link from 'next/link';


export function Home() {
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prevShowFirstImage => !prevShowFirstImage);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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
      document.head.removeChild(script);
    };
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${showFirstImage ? "/homeBanner.webp" : "/homeBanner2.webp"})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'var(--background-color)',
    paddingTop: '6rem',
    height: '80vh',
    color: 'var(--text-color)',
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="OCC Revestimientos: Expertos en instalación de mármol, porcelanato y venecitas. Calidad y precisión en cada proyecto. Más de 13 años de experiencia transformando espacios con acabados duraderos y estéticos."
          />
        <title>OCC Colocación de revestimientos</title>

      </Head>
      <div style={{ height: '8vh' }}></div>

      <section id="home" style={sectionStyle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="d-md-none">
                Experiencia
                <br />
                internacional
              </h1>
              <h3 className="d-md-none">en trabajos de precisión</h3>
            </div>
          </div>
        </div>
        <img src="/homeBannerPhone.webp" alt="" />
      </section>

      <section id="home2">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>¿A qué nos dedicamos?</h2>
              <div>
                <p>
                  En OCC, nos especializamos en la <b>perfección de revestimientos</b>, abarcando una amplia gama de superficies que van desde <b>paredes y suelos</b>, tanto internos como externos de hogares, hasta sofisticados revestimientos para <b>piscinas</b>. Nuestra destreza se refleja en la aplicación de <b>diversos métodos de adherencia</b>, como pegamento epoxi, Klaukol, cal entre otros, siempre garantizando la máxima durabilidad.
                  Trabajamos con el material de su preferencia, adaptándonos hábilmente al entorno en el que realizaremos la instalación. Nos enorgullece destacar la <b>precisión y finura</b> excepcionales de nuestros acabados.
                  En OCC, <b>no existen límites</b> cuando se trata de revestir superficies. Ya sea que esté planificando una renovación en su hogar o que sea un arquitecto buscando pericia en revestimientos, estamos aquí para superar sus expectativas. Contáctenos para cualquier consulta; en OCC, la consigna es clara: <b>¡no hay superficie que no pueda ser revestida!</b>
                </p>
                <Link href="/nuestrosTrabajos" className="btn btn-primary">
                  Nuestros Trabajos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="carrousel-home">
        <Carrusel />
      </section>
      <section id="contact">
        <div className="container">
          <div id="contact" className="container contact">
            <hr />
            <ContactUs /> 
          </div>
        </div>
      </section>
    </>
  );
}
