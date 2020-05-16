import { createContext } from "react";

export const initialState = {
  modal: {
    isOpen: false,
    type: ''
  },
  editContact: { name: '', telephone: '', photo: '' },
  contacts: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_CONTACT':
      const { name, telephone, photo } = action.payload;
        const newContact = { 
          id: state.contacts.length + 1, 
          name, telephone, photo 
        };
        return { ...state, contacts: [...state.contacts, newContact] };

    case 'EDIT_CONTACT_REQUEST':
      return { ...state, editContact: {
        id: action.payload.id,
        name: action.payload.name,
        telephone: action.payload.telephone,
        photo: action.payload.photo
      }};

    case 'EDIT_CONTACT':
      const idx = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts[idx].name = action.payload.name;
      state.contacts[idx].telephone = action.payload.telephone;
      state.contacts[idx].photo = action.payload.photo;

      return { ...state, contacts: state.contacts };
    
    case 'REMOVE_CONTACT':
      return {
        ...state, 
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    
    case 'OPEN_MODAL':
      return { ...state, modal: { isOpen: true, type: action.payload } };

    case 'CLOSE_MODAL':
      return { ...state, modal: { isOpen: false, type: '' } };

    default:
      return state;
  }
}

export const AppContext = createContext();