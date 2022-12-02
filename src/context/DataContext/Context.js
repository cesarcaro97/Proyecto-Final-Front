import { createContext, useContext } from 'react';
import { EVENTS_DATA, USERS_DATA } from '../../app-constants/localStorage';
import { getAuthData, getEventsData, getUsersData, setLocalStorageData } from '../../utils/localStorage';
import { presetEvents, presetUsers } from '../utils';

const checkInitialUsers = () => {
  const users = getUsersData();
  if (!users) {
    setLocalStorageData(USERS_DATA, presetUsers);
    return presetUsers;
  }
  return users;
}

const checkAuth = () => {
  const user = getAuthData();
  if (user) {
    return user;
  }
  return null;
}

const checkEvents = () => {
  const events = getEventsData();
  if (!events) {
    setLocalStorageData(EVENTS_DATA, presetEvents);
    return presetEvents;
  }
  return events;
}

export const initialContext = {
  users: checkInitialUsers(),
  auth: checkAuth(),
  events: checkEvents(),
};

export const DataContext = createContext(initialContext);
export const useData = () => useContext(DataContext);
