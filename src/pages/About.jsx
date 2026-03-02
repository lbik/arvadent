const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: 'Profesionální přístup',
    desc: 'Každý pacient je pro nás prioritou. Věnujeme dostatek času vysvětlení diagnózy i léčby.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Pravidelné vzdělávání',
    desc: 'Neustále sledujeme vývoj moderní stomatologie a absolvujeme odborná školení.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Bezpečnost na prvním místě',
    desc: 'Přísné hygienické standardy a špičkové vybavení garantují bezpečné ošetření.',
  },
];

export default function About() {
  const base = import.meta.env.BASE_URL;

  return (
    <div>
      {/* Hero banner */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">O nás</h1>
          <p className="text-slate-400 text-lg">Seznamte se s naší ordinací a týmem.</p>
        </div>
      </section>

      {/* Hlavní sekce */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
              Moderní zubní ordinace v centru Ostravy
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Ordinace Arvadent nabízí komplexní zubní péči pro celou rodinu v příjemném
                a moderně vybaveném prostředí v centru Moravské Ostravy.
              </p>
              <p>
                Klademe důraz na prevenci, protože věříme, že pravidelné kontroly a správná
                ústní hygiena jsou základem dlouhodobého zdraví vašich zubů. Nabízíme vše
                od vstupního vyšetření přes ošetření až po estetické zákroky.
              </p>
              <p>
                Věříme, že zdravý úsměv je klíčem ke sebevědomí – a ten vám rádi pomůžeme
                udržet po celý život.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${base}photos/ordinace2.jpeg`}
              alt="Naše ordinace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Naše hodnoty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-primary-200 hover:bg-primary-50 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lékař */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] md:aspect-auto">
            <img
              src={`${base}photos/lekar2.jpeg`}
              alt="MUDr. Tomáš Arvai"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">Vedoucí lékař</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">MUDr. Tomáš Arvai</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                MUDr. Tomáš Arvai je praktický zubní lékař s mnohaletou zkušeností v oboru stomatologie.
                Absolvoval odborná školení a pravidelně se vzdělává v nejnovějších léčebných metodách.
              </p>
              <p>
                Svým pacientům věnuje maximální pozornost a snaží se, aby každá návštěva ordinace
                proběhla v co největším klidu a pohodlí.
              </p>
            </div>

            {/* Certifikáty */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Osvědčení odbornosti</h3>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src={`${base}photos/certifikace.jpeg`}
                  alt="Osvědčení odbornosti MUDr. Arvai"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sestřička */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">Náš tým</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-1 flex items-center gap-3">
              TODO – doplnit jméno
              <span className="text-xs font-normal text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">doplnit</span>
            </h2>
            <p className="text-primary-600 text-sm font-medium mb-4">Zdravotní sestra</p>
            <p className="text-slate-600 leading-relaxed">
              Nepostradatelná součást ordinace. Pečuje o pacienty a zároveň se podílí na hladkém
              chodu celé ordinace – od administrativy a objednávání přes přípravu nástrojů
              až po péči o příjemné prostředí pro každého pacienta.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] md:aspect-auto bg-slate-100 flex items-center justify-center">
            <div className="text-center text-slate-400 p-8">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
                <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
              </svg>
              <p className="text-sm">Foto bude doplněno</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
