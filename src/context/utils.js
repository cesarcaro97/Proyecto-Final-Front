import { v4 as uuidv4 } from 'uuid';
import { BUYER, SELLER } from '../app-constants/roles';

export const presetUsers = [
  {
    id: uuidv4(),
    name: 'Pepito',
    lastname: 'Perez',
    username: 'buyer',
    password: '123',
    role: BUYER,
  },
  {
    id: uuidv4(),
    name: 'Juan',
    lastname: 'Ramirez',
    username: 'seller',
    password: '1234',
    role: SELLER,
  },
];
