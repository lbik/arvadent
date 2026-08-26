const pricelist = [
  { service: 'Fotokompozitní výplň', price: 'od 1 500 Kč' },
  { service: 'Endodoncie (1 kanálek)', price: 'od 2 000 Kč' },
  { service: 'Keramická korunka', price: 'od 6 500 Kč' },
];

const services = [
  'Kvalitní vyšetření a seznámení s návrhem nejvhodnější léčby',
  'Preventivní prohlídky',
  'Stomatochirurgické zákroky',
  'Endodoncie',
  'Fixní a snímatelná protetika',
  'Zubní laboratoř a dentální hygiena v objektu',
];

export default function Pricing() {
  const base = import.meta.env.BASE_URL;

  return (
    <div>
      {/* Co můžeme nabídnout */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">Co můžeme nabídnout?</h2>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500 shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={`${base}photos/ordinace1.jpeg`}
              alt="Vybavení ordinace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">Ceník</h2>

          <div className="space-y-3 mb-8">
            {pricelist.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 transition-colors"
              >
                <p className="font-semibold text-slate-900">{item.service}</p>
                <span className="text-primary-600 font-bold text-lg whitespace-nowrap ml-6">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Info banner */}
          <div className="p-5 bg-primary-50 border border-primary-100 rounded-2xl flex gap-4 items-start">
            <div className="text-primary-500 mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="text-sm text-primary-700 leading-relaxed">
              <strong>Poznámka:</strong> Uvedené ceny jsou orientační. Přesná cena závisí na rozsahu ošetření
              a bude vám sdělena po vstupním vyšetření. Podrobný ceník je k nahlédnutí v ordinaci.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
