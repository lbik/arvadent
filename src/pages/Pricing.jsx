const pricelist = [
  {
    category: 'Preventivní péče',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    items: [
      { service: 'Vstupní vyšetření', price: '500 Kč', note: 'Komplexní vstupní zhodnocení stavu chrupu' },
      { service: 'Kontrolní vyšetření', price: '300 Kč', note: 'Pravidelná preventivní prohlídka' },
      { service: 'Dentální hygiena', price: '1 000 Kč', note: 'Profesionální čištění a instruktáž hygieny' },
    ],
  },
  {
    category: 'Ošetření',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3.5 10.5C3.5 10.5 3 13 4 15.5C5 18 6 21 8 21C9.5 21 10 19.5 12 19.5C14 19.5 14.5 21 16 21C18 21 19 18 20 15.5C21 13 20.5 10.5 20.5 10.5C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"/>
      </svg>
    ),
    items: [
      { service: 'Výplň (kompozitní)', price: '1 200 Kč', note: 'Estetická bílá výplň pro přední i zadní zuby' },
      { service: 'Endodontické ošetření (1 kanálek)', price: '1 500 Kč', note: 'Ošetření kořenového kanálku' },
    ],
  },
  {
    category: 'Estetická stomatologie',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    items: [
      { service: 'Bělení zubů (ordinační)', price: '4 000 Kč', note: 'Profesionální bělení přímo v ordinaci' },
      { service: 'Bělení zubů (domácí sada)', price: '2 500 Kč', note: 'Individuální nálohy pro domácí použití' },
    ],
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">Ceník</h1>
          <p className="text-slate-400 text-lg">Transparentní ceny bez skrytých poplatků.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-lg mx-auto">
          {/* Info banner */}
          <div className="mb-12 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex gap-4 items-start">
            <div className="text-primary-500 mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div className="text-sm text-primary-700 leading-relaxed">
              <strong>Poznámka:</strong> Uvedené ceny jsou orientační. Přesná cena závisí na rozsahu ošetření
              a bude vám sdělena po vstupním vyšetření. V případě dotazů nás neváhejte kontaktovat.
            </div>
          </div>

          {/* Kategorie */}
          <div className="space-y-12">
            {pricelist.map((group, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{group.category}</h2>
                </div>
                <div className="space-y-3">
                  {group.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">{item.service}</p>
                        <p className="text-sm text-slate-500 mt-0.5">{item.note}</p>
                      </div>
                      <span className="text-primary-600 font-bold text-lg whitespace-nowrap ml-6">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
