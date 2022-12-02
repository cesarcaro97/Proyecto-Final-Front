import AdminBanner from '../components/AdminBanner';
import AllEvents from '../components/AllEvents';
import FeaturedEvents from '../components/FeaturedEvents';
import { useData } from '../context/DataContext/Context';
import { isSeller } from '../utils/auth';

const Home = () => {
  const { auth } = useData();

  return (
    <>
      {isSeller(auth) && <AdminBanner />}
      <FeaturedEvents />
      <AllEvents />
    </>
  );
};

export default Home;
