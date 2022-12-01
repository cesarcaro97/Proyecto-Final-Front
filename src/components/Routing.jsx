import { Navigate, Routes, Route } from 'react-router-dom';

import { useData } from '../context/DataContext/Context';
import AddEditEvent from '../pages/AddEditEvent';
import Admin from '../pages/Admin';
import Home from '../pages/Home';

const Routing = () => {
  const { auth } = useData();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/events" element={null} />
      <Route exact path="/events/:eventId" element={null} />
      {auth && auth.role === 'SELLER' ? (
        <>
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/:id" element={<AddEditEvent />} />
        </>
      ) : null}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
