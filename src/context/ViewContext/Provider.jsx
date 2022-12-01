import { useReducer } from 'react';
import { stateReducer } from '../../utils/reducer';
import { ViewContext, initialContext } from './Context';

const ViewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialContext);

  const setShowLogin = (value) => {
    dispatch({ showLogin: value });
  }

  return <ViewContext.Provider value={{ ...state, setShowLogin }}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
