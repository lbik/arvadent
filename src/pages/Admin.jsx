import { useEffect, useState } from 'react';

const STORAGE_KEY = 'arvadent_gh_token';
const REPO_OWNER = 'lbik';
const REPO_NAME = 'arvadent';
const FILE_PATH = 'public/announcement.json';

async function getFileSha(token) {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
    { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } }
  );
  if (!res.ok) throw new Error('Nepodařilo se načíst soubor z GitHub.');
  const data = await res.json();
  return { sha: data.sha, content: JSON.parse(atob(data.content)) };
}

async function updateFile(token, sha, newContent) {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Aktualizace oznámení',
        content: btoa(unescape(encodeURIComponent(JSON.stringify(newContent, null, 2)))),
        sha,
      }),
    }
  );
  if (!res.ok) throw new Error('Nepodařilo se uložit změny na GitHub.');
}

const typeOptions = [
  { value: 'info', label: 'Informace', color: 'text-blue-700' },
  { value: 'warning', label: 'Upozornění', color: 'text-amber-700' },
  { value: 'holiday', label: 'Dovolená / zavřeno', color: 'text-rose-700' },
];

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY) || '');
  const [tokenInput, setTokenInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [form, setForm] = useState({ active: false, type: 'info', title: '', message: '', expiresAt: '' });
  const [sha, setSha] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) loadCurrent();
  }, [token]);

  async function loadCurrent() {
    try {
      setLoading(true);
      const { sha: fileSha, content } = await getFileSha(token);
      setSha(fileSha);
      setForm({
        active: content.active ?? false,
        type: content.type ?? 'info',
        title: content.title ?? '',
        message: content.message ?? '',
        expiresAt: content.expiresAt ?? '',
      });
      setIsLoggedIn(true);
      setError('');
    } catch (e) {
      setError('Neplatný token nebo chyba připojení. Zkontrolujte token a zkuste znovu.');
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, tokenInput);
    setToken(tokenInput);
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setToken('');
    setTokenInput('');
    setIsLoggedIn(false);
  }

  async function handleSave(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setError('');
    try {
      const { sha: freshSha } = await getFileSha(token);
      await updateFile(token, freshSha, form);
      setSha(freshSha);
      setStatus('Uloženo! Změny se projeví na webu za 1–2 minuty.');
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Správa oznámení</h1>
              <p className="text-xs text-slate-500">Arvadent admin</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-700">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                GitHub token
              </label>
              <input
                type="password"
                value={tokenInput}
                onChange={e => setTokenInput(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxx"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <p className="text-xs text-slate-400 mt-1.5">
                Token vám předá správce webu. Uloží se bezpečně v tomto prohlížeči.
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
            >
              Přihlásit se
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Admin panel
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span className="font-bold text-slate-900">Arvadent – správa oznámení</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Odhlásit se
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Preview banneru */}
        {form.active && form.message && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Náhled banneru</p>
            <div className={`p-4 rounded-xl border text-sm ${
              form.type === 'holiday' ? 'bg-rose-50 border-rose-200 text-rose-800' :
              form.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' :
              'bg-primary-50 border-primary-200 text-primary-800'
            }`}>
              {form.title && <strong className="mr-1">{form.title}:</strong>}
              {form.message}
            </div>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-900">Nastavení oznámení</h2>

          {/* Zapnout/vypnout */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-medium text-slate-900">Zobrazit oznámení na webu</p>
              <p className="text-sm text-slate-500">Zapnuto = pacienti uvidí banner nahoře</p>
            </div>
            <button
              type="button"
              onClick={() => setForm(f => ({ ...f, active: !f.active }))}
              className={`relative w-12 h-6 rounded-full transition-colors ${form.active ? 'bg-primary-600' : 'bg-slate-300'}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${form.active ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* Typ */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Typ oznámení</label>
            <div className="grid grid-cols-3 gap-2">
              {typeOptions.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, type: opt.value }))}
                  className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-colors ${
                    form.type === opt.value
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Nadpis */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nadpis <span className="text-slate-400 font-normal">(nepovinné)</span>
            </label>
            <input
              type="text"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="např. Vánoční dovolená"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Zpráva */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Text oznámení</label>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="např. Ordinace bude uzavřena 24.12. – 2.1. Přejeme krásné svátky!"
              rows={3}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Datum expirace */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Automaticky skrýt od data <span className="text-slate-400 font-normal">(nepovinné)</span>
            </label>
            <input
              type="date"
              value={form.expiresAt}
              onChange={e => setForm(f => ({ ...f, expiresAt: e.target.value }))}
              className="px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Feedback */}
          {status && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700">
              ✓ {status}
            </div>
          )}
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors"
          >
            {loading ? 'Ukládám...' : 'Uložit a zveřejnit'}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Po uložení se změny projeví na webu za 1–2 minuty.
        </p>
      </div>
    </div>
  );
}
