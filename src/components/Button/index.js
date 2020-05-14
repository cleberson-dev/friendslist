import React from "react";
import "./styles.scss";

function Button({ 
  text,
  ...props 
}) {
  return (
    <button className="button" {...props}>
      {text}
    </button>
  );
}

export default Button;