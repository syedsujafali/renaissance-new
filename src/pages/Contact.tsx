import { motion } from 'framer-motion';
import { allPageImages } from '../utils/imageLibrary';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white min-h-screen pt-32 relative"
    >
      <div className="absolute inset-0 z-0 h-[60vh] bg-renaissance-blue-dark">
        <img 
          src="/images/5.jpeg"
          alt="Contact Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-renaissance-blue-dark/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 pt-20 lg:pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Let's Create Together
          </h1>
          <p className="font-light text-white/80 text-lg max-w-2xl mx-auto tracking-wide">
            Reach out to discuss your upcoming event, and discover how Renaissance can elevate your vision.
          </p>
        </motion.div>

        <div className="bg-white shadow-2xl p-10 md:p-16 lg:p-24 max-w-4xl mx-auto">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative border-b border-gray-300 focus-within:border-renaissance-blue-dark transition-colors">
                <input 
                  type="text" 
                  id="name" 
                  placeholder=" " 
                  className="block w-full appearance-none focus:outline-none bg-transparent py-2 text-renaissance-blue-dark peer"
                />
                <label htmlFor="name" className="absolute top-2 left-0 text-gray-400 uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-renaissance-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] cursor-text">
                  Full Name
                </label>
              </div>
              <div className="relative border-b border-gray-300 focus-within:border-renaissance-blue-dark transition-colors">
                <input 
                  type="email" 
                  id="email" 
                  placeholder=" " 
                  className="block w-full appearance-none focus:outline-none bg-transparent py-2 text-renaissance-blue-dark peer"
                />
                <label htmlFor="email" className="absolute top-2 left-0 text-gray-400 uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-renaissance-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] cursor-text">
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative border-b border-gray-300 focus-within:border-renaissance-blue-dark transition-colors">
              <input 
                type="text" 
                id="company" 
                placeholder=" " 
                className="block w-full appearance-none focus:outline-none bg-transparent py-2 text-renaissance-blue-dark peer"
              />
              <label htmlFor="company" className="absolute top-2 left-0 text-gray-400 uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-renaissance-gold peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] cursor-text">
                Company Name
              </label>
            </div>

            <div className="relative border-b border-gray-300 focus-within:border-renaissance-blue-dark transition-colors pt-4">
              <textarea 
                id="message" 
                rows={4}
                placeholder=" " 
                className="block w-full appearance-none focus:outline-none bg-transparent py-2 text-renaissance-blue-dark peer resize-none"
              ></textarea>
              <label htmlFor="message" className="absolute top-6 left-0 text-gray-400 uppercase tracking-widest text-xs transition-all duration-300 peer-focus:-top-0 peer-focus:text-[10px] peer-focus:text-renaissance-gold peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-[10px] cursor-text">
                Tell us about your event
              </label>
            </div>

            <div className="pt-8 flex justify-center">
              <button 
                type="submit" 
                className="bg-renaissance-blue-dark text-white px-16 py-5 uppercase tracking-[0.2em] text-xs font-medium hover:bg-renaissance-gold hover:text-white transition-colors duration-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="relative z-10 py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-renaissance-blue-dark mb-10 text-center">Recent highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...allPageImages.slice(17, 25), allPageImages[2]].map((image, index) => (
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
