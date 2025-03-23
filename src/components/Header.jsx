import {useEffect, useState} from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const {bottom} = hero.getBoundingClientRect();
        setScrolled(bottom <= 0);
      }
    };

    handleScroll(); // initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-green-600 bg-opacity-90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-6">
        <a href="#" className="text-2xl font-bold text-white">
          Arvadent
        </a>
        <nav className="space-x-6 text-sm">
          <a href="#o-nas" className="text-white hover:underline">
            O nás
          </a>
          <a href="#cenik" className="text-white hover:underline">
            Ceník
          </a>
          <a href="#kontakt" className="text-white hover:underline">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
