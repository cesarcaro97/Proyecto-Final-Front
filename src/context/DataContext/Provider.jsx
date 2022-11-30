import { useReducer } from 'react';
import { AUTH_USER } from '../../app-constants/localStorage';
import { setLocalStorageData } from '../../utils/localStorage';
import { DataContext, initialContext } from './Context';

const stateReducer = (prevState, newState) => ({ ...prevState, ...newState });

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialContext);

  const setLoginUser = (user) => {
    dispatch({ auth: user });
    setLocalStorageData(AUTH_USER, user);
  };

  const logout = () => {
    dispatch({ auth: null });
    setLocalStorageData(AUTH_USER, null);
  };

  return <DataContext.Provider value={{ ...state, logout, setLoginUser }}>{children}</DataContext.Provider>;
};

export default DataProvider;
