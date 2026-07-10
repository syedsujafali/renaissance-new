import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const videoSrc = encodeURI('/images/final.mp4');

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative -mt-28 min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />


      <div className="absolute right-6 bottom-6 z-50">
        <button
          type="button"
          onClick={() => {
            setIsMuted((current) => {
              const next = !current;
              if (videoRef.current && next === false) {
                videoRef.current.muted = false;
                videoRef.current.play().catch(() => {
                  /* ignore autoplay block */
                });
              }
              return next;
            });
          }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white shadow-lg shadow-black/30 transition hover:bg-black/80"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19 5a9 9 0 0 1 0 14" />
              <path d="M15 9a5 5 0 0 1 0 6" />
            </svg>
          )}
        </button>
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen max-w-full flex-col justify-center px-6 py-24 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mx-auto max-w-full space-y-8 text-center"
        >
          
          
          
        </motion.div>

        
      </div>

      
    </section>
  );
}
