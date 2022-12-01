import { useEffect, useReducer } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { stateReducer } from '../utils/reducer';
import { useData } from '../context/DataContext/Context';
import { eventCategories } from '../app-constants/eventCategories';
import { eventCities } from '../app-constants/eventCities';

const initialReducer = {
  id: '',
  name: '',
  image: '',
  date: '',
  hour: '',
  city: '',
  category: '',
};

const AddEditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(stateReducer, initialReducer);
  const { events, addEvent, editEvent } = useData();
  const isNewEvent = id === 'new';

  useEffect(() => {
    if (isNewEvent) {
      dispatch({ id: uuidv4() });
    } else {
      const selectedEvent = events.find((event) => event.id === id);
      dispatch({ ...selectedEvent });
    }
  }, [id]);

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    if (isNewEvent) {
      addEvent(state);
      dispatch(initialReducer);
    } else {
      editEvent(state);
      navigate('/admin');
    }
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">
            {isNewEvent ? 'Añadir Evento' : 'Editar Evento'}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-8">
          <div className="flex min-h-full">
            <form className="w-full space-y-6" onSubmit={onSubmitFormHandler}>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="py-2">
                    <label htmlFor="name" className="block text-sm text-gray-900">
                      Nombre del Evento
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.name}
                      required
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="image" className="block text-sm text-gray-900">
                      URL de la Imagen
                    </label>
                    <input
                      id="image"
                      name="image"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.image}
                      required
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="hour" className="block text-sm text-gray-900">
                      Hora
                    </label>
                    <input
                      id="hour"
                      name="hour"
                      type="time"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.hour}
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="py-2">
                    <label htmlFor="date" className="block text-sm text-gray-900">
                      Fecha
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.date}
                      required
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="city" className="block text-sm text-gray-900">
                      Ciudad
                    </label>
                    <select
                      id="city"
                      name="city"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.city}
                      required
                    >
                      <option value="" />
                      {Object.keys(eventCities).map((cityKey) => (
                        <option key={cityKey} value={cityKey}>
                          {eventCities[cityKey]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="py-2">
                    <label htmlFor="category" className="block text-sm text-gray-900">
                      Categoría
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.category}
                      required
                    >
                      <option value="" />
                      {Object.keys(eventCategories).map((categoryKey) => (
                        <option key={categoryKey} value={categoryKey}>
                          {eventCategories[categoryKey]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <input type="hidden" name="id" value={state.id} />

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="group relative flex-1 w-full rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Guardar
                </button>
                <Link
                  to="/admin"
                  className="group relative flex-1 w-full text-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddEditEvent;
