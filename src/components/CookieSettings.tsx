import { useEffect, useState } from 'react';

export default function CookieSettings() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // show the cookie button on initial load
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Floating cookie button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-[#003399] px-4 py-2 text-sm font-medium text-white shadow-lg hover:brightness-95 transition"
        >
          Cookie Settings
        </button>

        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss cookie button"
          className="rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm border"
        >
          Dismiss
        </button>
      </div>

      {/* Modal (dummy) */}
      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-4xl rounded-2xl bg-white p-10 shadow-2xl max-h-[92vh] overflow-auto">
            <h3 className="mb-8 text-3xl font-semibold text-[#003399]">Cookie Settings (Demo)</h3>

            <div className="space-y-8">
              <label className="flex items-center justify-between">
                <span className="text-lg text-slate-700">Essential cookies</span>
                <input type="checkbox" defaultChecked disabled className="h-6 w-6" />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-lg text-slate-700">Analytics</span>
                <input type="checkbox" defaultChecked className="h-6 w-6" />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-lg text-slate-700">Marketing</span>
                <input type="checkbox" className="h-6 w-6" />
              </label>
            </div>

            <div className="mt-10 flex justify-end gap-4">
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm text-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => { setOpen(false); setVisible(false); }}
                className="rounded-full bg-[#003399] px-6 py-3 text-sm font-medium text-white"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
