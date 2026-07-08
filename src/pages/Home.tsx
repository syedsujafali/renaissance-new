import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allPageImages } from '../utils/imageLibrary';
import Hero from '../components/Hero';
import HorizontalImageScroller from '../components/HorizontalImageScroller';

const featuredHighlights = [
  { title: 'Global Brand Activations', text: 'From launches to national campaigns, every experience is built to feel elevated and unmistakably on-brand.' },
  { title: 'Executive Gatherings', text: 'Thoughtful production, refined hospitality, and a calm sense of control from first impression to final toast.' },
  { title: 'Luxury Hospitality', text: 'Detail-driven planning, exceptional service, and beautifully orchestrated guest journeys.' },
  { title: 'Large-Scale Production', text: 'Cinematic storytelling and technical precision for events that reach thousands with impact.' }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f7f9fc] text-slate-800"
    >
      <Hero />

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-full space-y-10">
          <div className="rounded-[2rem] border border-sky-900/10 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-700">Signature Work</p>
              <h2 className="font-serif text-4xl leading-tight text-slate-800 md:text-5xl">We create refined events that feel effortless, elevated, and deeply memorable.</h2>
              <p className="max-w-2xl leading-relaxed text-slate-600">From intimate executive gatherings to large-scale productions, our approach blends creativity, precision, and hospitality into unforgettable guest experiences.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="inline-flex items-center justify-center rounded-full border border-sky-700 bg-sky-700 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-sky-800">View Portfolio</Link>
                <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-sky-900/10 bg-sky-50 px-8 py-3 text-sm uppercase tracking-[0.25em] text-sky-700 transition hover:bg-sky-100">Our Story</Link>
              </div>
            </div>
          </div>
          
          <HorizontalImageScroller
            images={allPageImages.slice(0, 10)}
            title="Recent Work"
            subtitle="A collection of our finest event experiences."
          />
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-700">Featured Services</p>
            <h3 className="mb-4 font-serif text-3xl text-slate-800 md:text-4xl">Crafted experiences rooted in beauty, clarity, and calm confidence.</h3>
            <p className="mx-auto max-w-2xl text-slate-600">A refined selection of design direction, technical production, hospitality, and guest experience planning tailored for prestige events.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredHighlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="rounded-[2rem] border border-sky-900/10 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <h4 className="mb-3 text-xl font-semibold text-slate-800">{item.title}</h4>
                <p className="leading-relaxed text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-sky-900/10 bg-sky-50 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-sky-700">Client Experience</p>
              <h3 className="font-serif text-3xl text-slate-800">A thoughtful process from first conversation to final reveal.</h3>
            </div>
            <button className="rounded-full border border-sky-700/20 bg-white px-6 py-3 text-sm uppercase tracking-[0.25em] text-sky-700 transition hover:bg-sky-100">Cookie Settings</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
