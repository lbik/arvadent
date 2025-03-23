import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        {/* Další sekce */}
      </Layout>
      <Footer />
    </>
  );
}

export default App;
