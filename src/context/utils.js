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
