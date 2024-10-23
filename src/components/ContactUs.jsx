
"use client";

import DarkMode from "./DarkMode";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

if (DarkMode){
    console.log("esta activo")
}


const ContactUs = () => {
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
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length >= 10;
  };

  const validateFields = () => {
    const emailInput = form.current['user_email'];
    const phoneInput = form.current['user_phone'];

    const isEmailFieldValid = validateEmail(emailInput.value);
    const isPhoneFieldValid = validatePhone(phoneInput.value);

    setIsEmailValid(isEmailFieldValid);
    setIsPhoneValid(isPhoneFieldValid);

    return isEmailFieldValid || isPhoneFieldValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateFields()) {
      setStatusMessage('Error: Completa por lo menos 1 campo requerido.');
      setIsMessageVisible(true);

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        setIsMessageVisible(false);
        setStatusMessage(null);
      }, 5000);

      return;
    }

    emailjs
      .sendForm('service_hdk4vcf', 'template_vrxhv5m', form.current, {
        publicKey: 'p3RlW9nRNOtTHkhGD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatusMessage('Enviado');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage('Error: No enviado');
        }
      );

    setIsMessageVisible(true);

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      setIsMessageVisible(false);
      setStatusMessage(null);
    }, 5000);
  };

  const resetForm = () => {
    form.current.reset();
    setIsEmailValid(true);
    setIsPhoneValid(true);
  };

  useEffect(() => {
    // Ocultar el mensaje después de 5 segundos al cargar la página
    setTimeout(() => {
      setIsMessageVisible(false);
      setStatusMessage(null);
    }, 5000);
  }, []);



  
    return (
      <div>
        {statusMessage && (
        <div
          className={`alert ${
            statusMessage === 'Enviado' ? 'alert-success' : 'alert-danger'
          } ${isMessageVisible ? 'show' : 'hide'}`}
          role="alert"
          style={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          {statusMessage}
        </div>
      )}
        <header id="contactContainer" className="row align-items-center header justify-content-center">
                <div style={{height:'100%'}} className="rightContact col-10 col-md-5 text-start d-grid align-items-center">
                    <div className="title_container">
                        <h3 className="">
                            Inf. de Contacto
                        </h3>
                    <hr />
                        <p><br />Ante cualquier <b>consulta</b> no dude <br />
                        en <b>escribirnos</b>, ofrecemos <br />
                        <b>asesoramiento gratuito</b>,
                         en cualquier <br />momento del dia.
                        En <b>OCC</b> ofrecemos <br />
                        nuestro <b>conocimiento</b> <br />
                        y <b>experiencia</b> en todo momento.
                        </p>
                    </div>

                    <ul className="">
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>

                        <span style={{margin:'10px'}}>
                        <a style={{color:'white', textDecoration:'none'}} href="tel:+54 9 1122247366">+54 9 11-2224-7366</a>
                        </span>

                        </li>
                        <br />
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                            <span style={{margin:'10px'}}>
                            <a style={{color:'white', textDecoration:'none'}} href="mailto:occmarbletile@gmail.com">occmarbletile@gmail.com</a>
                            </span>
                        </li>
                        <br />
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span style={{margin:'10px'}}>
                        <a style={{color:'white', textDecoration:'none'}} href="https://maps.app.goo.gl/EtvzxhVFP5qsQPdt7">Almirante Solier 473, Villa Sarmiento</a>
                        </span>
                            
                        </li>
                    </ul>
                </div>

                <div className="leftContact col-10 col-md-6">
                    <div className="d-grid justify-content-center align-items-center">
                        <form ref={form} onSubmit={sendEmail}>
                            <p style={{marginLeft:'10px', marginTop:'1em', color:'#05445E'}} >O contactese directamente via mail:</p>

                            <div className="container">

                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <label>Nombre</label>
                                        <br />
                                        <input  type="text" name="user_name" placeholder="Juan" id="input-1"/>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <label>Apellido</label>
                                        <br />
                                        <input type="text" name="user_lastname" placeholder="Ruiz" id="input-2"/>
                                    </div>
                                </div>
                                
                                <div className="row">
        <div className="col-12 col-lg-6">
          <label>Telefono</label>
          <br />
          <input
            type="tel"
            name="user_phone"
            id="input-3"
            placeholder="15-1234-5678"
            style={{ borderColor: isPhoneValid ? 'rgba(0, 0, 0, 0.267)' : 'red' }}
          />
          {!isPhoneValid && <p style={{ color: 'red' }}>Teléfono inválido</p>}
        </div>
        <div className="col-12 col-lg-6">
          <label>Mail</label>
          <br />
          <input
            type="email"
            name="user_email"
            id="input-4"
            placeholder="nombre@email.com"
            style={{ borderColor: isEmailValid ? 'rgba(0, 0, 0, 0.267)' : 'red' }}
          />
          {!isEmailValid && <p style={{ color: 'red' }}>Correo electrónico inválido</p>}
        </div>

      </div>
      <br className="d-none d-md-block" />
      <div className="row">
          <div className="col">
              <label>Tu mensaje</label>
              <br />
              <textarea name="message" />
          </div>
      </div>
                                <br className="d-none d-md-block" />
                                <div className="row">
                                    <div className="col">
                                        <button id="boton2" style={{color:'#05445E', borderColor:'#05445E'}} className="btn btn-primary" type="submit" value="Send">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    </header>
      </div>
    );
  };

  export default ContactUs;