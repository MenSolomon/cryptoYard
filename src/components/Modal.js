import React, { useState } from "react";
import ReactDom from "react-dom";

const Modal = ({ children, open, closeModal, altClose }) => {
  // var myVisible = "hidden";
  // const [modalShow, setModalShow] = useState("hidden");

  // console.log(`this is open: ${open}`);

  const overLay = {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <div style={overLay} onClick={altClose}>
      <button type="button" onClick={closeModal}>
        Close
      </button>
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
