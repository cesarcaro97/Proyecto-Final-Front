import { Link } from 'react-router-dom';

const AdminBanner = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="mx-auto max-w-8xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="truncate text-blue-500 font-semibold">
              <span className="md:hidden">Administrar eventos.</span>
              <span className="hidden md:inline">
                Eres un vendedor, puedes administrar los eventos.
              </span>
            </p>
          </div>
          <div className="order-3 flex-shrink-0 sm:order-2 w-auto">
            <Link to="/admin">
              <button className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400">
                Administrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;
