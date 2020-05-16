import React, { useReducer } from 'react';

import './App.scss';

import { AppContext, reducer, initialState } from "./store";

import Header from "./components/Header";
import ContactList from "./components/ContactList";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ContactInfo from "./components/ContactInfo";
import ContactForm from './components/ContactForm';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const buttonOnClickHandler = (e) => {
    dispatch({ type: 'OPEN_MODAL', payload: 'create' });
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
          <main>
            <div className="container">
              <ContactInfo />
              <Button text="+ Novo" onClick={buttonOnClickHandler} />  
            </div>
            <ContactList contacts={state.contacts} />
          </main>

          { state.modal.isOpen ? (
            <Modal onExitHandler={e => dispatch({ type: 'CLOSE_MODAL' }) }>
              <ContactForm 
                type={state.modal.type}
              />
            </Modal>
          ) : '' }
        </div>
      </AppContext.Provider>
  );
}



export default App;
