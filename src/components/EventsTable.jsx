import { useData } from '../context/DataContext/Context';

const thClass = "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-gray-600 tracking-wider";

const EventsTable = () => {
  const { events } = useData();

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className={thClass}>
              Imagen
            </th>
            <th className={thClass}>
              Nombre
            </th>
            <th className={thClass}>
              Fecha
            </th>
            <th className={thClass}>
              Lugar
            </th>
            <th className={thClass}>
              Ciudad
            </th>
            <th className={thClass}>
              Dirección
            </th>
            <th className={thClass}>
              Hora
            </th>
            <th className={thClass}>
              Categoría
            </th>
            <th className={thClass}>
              Edad Minima de Ingreso
            </th>
            <th className={thClass}>
              Responsable
            </th>
            <th className={thClass}>
              Nit
            </th>
          </tr>
        </thead>
        <tbody>
          {events && events.length ? (
            <>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">43</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Activo</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">Blake Bowman</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Jan 01, 2020</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">77</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Activo</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">Dana Moore</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Jan 10, 2020</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">64</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Suspended</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">Alonzo Cox</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">70</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Inactive</span>
                  </span>
                </td>
              </tr>
            </>
          ) : (
            <tr>
              <td className="px-5 py-5 bg-white text-sm text-center">
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
