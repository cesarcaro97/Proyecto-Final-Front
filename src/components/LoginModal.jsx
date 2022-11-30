import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { useUI } from '../context/ViewContext/Context';
import { useData } from '../context/DataContext/Context';

const LoginModal = () => {
  const { users, setLoginUser } = useData();
  const { showLogin, setShowLogin } = useUI();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const userData = users.find(user => user.username === username && user.password === password);
    if (userData) {
      setLoginUser(userData);
      setShowLogin(false);
      return;
    }
    console.log('User not found!');
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Ingresa a tu cuenta
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6">
                      <input type="hidden" name="remember" defaultValue="true" />
                      <div className="-space-y-px rounded-md shadow-sm">
                        <div className="py-2">
                          <label htmlFor="username" className="block text-sm text-gray-900">
                            Nombre de Usuario
                          </label>
                          <input
                            id="username"
                            name="username"
                            autoComplete="username"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                            onChange={(event) => setUsername(event.target.value)}
                          />
                        </div>
                        <div className="py-2">
                          <label htmlFor="password" className="block text-sm text-gray-900">
                            Contraseña
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                            onChange={(event) => setPassword(event.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-200"
                          disabled={!username || !password}
                          onClick={login}
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                              className={`h-5 w-5 text-indigo-500 ${username && password && 'group-hover:text-indigo-400'}`}
                              aria-hidden="true"
                            />
                          </span>
                          Ingresar
                        </button>
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
