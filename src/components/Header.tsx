import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Get in Touch', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-6 py-5 transition-all duration-300 ${scrolled ? 'border-b border-sky-900/10 bg-white/90 shadow-sm backdrop-blur-xl' : 'border-b border-transparent bg-transparent backdrop-blur-none'}`}
    >
      <div className="mx-auto flex max-w-full items-center justify-between gap-6">
        <Link to="/" className={`flex items-center gap-3 transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
          <img src="/images/logo%20(1).png" alt="Renaissance logo" className="h-10 w-auto object-contain sm:h-11" />
        </Link>

        <nav className={`hidden items-center gap-8 text-sm uppercase tracking-[0.3em] md:flex ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path ? (scrolled ? 'text-sky-700' : 'text-sky-200') : scrolled ? 'hover:text-sky-700' : 'hover:text-sky-200'} transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${scrolled ? 'border-sky-900/10 bg-white text-slate-700 hover:border-sky-700/20' : 'border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${isOpen ? 'rotate-45 translate-y-[1px]' : 'translate-y-0'} block h-[1px] w-5 ${scrolled ? 'bg-slate-700' : 'bg-white'} transition-transform duration-300`} />
          <span className={`${isOpen ? 'opacity-0' : 'opacity-100'} absolute h-[1px] w-5 ${scrolled ? 'bg-slate-700' : 'bg-white'} transition-opacity duration-300`} />
          <span className={`${isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-0'} block h-[1px] w-5 ${scrolled ? 'bg-slate-700' : 'bg-white'} transition-transform duration-300`} />
        </button>
      </div>

      <div className={`absolute inset-x-6 top-full mt-4 rounded-3xl border border-sky-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(16,36,61,0.12)] transition-all duration-500 md:hidden ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`}>
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold tracking-[0.2em] ${location.pathname === link.path ? 'text-sky-700' : 'text-slate-600 hover:text-sky-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
