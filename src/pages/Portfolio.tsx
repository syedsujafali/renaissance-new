import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { allPageImages } from '../utils/imageLibrary';

const images = [
  { src: allPageImages[0].src, alt: 'Grand Ballroom', category: 'Gala' },
  { src: allPageImages[1].src, alt: 'VIP Event', category: 'Intimate' },
  { src: allPageImages[3].src, alt: 'Corporate Event Setup', category: 'Corporate' },
  { src: allPageImages[4].src, alt: 'Elegant Dining', category: 'Design' },
  { src: allPageImages[6].src, alt: 'Production Setup', category: 'Production' },
  { src: allPageImages[7].src, alt: 'Beard Group Table', category: 'Corporate' },
  { src: allPageImages[8].src, alt: 'Large Scale Layout', category: 'Corporate' },
  { src: allPageImages[9].src, alt: 'Conference Setup', category: 'Corporate' }
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Corporate', 'Decor', 'Production', 'Gala', 'Intimate', 'Design'];
  
  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-renaissance-blue-dark mb-10"
          >
            Our Work
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 pb-1 border-b ${
                  filter === cat 
                    ? 'border-renaissance-blue-dark text-renaissance-blue-dark' 
                    : 'border-transparent text-slate-400 hover:text-renaissance-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={img.src}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
                onClick={() => setIndex(images.findIndex(x => x.src === img.src))}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-renaissance-blue-dark/0 group-hover:bg-renaissance-blue-dark/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(img => ({ src: img.src }))}
      />
    </motion.div>
  );
}
