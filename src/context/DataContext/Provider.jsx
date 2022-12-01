import { useReducer } from 'react';
import { AUTH_USER, EVENTS_DATA } from '../../app-constants/localStorage';
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
    const events = [...state.events, event];
    dispatch({ events });
    setLocalStorageData(EVENTS_DATA, events);
  };

  const deleteEvent = (eventId) => {
    const newEvents = state.events.filter((event) => event.id !== eventId);
    dispatch({ events: newEvents });
    setLocalStorageData(EVENTS_DATA, newEvents);
  };

  const editEvent = (eventData) => {
    const eventIndex = state.events.findIndex((event) => event.id === eventData.id);
    const newEvents = [...state.events];
    newEvents[eventIndex] = { ...newEvents[eventIndex], ...eventData };
    dispatch({ events: newEvents });
    setLocalStorageData(EVENTS_DATA, newEvents);
  };

  return (
    <DataContext.Provider
      value={{ ...state, addEvent, deleteEvent, editEvent, logout, setLoginUser }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
