import { AUTH_USER, EVENTS_DATA, USERS_DATA } from '../app-constants/localStorage';

export const getLocalStorageData = (id) => {
  const localStorageData = JSON.parse(localStorage.getItem(id));
  return localStorageData;
}

export const setLocalStorageData = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
}

export const getUsersData = () => {
  const users = getLocalStorageData(USERS_DATA);
  return users;
};

export const getAuthData = () => {
  const users = getLocalStorageData(AUTH_USER);
  return users;
};

export const getEventsData = () => {
  const events = getLocalStorageData(EVENTS_DATA);
  return events;
};
