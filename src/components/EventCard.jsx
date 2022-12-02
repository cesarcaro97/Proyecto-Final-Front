import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { eventCategories } from '../app-constants/eventCategories';
import { eventCities } from '../app-constants/eventCities';

const EventCard = ({ event }) => {
  const { id, name, image, date, hour, city, category } = event;

  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <img className="rounded-t-lg min-h-10 h-40 object-cover" src={image} alt={name} />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium">{name}</h5>
          <div className="py-2">
            <div className="flex justify-between py-0.5">
              <h3 className="text-sm text-gray-700">Fecha</h3>
              <p className="text-sm font-medium text-gray-900">{date.replaceAll('-', '/')}</p>
            </div>
            <div className="flex justify-between py-0.5">
              <h3 className="text-sm text-gray-700">Hora</h3>
              <p className="text-sm font-medium text-gray-900">{hour}</p>
            </div>
            <div className="flex justify-between py-0.5">
              <h3 className="text-sm text-gray-700">Ciudad</h3>
              <p className="text-sm font-medium text-gray-900">{eventCities[city]}</p>
            </div>
            <div className="flex justify-between py-0.5">
              <h3 className="text-sm text-gray-700">Categoría</h3>
              <p className="text-sm font-medium text-gray-900">{eventCategories[category]}</p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white font-medium leading-tight rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
          >
            <span className="inset-y-0 left-0 flex items-center">
              <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
