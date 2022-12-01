import EventsTable from '../components/EventsTable';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 items-center">
            <h1 className="text-3xl font-bold tracking-tight underline">Eventos</h1>
            <Link to="/admin/new">
            <button
              type="button"
              className="flex justify-center items-center rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition duration-150 ease-in-out w-9 h-9"
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl py-6 sm:px-6 lg:px-8">
          <EventsTable />
        </div>
      </main>
    </>
  );
};

export default Admin;
