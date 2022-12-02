import { useMemo } from 'react';
import { useData } from '../context/DataContext/Context';
import EventCard from './EventCard';

const FeaturedEvents = () => {
  const { events } = useData();

  const featuredEvents = useMemo(() => {
    const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
    const nextMonthDate = new Date(new Date().setMonth(currentDate.getMonth() + 1));
    return events.filter((event) => {
      const date = new Date(event.date);
      return date < nextMonthDate && date > currentDate;
    }).slice(0, 5);
  }, [events]);

  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">Destacados</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-8">
          <div className="grid grid-cols-5 gap-4">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturedEvents;
