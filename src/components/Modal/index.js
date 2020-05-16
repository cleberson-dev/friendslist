import React from "react";
import "./styles.scss";
import { ReactComponent as CloseIcon } from "../../img/close.svg";

import IconButton from "../IconButton";

function Modal({ children, onExitHandler = (e) => e.preventDefault() }) {
  return (
    <div className="modal">
      <div className="actions">
        <IconButton onClick={onExitHandler} icon={<CloseIcon />} />
      </div>
      { children }
    </div>
  );
}

export default Modal;