import backgroundImage from '../assets/main_page.jpg'; // nebo vlastní hero obrázek

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Obsah */}
      <div className="relative z-10 text-center px-6 text-white max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Vítejte v Arvadent
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Moderní zubní ordinace v Havířově. Profesionální péče, lidský přístup
          a zdravý úsměv pro každého.
        </p>
        <div className="space-x-4">
          <a
            href="#kontakt"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Objednat se
          </a>
          <a
            href="#o-nas"
            className="text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition"
          >
            Více o nás
          </a>
        </div>
      </div>
    </section>
  );
}
