import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useUI } from '../context/ViewContext/Context';
import { useData } from '../context/DataContext/Context';
import { Link, useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const { users, setLoginUser } = useData();
  const { showLogin, setShowLogin } = useUI();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    const userData = users.find((user) => user.username === username && user.password === password);
    if (userData) {
      setLoginUser(userData);
      setShowLogin(false);
      return;
    }
    console.log('User not found!');
  };

  const onClickRegisterHandler = () => {
    setShowLogin(false);
    navigate('/register');
  };

  return (
    <Transition.Root show={showLogin} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowLogin}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <h2 className="mt-4 text-center text-3xl font-bold tracking-tight">
                        Ingresa a tu cuenta
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                      <div className="-space-y-px rounded-md">
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
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                            onChange={(event) => setPassword(event.target.value)}
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:bg-blue-200"
                        disabled={!username || !password}
                        onClick={login}
                      >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon
                            className={`h-5 w-5 text-blue-500 ${
                              username && password && 'group-hover:text-blue-400'
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                        Ingresar
                      </button>

                      <div className="text-center">
                        <span className="text-xs text-blue-500 hover:text-blue-400 cursor-pointer" onClick={onClickRegisterHandler}>Registrate Aquí</span>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModal;
