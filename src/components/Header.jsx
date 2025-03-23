export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full shadow fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-4">
        <a href="#" className="text-2xl font-bold">
          Arvadent
        </a>
        <nav className="space-x-6 text-sm">
          <a href="#o-nas" className="hover:underline transition">
            O nás
          </a>
          <a href="#cenik" className="hover:underline transition">
            Ceník
          </a>
          <a href="#kontakt" className="hover:underline transition">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
