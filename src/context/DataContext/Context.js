import { createContext, useContext } from 'react';
import { USERS_DATA } from '../../app-constants/localStorage';
import { getAuthData, getUserData, setLocalStorageData } from '../../utils/localStorage';
import { presetUsers } from '../utils';

const checkInitialUsers = () => {
  const users = getUserData();
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

export const initialContext = {
  users: checkInitialUsers(),
  auth: checkAuth(),
  error: null,
};

export const DataContext = createContext(initialContext);
export const useData = () => useContext(DataContext);
