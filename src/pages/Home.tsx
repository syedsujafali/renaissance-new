import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allPageImages } from '../utils/imageLibrary';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Inform other components about intro visibility (so header can hide while active)
  useEffect(() => {
    (window as any).__introActive = showIntro;
    window.dispatchEvent(new CustomEvent('intro-state', { detail: { showIntro } }));
    return () => {
      (window as any).__introActive = false;
      window.dispatchEvent(new CustomEvent('intro-state', { detail: { showIntro: false } }));
    };
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro) return;
    const fallback = window.setTimeout(() => setShowIntro(false), 10000);
    return () => window.clearTimeout(fallback);
  }, [showIntro]);

  // Detect mobile and disable intro video on small screens
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // If on mobile, skip the intro immediately
  useEffect(() => {
    if (isMobile && showIntro) setShowIntro(false);
  }, [isMobile, showIntro]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white min-h-screen"
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white overflow-hidden"
          >
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={() => setShowIntro(false)}
              onError={() => setShowIntro(false)}
            >
              <source src="/images/loader.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen w-full overflow-hidden bg-renaissance-blue-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-renaissance-blue-dark/60 via-renaissance-blue-dark/30 to-renaissance-blue-dark/80 mix-blend-multiply z-10"></div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 4.0, ease: 'easeOut' }}
              className="font-serif text-white text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight tracking-wide"
            >
              Unforgettable <br/>
              <span className="italic text-renaissance-gold/90 font-light">Luxury Events</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 4.5 }}
              className="pointer-events-auto"
            >
              <Link 
                to="/portfolio" 
                className="inline-block border border-white/40 text-white px-10 py-4 uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-renaissance-blue-dark transition-all duration-500 backdrop-blur-sm"
              >
                View Our Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured About Snippet */}
      <section className="py-32 px-8 lg:px-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-3xl md:text-5xl text-renaissance-blue-dark leading-relaxed mb-10">
              Transforming visionary concepts into spectacular realities for the world's most discerning brands.
            </h3>
            <Link to="/about" className="text-sm uppercase tracking-widest text-renaissance-gold font-medium border-b border-renaissance-gold pb-1 hover:text-renaissance-blue-dark hover:border-renaissance-blue-dark transition-colors duration-300">
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Elegant Image Section */}
      <section className="h-[70vh] w-full relative overflow-hidden bg-renaissance-blue-dark">
        <motion.img
           initial={{ scale: 1.1 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           src="/images/2.jpeg"
           alt="Elegant Event Details"
           className="absolute inset-0 w-full h-full object-cover opacity-90"
           loading="lazy"
        />
      </section>

      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-renaissance-gold mb-4">Featured Work</p>
            <h3 className="font-serif text-3xl md:text-4xl text-renaissance-blue-dark mb-4">Moments shaped with movement, light, and precision.</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">A curated look at the imagery and atmosphere that define Renaissance events.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPageImages.slice(0, 9).map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02, y: -6, rotate: -1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover"
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
