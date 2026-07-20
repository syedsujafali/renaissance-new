import { useEffect, useState } from 'react';

export default function CookieSettings() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setVisible(true);
    setOpen(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      {open && (
        <div className="fixed bottom-6 right-6 z-60">
          <div className="flex w-full max-w-xs items-center gap-3 rounded-lg border bg-white px-3 py-2 text-sm shadow-lg">
            <div className="flex-1">
              <p className="text-sm text-slate-800">We use cookies to improve your experience.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setOpen(false); setVisible(false); }}
                className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
              >
                Decline
              </button>
              <button
                onClick={() => { setOpen(false); setVisible(false); }}
                className="rounded-md bg-[#003399] px-3 py-1 text-xs font-medium text-white"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
