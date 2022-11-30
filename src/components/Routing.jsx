import { Navigate, Routes, Route } from 'react-router-dom';

import { useData } from '../context/DataContext/Context';
import Home from '../pages/Home';

const Routing = () => {
  const { auth } = useData();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/events" element={null} />
      <Route exact path="/events/:eventId" element={null} />
      {auth && auth.role === 'SELLER' ? <Route exact path="/admin" element={null} /> : null}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
