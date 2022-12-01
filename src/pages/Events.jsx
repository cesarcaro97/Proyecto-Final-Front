import EventsTable from '../components/EventsTable';

const Events = () => {
  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">Eventos</h1>
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

export default Events;
