import AdminBanner from '../components/AdminBanner';
import { useData } from '../context/DataContext/Context';
import { isSeller } from '../utils/auth';

const Home = () => {
  const { auth } = useData();

  return (
    <>
      {isSeller(auth) && <AdminBanner />}
      <header>
        <div className="mx-auto max-w-8xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight underline">Destacados</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-8xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
