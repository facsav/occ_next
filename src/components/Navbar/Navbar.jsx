"use client";

import React from 'react';
import NavItemWithImage from './NavItemWithImage.jsx';
import DarkMode from '../DarkMode';
// import assets from '../../assets/assets'; 
import ContactUs from '../ContactUs.jsx';
import styles from '../../styles/Navbar.css';
import styles2 from '../../styles/App.css';
import sobre_nosotros from '@/app/SobreNosotros/page.js';


const Navbar = () => {
    return (
      <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={"logoAzul.svg"} alt="OCC" width="50" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-md-end align-items-md-center">
              <NavItemWithImage imageSrc={"/images/Navbar/casa.svg"} alt="Casa" text="Inicio" showImageOnMobile={true} ruta='/' />
              <NavItemWithImage
                imageSrc={"/images/Navbar/star.svg"}
                alt="Estrella"
                text="Trabajos"
                showImageOnMobile={true}
                ruta='/Trabajos'
              />
              <NavItemWithImage imageSrc={"/images/Navbar/bolso.svg"} alt="Info" text="Colocación" showImageOnMobile={true} ruta='/Colocacion' />
              <NavItemWithImage imageSrc={"/images/Navbar/info.svg"} alt="Info" text="Sobre nosotros" showImageOnMobile={true} ruta="/SobreNosotros"/>

              <NavItemWithImage
                imageSrc={"/images/Navbar/telefono.svg"}
                alt="Teléfono"
                text="Contacto"
                showImageOnMobile={true}
                ruta="#"
                type='button'
                databs='modal'
                dataTarget='#exampleModal'
              />
              <li>
                <a className="nav-link" href="#">
                  <DarkMode  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="message">
            <a href="https://wa.link/5855u6">
            <svg className="" width="96" height="101" viewBox="0 0 96 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_5502_22510)">
              <path d="M37.3879 70.5418L38.2692 71.0639C41.9704 73.2606 46.2139 74.4223 50.5416 74.4245H50.5509C63.841 74.4245 74.6572 63.6109 74.6627 50.3197C74.665 43.879 72.1595 37.8224 67.6069 33.2664C63.0542 28.7105 57.0009 26.2003 50.5601 26.1976C37.2597 26.1976 26.4434 37.0101 26.4385 50.3002C26.4365 54.8544 27.711 59.2903 30.1245 63.1284L30.6983 64.0402L28.262 72.9346L37.3879 70.5418ZM21.2969 79.8247L25.4127 64.797C22.8742 60.3992 21.5387 55.4097 21.5403 50.2985C21.5468 34.308 34.5598 21.2988 50.5509 21.2988C58.3109 21.3026 65.5943 24.3225 71.0723 29.8043C76.5486 35.286 79.5642 42.5722 79.5614 50.3219C79.5544 66.3113 66.5392 79.3227 50.5509 79.3227C50.5497 79.3227 50.5521 79.3227 50.5509 79.3227H50.5384C45.6836 79.3207 40.9131 78.1029 36.6756 75.7921L21.2969 79.8247Z" fill="#B3B3B3"/>
              </g>
              <path d="M21 79.5259L25.1158 64.4982C22.5773 60.1004 21.2418 55.1109 21.2434 49.9997C21.2499 34.0092 34.2629 21 50.254 21C58.014 21.0038 65.2975 24.0237 70.7754 29.5055C76.2518 34.9872 79.2673 42.2734 79.2646 50.0231C79.2575 66.0125 66.2423 79.0239 50.254 79.0239C50.2528 79.0239 50.2552 79.0239 50.254 79.0239H50.2415C45.3867 79.0219 40.6162 77.8041 36.3787 75.4932L21 79.5259Z" fill="white"/>
              <path d="M50.2662 25.9004C36.9658 25.9004 26.1494 36.7128 26.1445 50.0029C26.1426 54.5572 27.4171 58.993 29.8306 62.8312L30.4044 63.743L27.9679 72.6374L37.094 70.2445L37.9752 70.7667C41.6765 72.9635 45.92 74.125 50.2477 74.1272H50.2568C63.5469 74.1272 74.3633 63.3137 74.3687 50.0225C74.3711 43.5817 71.8656 37.5251 67.313 32.9692C62.7603 28.4133 56.707 25.9031 50.2662 25.9004Z" fill="url(#paint0_linear_5502_22510)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M43.0061 37.8767C42.4628 36.6699 41.8912 36.6455 41.375 36.6243C40.9523 36.6063 40.4687 36.6074 39.9857 36.6074C39.5021 36.6074 38.717 36.7889 38.053 37.5143C37.3885 38.2396 35.5156 39.993 35.5156 43.5595C35.5156 47.126 38.1133 50.5718 38.4752 51.0559C38.8376 51.5395 43.4897 59.0919 50.8579 61.9972C56.9808 64.4118 58.2267 63.9315 59.5563 63.8109C60.8853 63.6902 63.8449 62.0575 64.4485 60.365C65.0527 58.6725 65.0527 57.2223 64.8718 56.9191C64.6903 56.6165 64.2073 56.4356 63.4819 56.0731C62.7571 55.7107 59.1933 53.9568 58.5288 53.715C57.8643 53.4733 57.3813 53.3526 56.8977 54.078C56.4147 54.8034 55.0264 56.4356 54.6032 56.9191C54.1805 57.4032 53.7577 57.4636 53.0324 57.1011C52.3076 56.7377 49.9728 55.9732 47.2034 53.5037C45.0485 51.5824 43.594 49.2097 43.1707 48.4843C42.748 47.759 43.1256 47.3667 43.4891 47.0053C43.8146 46.6804 44.214 46.1588 44.5769 45.7356C44.9382 45.3123 45.0594 45.0102 45.3006 44.5272C45.5424 44.043 45.4218 43.6198 45.2403 43.2574C45.0594 42.895 43.6505 39.31 43.0061 37.8767Z" fill="white"/>
              <defs>
              <filter id="filter0_f_5502_22510" x="0.901201" y="0.903154" width="99.057" height="99.3167" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="10.1978" result="effect1_foregroundBlur_5502_22510"/>
              </filter>
              <linearGradient id="paint0_linear_5502_22510" x1="49.7657" y1="28.7945" x2="50.0103" y2="70.0071" gradientUnits="userSpaceOnUse">
              <stop stopColor="#57D163"/>
              <stop offset="1" stopColor="#23B33A"/>
              </linearGradient>
              </defs>
            </svg>                            
            </a>
        </div>
      </nav>
      {/* MODAL IGNORAR */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div id="modalTamaño" className="modal-dialog modal-dialog-centered " >
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Contactanos!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="container">
                    
                <ContactUs/>
                </div>

                <div className="modal-footer">
                    <br />
                </div>
            </div>
        </div>
      </div>

      </>
    );
  };
  
  export default Navbar;