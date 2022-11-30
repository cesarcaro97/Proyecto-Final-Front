import { useReducer } from 'react';
import { ViewContext, initialContext } from './Context';

const stateReducer = (prevState, newState) => ({ ...prevState, ...newState });

const ViewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialContext);

  const setShowLogin = (value) => {
    dispatch({ showLogin: value });
  }

  return <ViewContext.Provider value={{ ...state, setShowLogin }}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
