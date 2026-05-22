import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Maximize2, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const GALLERY_IMAGES = [
  // Custom Stone Deck sequence
  {
    url: "/before-after/Pics/IMG_2930.jpg",
    category: "Construction and remodel",
    title: "Custom Stone Deck I"
  },
  {
    url: "/before-after/Pics/IMG_2928.jpg",
    category: "Hardscaping",
    title: "Custom Stone Deck II"
  },
  {
    url: "/before-after/Pics/hardscape.jpg",
    category: "Hardscaping",
    title: "Custom Raised Bed Patio"
  },

  // Precision Transformation sequence
  {
    url: "/before-after/Pics/IMG_2924.jpg",
    category: "Hardscaping",
    title: "Site Preparation Base"
  },
  {
    url: "/before-after/Pics/IMG_2926.jpg",
    category: "Hardscaping",
    title: "Finished Patio Masonry"
  },

  // Land Clearing Projects sequence
  {
    url: "/before-after/Pics/rl3.jpg",
    category: "Land Clearing/ Excavation",
    title: "Land Clearing Projects I"
  },
  {
    url: "/before-after/Pics/rl4.jpg",
    category: "Landscaping",
    title: "Land Clearing Projects II"
  },

  // Residential Landscaping sequence
  {
    url: "/before-after/Pics/rl1.jpg",
    category: "Landscaping",
    title: "Residential Landscaping I"
  },
  {
    url: "/before-after/Pics/rl2.jpg",
    category: "Landscaping",
    title: "Residential Landscaping II"
  },
  {
    url: "/before-after/Pics/IMG_2925.jpg",
    category: "Hardscaping",
    title: "Residential Landscaping III"
  },
  {
    url: "/before-after/Pics/rl4.jpg",
    category: "Landscaping",
    title: "Residential Landscaping IV"
  },
  {
    url: "/before-after/Pics/rl5.jpg",
    category: "Landscaping",
    title: "Residential Landscaping V"
  },
  {
    url: "/before-after/Pics/rl6.jpg",
    category: "Landscaping",
    title: "Residential Landscaping VI"
  },
  {
    url: "/before-after/Pics/rl9.jpg",
    category: "Landscaping",
    title: "Residential Landscaping IX"
  },

  // Other individual projects
  {
    url: "/before-after/Pics/IMG_2927.jpg",
    category: "Hardscaping",
    title: "Paver Patio & Walkway"
  },
  {
    url: "/before-after/Pics/IMG_2933.jpg",
    category: "Landscaping",
    title: "Walkway Installation"
  },
  {
    url: "/before-after/Pics/IMG_1945.jpg",
    category: "Landscaping",
    title: "Land Clearing"
  },
  {
    url: "/before-after/Pics/IMG_1960.jpg",
    category: "Land Clearing/ Excavation",
    title: "Dirt Work"
  },
  {
    url: "/before-after/Pics/IMG_1963.jpg",
    category: "Land Clearing/ Excavation",
    title: "Stump & Tree Removal"
  },
  {
    url: "/before-after/Pics/IMG_2885.jpg",
    category: "Hardscaping",
    title: "Raised Paver Deck"
  },
  {
    url: "/before-after/Pics/rl5.jpg",
    category: "Hardscaping",
    title: "Flagstone Patio Oak Ridge"
  },
  {
    url: "/before-after/Pics/rl6.jpg",
    category: "Land Clearing/ Excavation",
    title: "Walkway & Pavers"
  },
  {
    url: "/before-after/Pics/rl7.jpg",
    category: "Land Clearing/ Excavation",
    title: "Residential Landscaping/ Pavers"
  },
  {
    url: "/before-after/Pics/deckimage.jpg",
    category: "Hardscaping",
    title: "Custom Deck Install"
  },
  {
    url: "/before-after/Pics/rdeck2.jpg",
    category: "Hardscaping",
    title: "Hardscape Deck Design"
  },
  {
    url: "/before-after/Pics/deckimage.jpg",
    category: "Hardscaping",
    title: "Exterior Living Space"
  },
  {
    url: "/before-after/Pics/rpool.jpg",
    category: "Land Clearing/ Excavation",
    title: "Pool Site Excavation"
  },
  {
    url: "/before-after/Pics/rl3.jpg",
    category: "Landscaping",
    title: "Commercial Landscaping"
  },
  {
    url: "/before-after/Pics/rl7.jpg",
    category: "Landscaping",
    title: "Pavers Integration"
  },
  {
    url: "/before-after/Pics/rl8.jpg",
    category: "Landscaping",
    title: "Retaining Walls"
  },
  {
    url: "/before-after/Pics/IMG_2251.jpg",
    category: "Landscaping",
    title: "Grading & Landscaping Case Study"
  },
  {
    url: "/before-after/Pics/IMG_2251.jpg",
    category: "Hardscaping",
    title: "Hardscaping Block Detail"
  },
  {
    url: "/before-after/Pics/IMG_2924.jpg",
    category: "Hardscaping",
    title: "Project Transformation Base"
  },
  {
    url: "/before-after/Pics/IMG_2926.jpg",
    category: "Hardscaping",
    title: "Outdoor Living Space Masonry"
  },
  {
    url: "/before-after/Pics/landclearing_fire_photo.jpg",
    category: "Land Clearing/ Excavation",
    title: "Commercial Site Clearing & Prep"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24">
      {/* Background Accent */}
      <div className="fixed inset-0 industrial-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.2em]"
            >
              <ArrowLeft size={14} /> Back To Site
            </Link>
            <h1 className="text-6xl md:text-8xl font-display font-black italic tracking-tighter leading-none">
              FIELD <br />
              <span className="text-brand-orange">RECORD.</span>
            </h1>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode='popLayout'>
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                layout
                key={img.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/5] bg-white/5 border border-white/5 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest">{img.category}</span>
                    <h3 className="text-white font-display font-black italic text-lg leading-tight uppercase">{img.title}</h3>
                    <div className="flex items-center gap-2 text-brand-silver/60 text-[10px] font-bold uppercase tracking-tighter pt-2">
                      <Maximize2 size={12} /> Click To Expand
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-auto max-h-[90vh] bg-white/5 flex items-center justify-center overflow-hidden"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-4 bg-brand-orange text-brand-black rounded-full hover:bg-white transition-all z-10"
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedImage} 
                className="max-w-full max-h-full object-contain" 
                alt="Fullscreen"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
