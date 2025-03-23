import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="o-nas">
          <About />
        </section>
        <section id="cenik">
          <Pricing />
        </section>
        <section id="kontakt">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
