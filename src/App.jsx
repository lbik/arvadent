import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AnnouncementBanner from './components/AnnouncementBanner';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';

import About from './pages/About';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin stránka bez headeru/footeru */}
        <Route path="/admin" element={<Admin />} />

        {/* Hlavní web */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen">
              <Header />
              <AnnouncementBanner />
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/o-nas" element={<About />} />
                  <Route path="/kontakt" element={<Contact />} />
                  <Route path="/cenik" element={<Pricing />} />
                </Routes>
              </Layout>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
