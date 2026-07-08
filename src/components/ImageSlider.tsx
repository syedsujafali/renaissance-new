import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type ImageItem = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  images: ImageItem[];
  className?: string;
  imageClassName?: string;
  showDots?: boolean;
  interval?: number;
  autoPlay?: boolean;
};

let sharedTimer: number | null = null;
const subscribers = new Set<() => void>();

function ensureSharedTimer(intervalMs: number) {
  if (sharedTimer !== null) return;

  sharedTimer = window.setInterval(() => {
    subscribers.forEach((listener) => listener());
  }, intervalMs);
}

export default function ImageSlider({
  images,
  className = '',
  imageClassName = '',
  showDots = true,
  interval = 1500,
  autoPlay = false,
}: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    ensureSharedTimer(interval);

    const tick = () => {
      setActiveIndex((current) => (current + 1) % images.length);
    };

    subscribers.add(tick);

    return () => {
      subscribers.delete(tick);
      if (subscribers.size === 0 && sharedTimer !== null) {
        window.clearInterval(sharedTimer);
        sharedTimer = null;
      }
    };
  }, [autoPlay, images, interval]);

  if (!images.length) return null;

  const currentImage = images[activeIndex];

  return (
    <div className={`relative overflow-hidden rounded-[1.8rem] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </AnimatePresence>

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/55 hover:bg-white/90'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
