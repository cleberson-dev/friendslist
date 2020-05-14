import React from "react";
import "./styles.scss";

function Button({ text, onClickHandler = (e) => e.preventDefault() }) {
  return (
    <button className="button" onClick={onClickHandler}>
      {text}
    </button>
  );
}

export default Button;