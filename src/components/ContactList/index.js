import React from "react";
import "./styles.scss";

import noContactIllustration from "../../img/no-contact-illustration.png";

import Contact from "../Contact";

function ContactList({ contacts }) {
  return (
    <ul className="contact-list">
      { contacts.length > 0 ? contacts.map(contact => (
        <li key={contact.id}><Contact  {...contact} /></li>
      )) : 
        <div className="no-contacts">
          <img src={noContactIllustration} alt="Illustration of no contacts' section" />
          <p className="title">Sem Contatos</p>
          <span className="info">Clique no botão "Novo" para adicionar um contato</span>
        </div>
      }
    </ul>
  );
}

export default ContactList;