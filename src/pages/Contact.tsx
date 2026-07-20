import { motion } from 'framer-motion';
import { allPageImages } from '../utils/imageLibrary';
import ImageSlider from '../components/ImageSlider';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-slate-800"
    >
      <div className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[url('/images/5.jpeg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative mx-auto max-w-full px-6 py-28 text-center lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl leading-tight text-slate-800 md:text-6xl xl:text-7xl"
          >
            Let’s build an event that feels iconic.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mx-auto mt-6 max-w-3xl text-slate-600"
          >
            Reach out to begin planning a distinguished experience with refined design, thoughtful hospitality, and unforgettable storytelling.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pt-16 lg:px-0">
        <div className="rounded-[2rem] border border-[#003399]/10 bg-white p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { id: 'name', label: 'Full Name', type: 'text' },
                { id: 'email', label: 'Email Address', type: 'email' }
              ].map((field) => (
                <div key={field.id} className="relative border-b border-[#003399]/10 transition-colors focus-within:border-[#003399]">
                  <input type={field.type} id={field.id} placeholder=" " className="peer block w-full bg-transparent py-3 text-slate-800 outline-none" />
                  <label htmlFor={field.id} className="absolute left-0 top-3 text-sm uppercase tracking-[0.25em] text-slate-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#003399] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                    {field.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="relative border-b border-[#003399]/10 transition-colors focus-within:border-[#003399]">
              <textarea id="message" rows={5} placeholder=" " className="peer block w-full resize-none bg-transparent py-3 text-slate-800 outline-none" />
              <label htmlFor="message" className="absolute left-0 top-3 text-sm uppercase tracking-[0.25em] text-slate-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#003399] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                Tell us about your event
              </label>
            </div>

            <div className="flex justify-center pt-4">
              <button type="submit" className="rounded-full bg-[#003399] px-14 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#003399]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-full">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-slate-800">Recent highlights</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">A selection of images capturing the atmosphere and detail of recent Renaissance activations.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...allPageImages.slice(0, 6)].map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="overflow-hidden rounded-[1.8rem] border border-[#003399]/10 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <ImageSlider
                  images={[image, allPageImages[(index + 1) % allPageImages.length]]}
                  className="h-72"
                  imageClassName="h-72"
                  showDots={false}
                  autoPlay={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
