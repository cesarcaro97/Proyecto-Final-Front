import { BrowserRouter as Router } from 'react-router-dom';

import Content from './Content';
import LoginModal from './LoginModal';
import Navbar from './Navbar';
import Routing from './Routing';

const Layout = () => (
  <Router basename="/Proyecto-Final-Front/">
    <Navbar />
    <Content>
      <Routing />
      <LoginModal />
    </Content>
  </Router>
);

export default Layout;
