import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f7f9fc] pt-16 text-slate-800"
    >
      <div className="relative mx-auto max-w-full px-0 py-0 lg:px-0 lg:py-0">
        <div className="relative mx-auto max-w-full px-6 py-20 lg:px-16 lg:py-32">
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-24 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-20 max-w-3xl"
        >
          <span className="mb-6 block text-sm font-medium uppercase tracking-[0.35em] text-sky-700">Our Legacy</span>
          <h1 className="font-serif text-5xl leading-tight text-slate-800 md:text-6xl xl:text-7xl">For three decades, we have helped create moments that transcend the ordinary.</h1>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
            className="overflow-hidden rounded-[2rem] border border-sky-900/10 bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.01, y: -4 }}
              className="h-full min-h-[520px]"
            >
              <ImageSlider
                images={[
                  { src: '/images/WhatsApp Image 2026-06-30 at 9.34.47 PM.jpeg', alt: 'Signature Renaissance event design' },
                  { src: '/images/WhatsApp Image 2026-06-30 at 9.34.47 PM (1).jpeg', alt: 'Signature Renaissance event design' },
                  { src: '/images/WhatsApp Image 2026-06-30 at 9.34.47 PM (2).jpeg', alt: 'Signature Renaissance event design' }
                ]}
                className="h-full min-h-[520px]"
                imageClassName="min-h-[520px]"
                autoPlay={false}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
            className="space-y-8"
          >
            <p className="text-3xl leading-relaxed text-slate-700 md:text-4xl">
              Renaissance Meetings & Special Events is a trusted partner for global brands, Fortune 500 companies, associations, sports organizations, nonprofits, and visionary leaders seeking to create extraordinary moments.
            </p>
            <p className="max-w-2xl leading-relaxed text-slate-600">
              From intimate executive gatherings to large-scale productions reaching thousands, we bring expertise, creativity, and precision to every event with the same care and clarity.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: 'Global Partnerships', value: 'Trusted by Fortune 500 clients, associations, sports, and leading nonprofits.' },
                { label: 'Immersive Execution', value: 'Thoughtful design, technical planning, and guest experience architecture in every detail.' }
              ].map((item) => (
                <div key={item.label} className="rounded-[1.8rem] border border-sky-900/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                  <p className="mb-3 text-sm uppercase tracking-[0.35em] text-sky-700">{item.label}</p>
                  <p className="leading-relaxed text-slate-600">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      </div>     
      <section className="bg-white px-6 py-24 lg:px-16">
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="mb-14 font-serif text-4xl text-slate-800 md:text-5xl">Our Philosophy</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Creativity', desc: 'Designing immersive atmospheres that move audiences and elevate every brand story.' },
              { title: 'Precision', desc: 'Deliberate planning and flawless technical direction for seamless, memorable activations.' },
              { title: 'Excellence', desc: 'A relentless commitment to distinctive experiences and elevated hospitality.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: index * 0.15 }}
                className="rounded-[2rem] border border-sky-900/10 bg-sky-50 p-8"
              >
                <div className="mb-6 h-1 w-16 rounded-full bg-sky-700" />
                <h3 className="mb-4 font-serif text-2xl text-slate-800">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
