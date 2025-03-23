export default function Pricing() {
  const pricelist = [
    {
      category: 'Preventivní péče',
      items: [
        {service: 'Vstupní vyšetření', price: '500 Kč'},
        {service: 'Kontrolní vyšetření', price: '300 Kč'},
        {service: 'Dentální hygiena', price: '1 000 Kč'},
      ],
    },
    {
      category: 'Ošetření',
      items: [
        {service: 'Výplň (kompozitní)', price: '1 200 Kč'},
        {service: 'Endodontické ošetření (1 kanálek)', price: '1 500 Kč'},
      ],
    },
    {
      category: 'Estetická stomatologie',
      items: [
        {service: 'Bělení zubů (ordinační)', price: '4 000 Kč'},
        {service: 'Bělení zubů (domácí sada)', price: '2 500 Kč'},
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center">
          Ceník
        </h2>

        {pricelist.map((group, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              {group.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {group.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">
                      {item.service}
                    </span>
                    <span className="text-green-700 font-bold">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ✅ Smluvní pojišťovny */}
        <div className="mt-20 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Smluvní pojišťovny
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Všeobecná zdravotní pojišťovna</li>
            <li>Vojenská zdravotní pojišťovna ČR</li>
            <li>Oborová zdravotní pojišťovna</li>
            <li>Revírní bratrská pokladna, zdravotní pojišťovna</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
