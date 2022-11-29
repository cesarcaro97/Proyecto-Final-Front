import { AUTH_USER, USERS_DATA } from '../app-constants/localStorage';

export const getLocalStorageData = (id) => {
  const localStorageData = JSON.parse(localStorage.getItem(id));
  return localStorageData;
}

export const setLocalStorageData = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
}

export const getUserData = () => {
  const users = getLocalStorageData(USERS_DATA);
  return users;
};

export const getAuthData = () => {
  const users = getLocalStorageData(AUTH_USER);
  return users;
};
