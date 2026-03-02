import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.19807 4.45825C8.55418 4.22291 7.94427 4 7 4C5 4 4 6 4 8.5C4 10.0985 4.40885 11.0838 4.83441 12.1093C5.0744 12.6877 5.31971 13.2788 5.5 14C5.649 14.596 5.7092 15.4584 5.77321 16.3755C5.92401 18.536 6.096 21 7.5 21C8.39898 21 8.79286 19.5857 9.22652 18.0286C9.75765 16.1214 10.3485 14 12 14C13.6515 14 14.2423 16.1214 14.7735 18.0286C15.2071 19.5857 15.601 21 16.5 21C17.904 21 18.076 18.536 18.2268 16.3755C18.2908 15.4584 18.351 14.596 18.5 14C18.6803 13.2788 18.9256 12.6877 19.1656 12.1093C19.5912 11.0838 20 10.0985 20 8.5C20 6 19 4 17 4C16.0557 4 15.4458 4.22291 14.8019 4.45825C14.082 4.72136 13.3197 5 12 5C10.6803 5 9.91796 4.72136 9.19807 4.45825Z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Arvadent</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Moderní zubní ordinace v Ostravě.<br />
            Váš úsměv, naše radost.
          </p>
        </div>

        {/* Navigace */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigace</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Úvod</Link></li>
            <li><Link to="/o-nas" className="hover:text-white transition-colors">O nás</Link></li>
            <li><Link to="/cenik" className="hover:text-white transition-colors">Ceník</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>Antonína Macka 122/1, Ostrava</li>
            <li>
              <a href="tel:586413863" className="hover:text-white transition-colors">586 413 863</a>
            </li>
            <li>
              <a href="mailto:info@arvadent.cz" className="hover:text-white transition-colors">info@arvadent.cz</a>
            </li>
            <li className="pt-2 text-slate-400">
              Po–Čt: 8:00–16:00<br />
              Pá: 7:30–12:00
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4">
        <p className="text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Arvadent – MUDr. Tomáš Arvai. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
