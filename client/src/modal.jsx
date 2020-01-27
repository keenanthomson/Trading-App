import React from 'react';

export default function Modal () {
  const modalRoot = document.getElementById("modal-root");
  return(
    ReactDOM.createPortal(<div>TESTING</div>, modalRoot)
  )
}