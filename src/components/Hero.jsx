export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-4">
        Vítejte v Arvadent
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Moderní zubní ordinace s důrazem na péči, komfort a úsměv.
      </p>
      <div className="space-x-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Objednat se
        </a>
        <a href="#about" className="text-blue-600 hover:underline">
          Více o nás
        </a>
      </div>
    </section>
  );
}
