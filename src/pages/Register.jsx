import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BUYER } from '../app-constants/roles';
import { useData } from '../context/DataContext/Context';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useData();
  const navigate = useNavigate();

  const onSubmitRegisterHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: uuidv4(),
      firstname,
      lastname,
      username,
      password,
      role: BUYER,
    };
    registerUser(newUser);
    navigate('/');
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
            Registra una cuenta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmitRegisterHandler}>
          <div className="-space-y-px rounded-md">
            <div className="py-2">
              <label htmlFor="firstname" className="block text-sm">
                Nombre
              </label>
              <input
                id="firstname"
                name="firstname"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                onChange={(event) => setFirstname(event.target.value)}
                value={firstname}
              />
            </div>
            <div className="py-2">
              <label htmlFor="lastname" className="block text-sm">
                Apellido
              </label>
              <input
                id="lastname"
                name="lastname"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                onChange={(event) => setLastname(event.target.value)}
                value={lastname}
              />
            </div>
            <div className="py-2">
              <label htmlFor="username" className="block text-sm">
                Nombre de Usuario
              </label>
              <input
                id="username"
                name="username"
                autoComplete="username"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div className="py-2">
              <label htmlFor="password" className="block text-sm">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                minLength={3}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:bg-blue-200"
              // onClick={login}
            >
              Registrarme
            </button>
            <Link className="flex-1" to="/">
              <button
                type="button"
                className="w-full rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                // onClick={login}
              >
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
