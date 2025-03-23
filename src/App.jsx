import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/cenik" element={<Pricing />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
