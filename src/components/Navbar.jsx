import { useData } from '../context/DataContext/Context';
import { useUI } from '../context/ViewContext/Context';
import { LockClosedIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { auth, logout } = useData();
  const { setShowLogin } = useUI();

  return (
    <nav className="mx-auto px-4 sm:px-6 bg-blue-500">
      <div className="flex items-center justify-between py-5 sm:space-x-12">
        <div className="flex justify-start sm:w-0 sm:flex-1">
          <a href="#">
            <img
              className="w-auto h-12"
              src="https://tuboleta.com/img/ic_logotuboleta.svg"
              alt=""
            />
          </a>
        </div>
        <div className="items-center justify-end sm:flex sm:flex-1">
          {!auth ? (
            <button
              type="button"
              className="group flex items-center whitespace-nowrap text-base font-bold rounded-md border border-transparent bg-white hover:bg-gray-100 px-4 py-2 text-blue-700 shadow-sm focus:outline-none"
              onClick={() => setShowLogin(true)}
            >
              <span className="inset-y-0 left-0 pr-1">
                <LockClosedIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              <span>Ingresa</span>
            </button>
          ) : (
            <button
              type="button"
              className="group flex items-center whitespace-nowrap text-base font-bold rounded-md border border-transparent bg-white hover:bg-gray-100 px-4 py-2 text-red-700 shadow-sm focus:outline-none"
              onClick={logout}
            >
              <span className="inset-y-0 left-0 pr-1">
                <LockClosedIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              <span>Salir</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
