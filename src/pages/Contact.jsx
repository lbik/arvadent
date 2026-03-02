const hours = [
  { day: 'Pondělí', time: '8:00–16:00' },
  { day: 'Úterý', time: '8:00–16:00' },
  { day: 'Středa', time: '8:00–16:00' },
  { day: 'Čtvrtek', time: '8:00–16:00' },
  { day: 'Pátek', time: '7:30–12:00' },
  { day: 'Sobota', time: 'Zavřeno' },
  { day: 'Neděle', time: 'Zavřeno' },
];

export default function Contact() {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">Kontakt</h1>
          <p className="text-slate-400 text-lg">Jsme tu pro vás. Neváhejte se ozvat.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Kontaktní informace */}
          <div className="space-y-6">
            {/* Adresa */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h2 className="font-semibold text-slate-900">Adresa</h2>
              </div>
              <p className="text-slate-700 font-medium">MUDr. Tomáš Arvai – Arvadent</p>
              <p className="text-slate-600 text-sm mt-1">Antonína Macka 122/1<br />702 00 Moravská Ostrava</p>
            </div>

            {/* Telefon */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.97 17l-.05-.08z"/>
                  </svg>
                </div>
                <h2 className="font-semibold text-slate-900">Telefon</h2>
              </div>
              <a href="tel:586413863" className="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors">
                586 413 863
              </a>
              <p className="text-slate-500 text-xs mt-1.5">Pro již registrované pacienty – objednejte se zde.</p>
              <p className="text-amber-600 text-xs mt-0.5 font-medium">Ordinace aktuálně nepřijímá nové pacienty.</p>
            </div>

            {/* Email */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h2 className="font-semibold text-slate-900">E-mail</h2>
              </div>
              <a href="mailto:info@arvadent.cz" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                info@arvadent.cz
              </a>
            </div>

            {/* Ordinační hodiny */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h2 className="font-semibold text-slate-900">Ordinační hodiny</h2>
              </div>
              <div className="space-y-2">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className={time === 'Zavřeno' ? 'text-slate-400' : 'text-slate-700'}>{day}</span>
                    <span className={time === 'Zavřeno' ? 'text-slate-400' : 'text-slate-900 font-medium'}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex-1 min-h-[400px]">
              <iframe
                title="Mapa Arvadent"
                src="https://www.google.com/maps?q=Antonína+Macka+122%2F1%2C+70200+Ostrava&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-5 bg-primary-50 border border-primary-100 rounded-2xl text-sm text-primary-700">
              <strong>Jak se k nám dostat:</strong> Nacházíme se na ulici Antonína Macka v centru Moravské Ostravy.
              Zastávky MHD v bezprostřední blízkosti, parkování v okolí.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
