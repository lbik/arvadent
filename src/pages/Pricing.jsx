export default function Pricing() {
  const pricelist = [
    {
      category: 'Preventivní péče',
      items: [
        {service: 'Vstupní vyšetření', price: '1 000 Kč'},
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
        {service: 'Bělení zubů (ordinační)', price: '6 000 Kč'},
        {service: 'Bělení zubů (domácí sada)', price: '3 500 Kč'},
      ],
    },
  ];

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Ceník</h2>

      {pricelist.map((group, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{group.category}</h3>
          <div className="bg-white rounded shadow p-4">
            <table className="w-full text-sm">
              <tbody>
                {group.items.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-0">
                    <td className="py-2">{item.service}</td>
                    <td className="py-2 text-right font-medium">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </section>
  );
}
