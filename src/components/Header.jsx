export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full shadow">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-4">
        <h1 className="text-2xl font-bold">Arvadent</h1>
        <nav className="space-x-6 text-sm">
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
