import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ImageItem = {
  src: string;
  alt: string;
};

type HorizontalImageScrollerProps = {
  images: ImageItem[];
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function HorizontalImageScroller({
  images,
  title,
  subtitle,
  className = ''
}: HorizontalImageScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate images for infinite loop effect
  const duplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 2; // pixels per frame
    const scrollInterval = 20; // milliseconds between frames

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;

      const firstDuplicateThreshold = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= firstDuplicateThreshold) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = window.setInterval(autoScroll, scrollInterval);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`space-y-6 ${className}`}
    >
      {(title || subtitle) && (
        <div>
          {title && <h3 className="font-serif text-3xl text-slate-800 md:text-4xl">{title}</h3>}
          {subtitle && <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>}
        </div>
      )}

      <div className="relative overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 1 }}
              className="flex-shrink-0 w-[72vw] max-w-[420px] h-[420px] overflow-hidden rounded-[1.6rem] border border-sky-900/10 bg-sky-50 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:w-[55vw] md:max-w-[520px] md:h-[520px]"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
