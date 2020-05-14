import React from "react";
import "./styles.scss";

import IconButton from "../IconButton";

import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
import { ReactComponent as EditIcon } from '../../img/edit.svg';

function Contact({ 
  photo = "https://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg", 
  name, 
  telephone 
}) {
  return (
    <div className="contact">
      <img 
        alt="Profile Photo"
        className="contact-photo" 
        src={photo} 
      />
      <address className="contact-details">
        <div className="contact-name">{name}</div>
        <a href={`tel:${telephone}`} className="contact-telephone">{telephone}</a>
      </address>
      <div className="contact-actions">
        <IconButton icon={<EditIcon />} />
        <IconButton icon={<DeleteIcon />} />
      </div>
    </div>
  );
}

export default Contact;