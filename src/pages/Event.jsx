import { useParams } from 'react-router-dom';
import { eventCategories } from '../app-constants/eventCategories';
import { eventCities } from '../app-constants/eventCities';
import { useData } from '../context/DataContext/Context';

const Event = () => {
  const { eventId } = useParams();
  const { events } = useData();

  const selectedEvent = events.find((event) => event.id === eventId);

  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">{selectedEvent.name}</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <img className="w-full" src={selectedEvent.image} alt={selectedEvent.name} />
            </div>
            <div className="w-full">
              <div className="py-2">
                <div className="flex justify-between py-0.5">
                  <h3 className="text-lg font-bold text-gray-700">Fecha:</h3>
                  <p className="text-lg font-medium text-gray-900">{selectedEvent.date.replaceAll('-', '/')}</p>
                </div>
                <div className="flex justify-between py-0.5">
                  <h3 className="text-lg font-bold text-gray-700">Hora:</h3>
                  <p className="text-lg font-medium text-gray-900">{selectedEvent.hour}</p>
                </div>
                <div className="flex justify-between py-0.5">
                  <h3 className="text-lg font-bold text-gray-700">Ciudad:</h3>
                  <p className="text-lg font-medium text-gray-900">{eventCities[selectedEvent.city]}</p>
                </div>
                <div className="flex justify-between py-0.5">
                  <h3 className="text-lg font-bold text-gray-700">Categoría:</h3>
                  <p className="text-lg font-medium text-gray-900">{eventCategories[selectedEvent.category]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Event;
