import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Další sekce jako služby, tým, kontakt mohou být přidány později */}
      </main>
      <Footer />
    </>
  );
}

export default App;
