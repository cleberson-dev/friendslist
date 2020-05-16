import React, { useContext } from "react";
import "./styles.scss";
import { AppContext } from "../../store";

function ContactInfo() {
  const { state } = useContext(AppContext);

  return (
    <div className="contact-info">
      <h3 className="contact-info-title">Seus contatos</h3>
      <small className="contact-info-count">{state.contacts.length} contato(s)</small>
    </div>
  );
}

export default ContactInfo;