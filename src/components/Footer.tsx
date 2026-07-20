import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-24 lg:px-16">
      {/* decorative blue blurs removed per request */}

      <div className="relative mx-auto grid max-w-full gap-14 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="glass-panel rounded-[2rem] border border-[#003399]/10 p-10 soft-shadow">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#003399]">Stay inspired</p>
          <h2 className="mb-6 font-serif text-4xl text-slate-800">Let’s create something unforgettable together.</h2>
          <p className="leading-relaxed text-slate-600">A calm, intentional approach to event design with elevated hospitality and memorable atmosphere.</p>
        </div>

        <div className="rounded-[2rem] border border-[#003399]/10 bg-white p-8">
          <h3 className="mb-6 font-serif text-xl text-[#003399]">Navigation</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link to="/" className="hover:text-[#003399]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#003399]">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#003399]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[#003399]">Get in Touch</Link></li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[#003399]/10 bg-white p-8">
          <h3 className="mb-6 font-serif text-xl text-[#003399]">Connect</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">hello@renaissance-events.com</p>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">+1 (800) 555-0199</p>
          <p className="text-sm leading-relaxed text-slate-600">New York • London • Paris</p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-full flex-col gap-4 border-t border-[#003399]/10 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Renaissance Meetings & Special Events.</p>
        <p>Designed for immersive experiences.</p>
      </div>
    </footer>
  );
}
