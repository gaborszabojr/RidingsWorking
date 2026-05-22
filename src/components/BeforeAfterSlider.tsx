import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  beforeImage: string;
  afterImage: string;
  title: string;
}

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  slides?: Slide[];
}

export function BeforeAfterSlider({ beforeImage, afterImage, slides: propSlides }: BeforeAfterSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback to single slide if no slides list is provided
  const activeSlides: Slide[] = propSlides || (beforeImage && afterImage ? [{
    beforeImage,
    afterImage,
    title: "Transformation Case Study"
  }] : []);

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.offsetWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev + 1) % activeSlides.length);
    setSliderPosition(50); // reset position for new slide
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlideIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
    setSliderPosition(50); // reset position for new slide
  };

  if (activeSlides.length === 0) return null;

  const currentSlide = activeSlides[currentSlideIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* Slide Title Indicator / Navigation info */}
      {activeSlides.length > 1 && (
        <div className="flex justify-between items-center bg-brand-black border border-white/10 p-3 px-4 rounded-sm shadow-md">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-brand-orange tracking-widest leading-none">PROJECT {currentSlideIndex + 1} OF {activeSlides.length}</span>
            <h4 className="text-sm font-display font-black italic tracking-wide text-white mt-1 uppercase leading-none">{currentSlide.title}</h4>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-brand-orange hover:text-brand-black flex items-center justify-center transition-all cursor-pointer text-white"
              aria-label="Previous Project"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-brand-orange hover:text-brand-black flex items-center justify-center transition-all cursor-pointer text-white"
              aria-label="Next Project"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main Slider Window */}
      <div 
        className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden border-2 border-brand-orange shadow-2xl group cursor-ew-resize" 
        ref={containerRef}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* After Image (Full background) */}
            <img
              src={currentSlide.afterImage}
              alt={`${currentSlide.title} - After`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 h-full overflow-hidden z-10 border-r-2 border-white/50"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentSlide.beforeImage}
                alt={`${currentSlide.title} - Before`}
                className="absolute inset-y-0 left-0 h-full object-cover object-center max-w-none transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ width: containerWidth || '100vw' }}
                referrerPolicy="no-referrer"
              />
              {/* Decorative divider gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Comparison Slider Handle */}
        <div
          className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-brand-orange rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-brand-orange/40 rounded-full"></div>
              <div className="w-1 h-5 bg-brand-orange rounded-full"></div>
              <div className="w-1 h-3 bg-brand-orange/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Input Slider (Hidden Overlay) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />

        {/* Labels */}
        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
          <span className="bg-brand-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-white/10 select-none">
            Before
          </span>
        </div>
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          <span className="bg-brand-orange/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg select-none">
            After
          </span>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      {activeSlides.length > 1 && (
        <div className="flex justify-center gap-2 mt-1">
          {activeSlides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlideIndex(i);
                setSliderPosition(50);
              }}
              className={`w-3 h-3 rounded-full border border-white/10 transition-all cursor-pointer ${i === currentSlideIndex ? 'bg-brand-orange w-6' : 'bg-white/10 hover:bg-white/30'}`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
