import React, { useContext, useState } from "react";
import "./styles.scss";

import { AppContext } from "../../store";
import { isValidNumber } from "../../utils/validators";

import Button from "../Button";



const defaultPhoto = "https://interfacetreinamentos.com.br/wp-content/uploads/2016/04/img-profile-default.jpg";

function ContactForm({ type }) {
  const allowedTypes = ["create", "edit"];

  if (type === "") throw new Error("Necessário especificar tipo de ação");
  if (!allowedTypes.includes(type)) throw new Error("Tipo de Ação Não Suportado");

  const { state, dispatch } = useContext(AppContext);

  let defaultName;
  let defaultTelephone;

  switch (type) {
    case 'edit':
      defaultName = state.editContact.name;
      defaultTelephone = state.editContact.telephone;
      break;
    case 'create':
    default:
      defaultName = '';
      defaultTelephone = '';
      break;
  }

  const [name, setName] = useState(defaultName);
  const [telephone, setTelephone] = useState(defaultTelephone);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!isValidNumber(telephone)) return;

    switch (type) {
      case 'edit':
        dispatch({
          type: 'EDIT_CONTACT',
          payload: { id: state.editContact.id, name, telephone, photo: "" }
        });
        break;
      case 'create':
      default:
        dispatch({ 
          type: 'CREATE_CONTACT',
          payload: { name, telephone, photo: "" } 
        });
    }

    dispatch({ type: 'CLOSE_MODAL' });
  }

  const labels = {
    title: {
      create: "Criar novo contato",
      edit: "Editar contato"
    },
    button: {
      create: "Adicionar à lista",
      edit: "Editar"
    }
  }

  return (
    <form className="create-contact-area" onSubmit={onSubmitHandler}>
      <h2 className="title">{ labels.title[type] }</h2>
      <img
        src={defaultPhoto} 
        className="contact-photo"
        alt="Foto do contato"
      />
      <div className="form-group">
        <label>Nome</label>
        <input type="text" value={name} onChange={e => setName(e.target.value) } />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input 
          type="text" 
          value={telephone} 
          onChange={e => {
            const newValue = e.target.value;
            setTelephone(newValue
              .replace(/^\d$/, "+$&")
              .replace(/^\+55$/, "$& ")
              .replace(/^\+55\s\d{2}$/, "$& ")
              .replace(/^\+55\s\d{2}\s9\d{4}$/, "$&-")
            );
          }} />
      </div>
      <Button type="submit" text={labels.button[type]} />
    </form>
  );
}



export default ContactForm;