import React from "react";
import "./styles.scss";

function Modal({ children }) {
  return (
    <div className="modal">
      { children }
    </div>
  );
}

export default Modal;