export default function Hero() {
  return (
    <section className="bg-white pt-28 pb-20 px-6 text-center">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Vítejte v Arvadent
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Moderní zubní ordinace v Havířově. Profesionální péče, lidský přístup
          a zdravý úsměv pro každého.
        </p>
        <div className="space-x-4">
          <a
            href="#kontakt"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition"
          >
            Objednat se
          </a>
          <a
            href="#o-nas"
            className="text-blue-600 hover:underline font-medium"
          >
            Více o nás
          </a>
        </div>
      </div>
    </section>
  );
}
