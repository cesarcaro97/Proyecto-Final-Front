import { createContext, useContext } from 'react';
import { USERS_DATA } from '../../app-constants/localStorage';
import { getAuthData, getEventsData, getUsersData, setLocalStorageData } from '../../utils/localStorage';
import { presetUsers } from '../utils';

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
    return [];
  }
  return events;
}

export const initialContext = {
  users: checkInitialUsers(),
  auth: checkAuth(),
  events: checkEvents(),
  error: null,
};

export const DataContext = createContext(initialContext);
export const useData = () => useContext(DataContext);
