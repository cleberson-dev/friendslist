import React from "react";
import "./styles.scss";



function IconButton({ icon, onClick = (e) => e.preventDefault() }) {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
}

export default IconButton;