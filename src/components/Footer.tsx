import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-renaissance-blue-dark text-white py-20 px-8 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-3xl tracking-widest uppercase mb-6 block">
            Renaissance
          </Link>
          <p className="text-white/60 font-light max-w-sm leading-relaxed mb-8">
            Where creativity begins. Designing luxury corporate events and unforgettable experiences.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-renaissance-gold transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-white/60 hover:text-renaissance-gold transition-colors"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-white/60 hover:text-renaissance-gold transition-colors"><FaTwitter size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-6 tracking-wide text-renaissance-gold">Explore</h4>
          <ul className="flex flex-col gap-4 font-light text-white/70">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-6 tracking-wide text-renaissance-gold">Contact</h4>
          <ul className="flex flex-col gap-4 font-light text-white/70">
            <li>hello@renaissance-events.com</li>
            <li>+1 (800) 555-0199</li>
            <li>New York • London • Paris</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Renaissance Meetings & Special Events. All rights reserved.</p>
        <div className="flex gap-6">
          <button className="hover:text-white transition-colors cursor-pointer">Cookie Settings</button>
          <button className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
}
