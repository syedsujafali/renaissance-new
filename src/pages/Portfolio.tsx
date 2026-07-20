import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { allPageImages } from '../utils/imageLibrary';

type PortfolioItem = {
  src: string;
  images: string[];
  alt: string;
  category: string;
  title: string;
  description: string;
  year: string;
  location: string;
  cta: string;
};

const portfolio: PortfolioItem[] = [
  {
    src: allPageImages[0].src,
    images: [allPageImages[0].src, allPageImages[2].src, allPageImages[5].src],
    alt: 'Grand Ballroom',
    category: 'Gala',
    title: 'Grand Ballroom Reveal',
    description: 'A cinematic arrival shaped by light, texture and atmosphere for a signature evening of arrival.',
    year: '2024',
    location: 'Dubai',
    cta: 'View Project →'
  },
  {
    src: allPageImages[1].src,
    images: [allPageImages[1].src, allPageImages[3].src, allPageImages[8].src],
    alt: 'VIP Event',
    category: 'Intimate',
    title: 'Private Circle Experience',
    description: 'Quiet luxury delivered through hospitality, sculptural styling and deeply considered pacing.',
    year: '2023',
    location: 'Abu Dhabi',
    cta: 'Discover More →'
  },
  {
    src: allPageImages[3].src,
    images: [allPageImages[3].src, allPageImages[4].src, allPageImages[6].src],
    alt: 'Corporate Event Setup',
    category: 'Corporate',
    title: 'Executive Gatherings',
    description: 'Purposeful, polished spaces for high-stakes connection, designed with precision and calm.',
    year: '2024',
    location: 'London',
    cta: 'Explore Experience →'
  },
  {
    src: allPageImages[4].src,
    images: [allPageImages[4].src, allPageImages[7].src, allPageImages[9].src],
    alt: 'Elegant Dining',
    category: 'Design',
    title: 'Dining in Motion',
    description: 'Soft illumination and sculpted styling for an intimate table designed to feel effortless.',
    year: '2022',
    location: 'Paris',
    cta: 'Discover More →'
  },
  {
    src: allPageImages[6].src,
    images: [allPageImages[6].src, allPageImages[8].src, allPageImages[11].src],
    alt: 'Production Setup',
    category: 'Production',
    title: 'Stagecraft at Scale',
    description: 'Precision-led production for cinematic storytelling, built to feel elegant from every angle.',
    year: '2025',
    location: 'Doha',
    cta: 'View Project →'
  },
  {
    src: allPageImages[7].src,
    images: [allPageImages[7].src, allPageImages[10].src, allPageImages[12].src],
    alt: 'Executive Table',
    category: 'Corporate',
    title: 'Boardroom to Ballroom',
    description: 'A seamless bridge from strategy to celebration, curated with refined momentum and clarity.',
    year: '2024',
    location: 'Milan',
    cta: 'Explore Experience →'
  }
];

function PortfolioStory({ item, index, isReverse }: { item: PortfolioItem; index: number; isReverse: boolean }) {
  const ref = useRef<HTMLElement | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % item.images.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [item.images.length]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white p-4 shadow-[0_22px_70px_rgba(17,24,39,0.04)] sm:p-6 lg:flex-row lg:items-stretch lg:gap-0 lg:p-0 ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      <motion.figure
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[60vh] min-h-[420px] overflow-hidden rounded-[1.45rem] bg-stone-200 lg:w-[56%] lg:rounded-none"
      >
        <motion.div
          style={{ y, scale }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={item.images[activeImage]}
              src={item.images[activeImage]}
              alt={item.alt}
              loading="eager"
              fetchPriority="high"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover object-center"
            />
          </AnimatePresence>
          {/* gradient overlay removed per design: keep image unobstructed */}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-5 text-[10px] uppercase tracking-[0.35em] text-white/90 sm:p-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">{item.category}</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">{item.location}</span>
        </div>

        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 px-4 sm:bottom-6">
          {item.images.map((_, imageIndex) => (
            <button
              key={`${item.title}-${imageIndex}`}
              type="button"
              aria-label={`Show image ${imageIndex + 1}`}
              onClick={() => setActiveImage(imageIndex)}
              className={`h-2.5 w-2.5 rounded-full border border-white/40 transition ${activeImage === imageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2 sm:right-6">
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setActiveImage((current) => (current - 1 + item.images.length) % item.images.length)}
            className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setActiveImage((current) => (current + 1) % item.images.length)}
            className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            →
          </button>
        </div>
      </motion.figure>

      <div className="relative flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-16 xl:px-16">
        <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#d8c39b]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-8 right-6 h-16 w-16 rounded-full bg-[#8b7a5e]/10 blur-2xl" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 + index * 0.06 }}
          className="mb-4 text-[11px] uppercase tracking-[0.35em] text-stone-500"
        >
          Featured Chapter
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.25 + index * 0.06 }}
          className="max-w-xl font-serif text-3xl leading-[1.04] text-stone-900 sm:text-4xl lg:text-[2.6rem]"
        >
          {item.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.31 + index * 0.06 }}
          className="mt-5 max-w-lg text-base leading-8 text-stone-600 sm:text-lg"
        >
          {item.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.37 + index * 0.06 }}
          className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-stone-500"
        >
          <span>{item.year}</span>
          <span className="h-1 w-1 rounded-full bg-stone-300" />
          <span>{item.location}</span>
        </motion.div>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.43 + index * 0.06 }}
          whileHover={{ x: 3, scale: 1.01, boxShadow: '0 18px 45px rgba(17, 24, 39, 0.08)' }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-stone-900/10 bg-white px-5 py-3 text-sm font-medium uppercase tracking-[0.25em] text-stone-800 shadow-[0_12px_40px_rgba(17,24,39,0.06)]"
        >
          {item.cta}
          <span className="text-base">→</span>
        </motion.a>
      </div>
    </motion.section>
  );
}

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white pt-28 text-stone-800 sm:pt-32"
    >
      <div className="mx-auto max-w-full px-6 pb-24 sm:px-8 lg:px-12">
        <div className="relative mb-16">
          {/* Header text */}
          <header className="relative mx-auto max-w-5xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto mb-4 max-w-2xl text-[11px] uppercase tracking-[0.35em] text-stone-500"
            >
              Selected Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="mb-4 font-serif text-4xl leading-[1.05] text-stone-900 sm:text-5xl lg:text-6xl"
            >
              Editorial storytelling for experiences that feel cinematic, calm and unforgettable.
            </motion.h1>
          </header>
        </div>

        <div className="space-y-24 sm:space-y-28 lg:space-y-36">
          {portfolio.map((item, index) => (
            <PortfolioStory key={item.title} item={item} index={index} isReverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
