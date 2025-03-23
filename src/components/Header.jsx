import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full shadow">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-4">
        <Link to="/" className="text-2xl font-bold">
          Arvadent
        </Link>
        <nav className="space-x-6 text-sm">
          <Link to="/o-nas" className="hover:underline">
            O nás
          </Link>
          <Link to="/cenik" className="hover:underline">
            Ceník
          </Link>
          <Link to="/kontakt" className="hover:underline">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
