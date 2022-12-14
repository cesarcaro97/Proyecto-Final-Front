import { Navigate, Routes, Route } from 'react-router-dom';
import { SELLER } from '../app-constants/roles';

import { useData } from '../context/DataContext/Context';
import AddEditEvent from '../pages/AddEditEvent';
import Admin from '../pages/Admin';
import Event from '../pages/Event';
import Home from '../pages/Home';
import Register from '../pages/Register';

const Routing = () => {
  const { auth } = useData();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/event/:eventId" element={<Event />} />
      {auth && auth.role === SELLER ? (
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
