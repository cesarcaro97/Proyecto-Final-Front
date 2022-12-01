import { useReducer } from 'react';
import { AUTH_USER } from '../../app-constants/localStorage';
import { setLocalStorageData } from '../../utils/localStorage';
import { stateReducer } from '../../utils/reducer';
import { DataContext, initialContext } from './Context';

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

  const addEvent = (event) => {
    dispatch({ events: [...state.events, event] });
  };

  const deleteEvent = (eventId) => {
    const newEvents = state.events.filter((event) => event.id === eventId);
    dispatch({ events: newEvents });
  };

  return (
    <DataContext.Provider value={{ ...state, addEvent, deleteEvent, logout, setLoginUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
