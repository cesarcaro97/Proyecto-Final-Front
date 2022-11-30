import { createContext, useContext } from 'react';

export const initialContext = {
  showLogin: false,
  showRegister: false,
};

export const ViewContext = createContext(initialContext);
export const useUI = () => useContext(ViewContext);
