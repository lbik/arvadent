import { useEffect, useState } from 'react';

const typeStyles = {
  info: {
    bg: 'bg-primary-50 border-primary-200',
    text: 'text-primary-800',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  warning: {
    bg: 'bg-amber-50 border-amber-200',
    text: 'text-amber-800',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  holiday: {
    bg: 'bg-rose-50 border-rose-200',
    text: 'text-rose-800',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
};

export default function AnnouncementBanner() {
  const [announcement, setAnnouncement] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'announcement.json')
      .then(r => r.json())
      .then(data => {
        if (!data.active) return;
        if (data.expiresAt && new Date(data.expiresAt) < new Date()) return;
        setAnnouncement(data);
      })
      .catch(() => {});
  }, []);

  if (!announcement || dismissed) return null;

  const style = typeStyles[announcement.type] || typeStyles.info;

  return (
    <div className={`border-b ${style.bg} ${style.text}`}>
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-start gap-3">
        <span className="mt-0.5 shrink-0">{style.icon}</span>
        <div className="flex-1 text-sm">
          {announcement.title && (
            <span className="font-semibold mr-1.5">{announcement.title}:</span>
          )}
          {announcement.message}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Zavřít"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
