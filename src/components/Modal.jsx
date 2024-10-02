import React from 'react';
import CardAnimada from './CardAnimada';

const Modal = ({modal, img, titulo, desc, imgModal, esPrimero, esUltimo, año, mes}) => {


  // Cambiar el numero al agregar modales para que funcione la funcion de pasar al primero cuando el modal sea el ultimo
  const totalModales = 35

  return (
  <>
    <a data-bs-target={`#exampleModalToggle${modal}`} data-bs-toggle="modal">
      <CardAnimada  img={img} titulo={titulo} texto={desc} banner='siBanner' año={año} mes={mes}/>
    </a>


    <div className="modal fade" id={`exampleModalToggle${modal}`} aria-hidden="true" aria-labelledby={`exampleModalToggleLabel${modal}`} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id={`exampleModalToggleLabel${modal}`}>{titulo}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgModal} className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-target={`#exampleModalToggle${esPrimero ? totalModales : modal - 1}`} data-bs-toggle="modal">Anterior</button>
                <button className="btn btn-secondary" data-bs-target={`#exampleModalToggle${esUltimo ? 1 : modal + 1}`} data-bs-toggle="modal">Siguiente</button>
            </div>
          </div>
      </div>
    </div>

  </>
  );
};

export default Modal;