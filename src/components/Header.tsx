import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [introActive, setIntroActive] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const onIntro = (e: any) => setIntroActive(Boolean(e?.detail?.showIntro));

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('intro-state', onIntro as EventListener);

    // initial check in case Home already set the flag
    if ((window as any).__introActive) setIntroActive(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('intro-state', onIntro as EventListener);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Get in Touch', path: '/contact' }
  ];

  const headerBg = (!isHomePage || isScrolled) ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = (isHomePage && !isScrolled && !isMobileMenuOpen) ? 'text-white' : 'text-renaissance-blue-dark';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-6 px-8 lg:px-16 ${headerBg} ${introActive && isHomePage ? 'opacity-0 pointer-events-none' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className={`transition-colors duration-500 ${textColor} relative z-[60]`}>
          <img
            src="/images/logo%20(1).png"
            alt="Renaissance logo"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-renaissance-gold ${textColor} ${location.pathname === link.path ? 'opacity-100' : 'opacity-70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden relative z-[60] p-2 -mr-2 ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-[1px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`w-full h-[1px] bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[1px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-50 flex flex-col justify-center items-center transition-all duration-700 ease-[0.16,1,0.3,1] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-renaissance-blue-dark hover:text-renaissance-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
