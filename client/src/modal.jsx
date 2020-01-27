import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal () {
  const modalRoot = document.getElementById("modal-root");
  return(
    ReactDOM.createPortal(<div className='modal'>MODAL TEST</div>, modalRoot)
  )
};