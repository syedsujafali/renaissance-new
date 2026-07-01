import { motion } from 'framer-motion';
import { allPageImages } from '../utils/imageLibrary';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white min-h-screen pt-32"
    >
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-32">
        <div className="pointer-events-none absolute inset-0 flex justify-end items-start pr-8 md:pr-16">
          <svg width="560" height="560" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 dark:opacity-6 w-44 h-44 md:w-72 md:h-72 lg:w-96 lg:h-96 text-renaissance-gold">
            <defs>
              <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280 280) scale(280)">
                <stop offset="0%" stopColor="#F0E6C8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F0E6C8" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="280" cy="280" r="200" fill="url(#g)" />
            <g transform="translate(120,120) scale(1.2)" fill="#D8C07A">
              <path d="M80 0c44 0 80 36 80 80s-36 80-80 80S0 124 0 80 36 0 80 0z" opacity="0.6" />
            </g>
          </svg>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="text-renaissance-gold uppercase tracking-[0.2em] text-sm font-medium mb-6 block">Our Legacy</span>
          <h1 className="font-serif text-5xl md:text-7xl text-renaissance-blue-dark">
            Expertise & <br /> Precision.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-renaissance-gray">
              <img 
                src="/images/13-1.jpg" 
                alt="Large scale premium event production" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[20s] ease-linear"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col justify-center pt-8 md:pt-20"
          >
            <p className="font-serif text-3xl md:text-4xl text-renaissance-blue-dark leading-relaxed mb-12">
              For three decades, Renaissance Meetings & Special Events has been a trusted partner for global brands, Fortune 500 companies, associations, Sports, non-profits, and visionary leaders seeking to create moments that transcend the ordinary.
            </p>
            <p className="font-light text-lg text-slate-600 leading-loose max-w-2xl">
              From intimate executive gatherings to large-scale productions reaching thousands, we bring expertise, creativity, and precision to every event.
            </p>
          </motion.div>
        </div>
      </div>
      
      <section className="py-32 bg-renaissance-offwhite px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-renaissance-blue-dark mb-16">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { title: "Creativity", desc: "Pushing boundaries to design immersive environments that captivate and inspire." },
                    { title: "Precision", desc: "Meticulous attention to detail ensuring flawless execution from concept to completion." },
                    { title: "Excellence", desc: "A commitment to delivering unparalleled luxury and sophisticated experiences." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                    >
                        <div className="w-12 h-[1px] bg-renaissance-gold mx-auto mb-8"></div>
                        <h3 className="font-serif text-2xl text-renaissance-blue-dark mb-4">{item.title}</h3>
                        <p className="font-light text-slate-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-renaissance-blue-dark mb-12 text-center">More visuals from our studio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPageImages.slice(9, 17).map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
