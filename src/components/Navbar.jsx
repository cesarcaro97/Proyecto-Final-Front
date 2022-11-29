import { useData } from '../context/DataContext/Context';

const Navbar = () => {
  const { auth } = useData();

  return (
    <nav className="mx-auto px-4 sm:px-6 bg-blue-500">
      <div className="flex items-center justify-between py-5 sm:space-x-12">
        <div className="flex justify-start sm:w-0 sm:flex-1">
          <a href="#">
            <img
              className="w-auto h-12"
              src="https://tuboleta.com/img/ic_logotuboleta.svg"
              alt=""
            />
          </a>
        </div>
        <div className="items-center justify-end sm:flex sm:flex-1">
          {!auth && (
            <button className="whitespace-nowrap text-base font-bold rounded-md border border-transparent bg-white hover:bg-gray-100 px-4 py-2 text-blue-700 shadow-sm focus:outline-none">
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
