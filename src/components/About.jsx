import aboutImage from '../assets/about.jpg';

export default function About() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center">
          O nás
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-gray-700 leading-relaxed text-lg">
            <p className="mb-6">
              Jsme moderní zubní ordinace v Havířově, která klade důraz na
              profesionální péči, špičkové technologie a přátelský přístup.
            </p>
            <p className="mb-6">
              Nabízíme komplexní stomatologickou péči – od prevence až po
              estetická ošetření. Pravidelně se vzděláváme a sledujeme
              nejnovější trendy v oboru.
            </p>
            <p>
              Věříme, že zdravý úsměv je klíčem k sebevědomí – a ten vám rádi
              pomůžeme udržet po celý život.
            </p>
          </div>

          {/* Obrázek */}
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={aboutImage}
              alt="Naše ordinace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
