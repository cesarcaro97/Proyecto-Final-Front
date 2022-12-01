import { useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { stateReducer } from '../utils/reducer';

const initialReducer = {
  name: '',
  image: '',
  date: '',
  hour: '',
  city: '',
  category: '',
};

const AddEditEvent = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(stateReducer, initialReducer);
  const isNewEvent = id === 'new';

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 items-center">
            <h1 className="text-3xl font-bold tracking-tight underline">
              {isNewEvent ? 'Añadir Evento' : 'Editar Evento'}
            </h1>
            <Link to="/admin">
              <button
                type="button"
                className="flex justify-center items-center rounded-full bg-red-500 text-white shadow-md hover:bg-red-400 hover:shadow-lg transition duration-150 ease-in-out w-9 h-9"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-8">
          <div className="flex min-h-full">
            <form className="w-full space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="py-2">
                    <label htmlFor="name" className="block text-sm text-gray-900">
                      Nombre del Evento
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.name}
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="image" className="block text-sm text-gray-900">
                      URL de la Imagen
                    </label>
                    <input
                      id="image"
                      name="image"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.image}
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
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.hour}
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
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.date}
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="city" className="block text-sm text-gray-900">
                      Ciudad
                    </label>
                    <input
                      id="city"
                      name="city"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.city}
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="category" className="block text-sm text-gray-900">
                      Categoría
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-1"
                      onChange={onChangeInputHandler}
                      value={state.category}
                    >
                      <option value=""/>
                      <option value="soccer">Fútbol</option>
                      <option value="music">Música</option>
                      <option value="comedy">Comedia</option>
                    </select>
                  </div>
                </div>
              </div>

              <input type="hidden" name="id" defaultValue="" />

              <div>
                <button
                  type="button"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-200"
                  // disabled={!username || !password}
                  // onClick={login}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddEditEvent;
