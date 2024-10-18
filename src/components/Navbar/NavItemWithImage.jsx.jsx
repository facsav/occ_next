"use client";

import React from 'react';
import styles from '../../styles/Navbar.css';


const NavItemWithImage = ({ imageSrc, alt, text, showImageOnMobile, ruta, type, databs, dataTarget, dropdownItems, extraClass }) => {

  return (
    <li className={`nav-item ${dropdownItems ? 'dropdown' : ''} ${extraClass ? extraClass : ''}`}>
      {dropdownItems ? (
        <>
          <a id='jeee' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {text}
          </a>
          <ul className="dropdown-menu">
            {dropdownItems.map((item, index) => (
              <li key={index}><a className="dropdown-item" href={item.link}>{item.text}</a></li>
            ))}
          </ul>
        </>
      ) : (
        <div className={`d-flex ${showImageOnMobile ? 'd-md-none' : ''}`}>
          {showImageOnMobile && <img src={imageSrc} alt={alt} />}
          <a className="nav-link" aria-current="page" href={ruta} type={type} data-bs-toggle={databs} data-bs-target={dataTarget}>
            {text}
          </a>
        </div>
      )}
      {!dropdownItems && (
        <a className={`nav-link ${showImageOnMobile ? 'd-none d-md-block' : ''}`} aria-current="page" href={ruta} type={type} data-bs-toggle={databs} data-bs-target={dataTarget}>
          {text}
        </a>
      )}
      {showImageOnMobile && !dropdownItems && <hr className="d-md-none" style={{ color: 'black' }} />}
    </li>
  );
};

export default NavItemWithImage;