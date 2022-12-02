import { v4 as uuidv4 } from 'uuid';
import { BUYER, SELLER } from '../app-constants/roles';

export const presetUsers = [
  {
    id: uuidv4(),
    firstname: 'Pepito',
    lastname: 'Perez',
    username: 'buyer',
    password: '123',
    role: BUYER,
  },
  {
    id: uuidv4(),
    firstname: 'Juan',
    lastname: 'Ramirez',
    username: 'seller',
    password: '1234',
    role: SELLER,
  },
];

export const presetEvents = [
  {
    id: uuidv4(),
    category: "sport",
    city: "barranquilla",
    date: "2022-12-09",
    hour: "19:27",
    image: "https://a.espncdn.com/photo/2022/1201/r1099955_800x320_5-2.png",
    name: "Junior",
  }
];
