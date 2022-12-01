import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

import { useData } from '../context/DataContext/Context';
import { useUI } from '../context/ViewContext/Context';

const Navbar = () => {
  const { auth, logout } = useData();
  const { setShowLogin } = useUI();

  return (
    <nav className="mx-auto px-4 sm:px-6 bg-blue-500">
      <div className="flex items-center justify-between py-5 sm:space-x-12">
        <div className="flex justify-start sm:w-0 sm:flex-1">
          <Link to="/">
            <img
              className="w-auto h-12"
              src="https://tuboleta.com/img/ic_logotuboleta.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="items-center justify-end sm:flex sm:flex-1">
          {!auth ? (
            <button
              type="button"
              className="group flex items-center whitespace-nowrap text-base font-bold rounded-md border border-transparent bg-white hover:bg-gray-100 px-4 py-2 text-blue-700 shadow-sm focus:outline-none"
              onClick={() => setShowLogin(true)}
            >
              <span className="inset-y-0 left-0 pr-1">
                <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>Ingresa</span>
            </button>
          ) : (
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={logout}
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active && 'bg-gray-100'
                        }`}
                      >
                        Salir
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
