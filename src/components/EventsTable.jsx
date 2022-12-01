import { useData } from '../context/DataContext/Context';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const thClass =
  'px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 tracking-wider';

const EventsTable = () => {
  const { events } = useData();

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className={thClass}>Imagen</th>
            <th className={thClass}>Nombre</th>
            <th className={thClass}>Fecha</th>
            {/* <th className={thClass}>Lugar</th> */}
            <th className={thClass}>Ciudad</th>
            {/* <th className={thClass}>Dirección</th> */}
            <th className={thClass}>Hora</th>
            <th className={thClass}>Categoría</th>
            <th className={thClass} />
            {/* <th className={thClass}>Edad Minima de Ingreso</th> */}
            {/* <th className={thClass}>Responsable</th> */}
            {/* <th className={thClass}>Nit</th> */}
          </tr>
        </thead>
        <tbody>
          {events && events.length ? (
            events.map(({ id, image, name, date, city, hour, category }) => (
              <tr key={id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full" src={image} alt={name} />
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{city}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{hour}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{category}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex space-x-2 items-center">
                    <Link to={`/events/${id}`}>
                      <button
                        type="button"
                        className="flex justify-center items-center rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                      >
                        <PencilIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="flex justify-center items-center rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-400 hover:shadow-lg transition duration-150 ease-in-out w-9 h-9"
                    >
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-5 py-5 bg-white text-sm text-center" colSpan={6}>
                <p className="text-gray-900 whitespace-no-wrap">No hay ningún evento registrado.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
