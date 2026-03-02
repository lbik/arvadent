import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const features = [
  {
    icon: <img src={`${base}photos/tool.svg`} width="28" height="28" alt="" />,
    title: 'Moderní vybavení',
    desc: 'Pracujeme s nejnovějšími technologiemi pro maximální přesnost a komfort.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Příjemné prostředí',
    desc: 'Příjemná atmosféra, vstřícný tým a individuální přístup ke každému pacientovi.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
      </svg>
    ),
    title: 'Zkušený tým',
    desc: 'Pravidelné vzdělávání a sledování nejnovějších trendů v oboru stomatologie.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
        <path d="M398.4,332.5c0-13.3-10.7-24-24-24s-24,10.7-24,24c0,8.7,4.6,16.3,11.6,20.5c-6.8,33.6-36.5,59-72.1,59c-40.5,0-73.5-33-73.5-73.5v-53.9c52-5.1,92.7-49,92.7-102.3v-65.7c0.1-0.5,0.1-1,0.1-1.5V90c0-5.5-4.5-10-10-10h-16.8c-12.5,0-22.6,10.1-22.6,22.6c0,12.5,10.1,22.6,22.6,22.6h6.7v57.2c0,45.6-37.1,82.7-82.7,82.8c0,0,0,0,0,0c0,0,0,0-0.1,0c-45.6,0-82.8-37.1-82.8-82.8v-57.2h6.3c12.5,0,22.6-10.1,22.6-22.6c0-12.5-10.1-22.6-22.6-22.6h-16.3c-5.5,0-10,4.5-10,10v25.2v67.2c0,53.3,40.8,97.3,92.8,102.3v58.9c0,0.8,0.1,1.6,0.3,2.3c3.7,48.1,44.1,86.2,93.2,86.2c45.8,0,84.1-33.1,92-76.7C391.5,352.2,398.4,343.2,398.4,332.5z M279.8,102.5c0-1.4,1.2-2.6,2.6-2.6h6.8v5.2h-6.8C281,105.1,279.8,104,279.8,102.5z M123.6,100h6.3c1.4,0,2.6,1.2,2.6,2.6s-1.2,2.6-2.6,2.6h-6.3V100z M376.1,328.9c-0.7-0.2-1.4-0.3-2.1-0.4c0.1,0,0.3,0,0.4,0C375,328.5,375.6,328.7,376.1,328.9z"/>
      </svg>
    ),
    title: 'Komplexní péče',
    desc: 'Prevence, ošetření, i estetika – vše na jednom místě, pod jednou střechou.',
  },
];

const reviews = [
  { text: 'Vždy jsem měla trauma ze zubaře. Od té doby co mám tohoto pana doktora se opravdu nebojím. Trhal mi 4 osmičky, nikdy žádný zánět nic. Vše vysvětlí u toho co dělá.' },
  { text: 'Velká spokojenost, a to, že se čeká i 2 měsíce? A co jako, na dobrého pana doktora si klidně počkám. I moje 2 děti pana doktora i jeho přístup a paní sestřičku mají rády.' },
  { text: 'Nejlepší zubař na světě, bez diskuze.' },
  { text: 'Vždy mám panickou hrůzu ze zubaře. Dnes jsem se v křesle cítil hodně příjemně a hrůza byla ta tam. Oceňuji velice empatický přístup pana doktora.' },
  { text: 'Nejlepší zubař co znám – já se všeho bojím, opravdu jsem šťastná, že chodíme k němu.' },
];

const insurers = [
  { name: 'VZP', full: 'Všeobecná zdravotní pojišťovna', logo: 'vseobecnazdraovnipojistovna.png' },
  { name: 'OZP', full: 'Oborová zdravotní pojišťovna', logo: 'oborovazdravotnipojistovna.jpg' },
  { name: 'VoZP', full: 'Vojenská zdravotní pojišťovna', logo: 'vojenskazdraovtnipojistovna.png' },
  { name: 'RBP', full: 'Revírní bratrská pokladna', logo: 'revirnibratrskapokladnapojistovna.jpg' },
];

function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-primary-700 py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Co říkají pacienti</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-h-[140px] flex items-center justify-center">
            <div className="text-center">
              {/* hvězdičky */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg leading-relaxed italic">
                „{reviews[current].text}"
              </p>
              <p className="text-primary-300 text-xs mt-4">Ověřený pacient · ZnamyLekar.cz</p>
            </div>
          </div>

          {/* tečky */}
          <div className="flex justify-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-5' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[88vh] flex items-center">
        <img
          src={`${base}photos/ordinace2.jpeg`}
          alt="Naše ordinace"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-screen-xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Váš úsměv,<br />
              <span className="text-primary-400">naše radost.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed max-w-xl">
              Moderní zubní péče s důrazem na komfort, přesnost a individuální přístup.
              Ordinujeme v centru Ostravy.
            </p>
            <p className="text-sm text-amber-300 mb-8 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Objednáváme pouze registrované pacienty
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:586413863"
                className="px-6 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-900/40"
              >
                Pro registrované pacienty: 586 413 863
              </a>
              <Link
                to="/o-nas"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm"
              >
                Více o nás
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proč Arvadent */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Proč si vybrat Arvadent?
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Staráme se o váš chrup s péčí a odborností, na které se můžete spolehnout.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tým */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Náš tým
            </h2>
            <p className="text-slate-500 text-lg">Jsme tu pro vás.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Lékař */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                <img
                  src={`${base}photos/lekar2.jpeg`}
                  alt="MUDr. Tomáš Arvai"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">MUDr. Tomáš Arvai</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">Praktický zubní lékař</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Zkušený zubní lékař s dlouholetou praxí. Zaměřuje se na komplexní péči
                  o pacienty s důrazem na prevenci a moderní ošetřovací metody.
                </p>
              </div>
            </div>
            {/* Sestřička – placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="aspect-[3/4] bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                    <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/>
                  </svg>
                  <p className="text-xs">Foto bude doplněno</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  TODO – doplnit jméno
                  <span className="text-xs font-normal text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">doplnit</span>
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-3">Zdravotní sestra</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Nepostradatelná součást týmu. Stará se nejen o pacienty, ale i o hladký chod
                  celé ordinace – od administrativy a objednávání až po přípravu ošetření.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recenze carousel */}
      <ReviewCarousel />

      {/* Pojišťovny */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Smluvní zdravotní pojišťovny
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {insurers.map(ins => (
              <div key={ins.name} className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-primary-300 hover:bg-white hover:scale-110 hover:shadow-md transition-all duration-200 cursor-default">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 p-1">
                  <img src={`${base}photos/${ins.logo}`} alt={ins.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm leading-none">{ins.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{ins.full}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            * Přesný seznam smluvních pojišťoven ověřte prosím telefonicky.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Jste naším pacientem?
          </h2>
          <p className="text-primary-200 mb-2 text-lg">
            Ordinace aktuálně nepřijímá nové pacienty.
          </p>
          <p className="text-primary-300 mb-8 text-sm">
            Pro registrované pacienty – zavolejte nám nebo napište e-mail pro objednání termínu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:586413863"
              className="px-6 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow"
            >
              📞 586 413 863
            </a>
            <a
              href="mailto:info@arvadent.cz"
              className="px-6 py-3.5 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-colors"
            >
              ✉ info@arvadent.cz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
