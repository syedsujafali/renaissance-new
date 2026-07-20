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
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-2xl max-h-[92vh] overflow-auto border border-slate-200">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-[#003399]">We use cookies</h3>
                <p className="mt-2 max-w-2xl text-sm text-slate-600">
                  This site uses cookies to provide a better experience, measure performance, and personalize content.
                </p>
              </div>
              <span className="inline-flex rounded-full bg-[#003399] px-4 py-2 text-sm font-semibold text-white">
                Cookie consent
              </span>
            </div>

            <div className="space-y-6 rounded-[2rem] bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div>
                  <p className="text-base font-semibold text-slate-800">Essential cookies</p>
                  <p className="text-sm text-slate-600">Necessary for the website to function.</p>
                </div>
                <input type="checkbox" checked disabled className="h-6 w-6" />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div>
                  <p className="text-base font-semibold text-slate-800">Analytics</p>
                  <p className="text-sm text-slate-600">Helps us understand how visitors use the site.</p>
                </div>
                <input type="checkbox" defaultChecked className="h-6 w-6" />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div>
                  <p className="text-base font-semibold text-slate-800">Marketing</p>
                  <p className="text-sm text-slate-600">Used to deliver relevant content and offers.</p>
                </div>
                <input type="checkbox" className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => { setOpen(false); setVisible(false); }}
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
              >
                Decline
              </button>
              <button
                onClick={() => { setOpen(false); setVisible(false); }}
                className="rounded-full bg-[#003399] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#002a88]"
              >
                Accept cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
