export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Arvadent</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">
            O nás
          </a>
          <a href="#contact" className="hover:underline">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
