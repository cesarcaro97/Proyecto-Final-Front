import { useMemo, useState } from 'react';
import { useData } from '../context/DataContext/Context';
import EventCard from './EventCard';
import NoEvents from './NoEvents';

const AllEvents = () => {
  const { events } = useData();
  const [page, setPage] = useState(1);

  const allEvents = useMemo(() => {
    const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
    return events
      .filter((event) => {
        const date = new Date(event.date);
        return date > currentDate;
      })
      .sort((eventA, eventB) => new Date(eventA.date) - new Date(eventB.date))
      .slice(0, page * 5);
  }, [events, page]);

  const isMoreItems = events.length > page * 5;

  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">Todos Los Eventos</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-8">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-1 gap-4">
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {!allEvents.length ? (
            <NoEvents />
          ) : (
            isMoreItems && (
              <div className="flex justify-center py-6">
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-sm text-blue-500 font-semibold leading-tight uppercase rounded border-blue-500 border-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-blue-400 transition duration-150 ease-in-out"
                  onClick={() => setPage((current) => current + 1)}
                >
                  Mostrar más eventos
                </button>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
};

export default AllEvents;
