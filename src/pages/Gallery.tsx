import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GALLERY_IMAGES = [
  // New Transformation Project
  {
    url: "/images/bf1.jpg",
    category: "Hardscaping",
    title: "Project Transformation - Before"
  },
  {
    url: "/images/aft1.jpg",
    category: "Hardscaping",
    title: "Project Transformation - After"
  },

  // Custom Stone Deck sequence
  {
    url: "/images/IMG_2930.jpg",
    category: "Construction and remodel",
    title: "Custom Stone Deck I"
  },
  {
    url: "/images/IMG_2928.jpg",
    category: "Hardscaping",
    title: "Custom Stone Deck II"
  },
  {
    url: "/images/hardscape.jpg",
    category: "Hardscaping",
    title: "Pavers Integration"
  },

  // Precision Transformation sequence
  {
    url: "/images/IMG_2924.jpg",
    category: "Hardscaping",
    title: "Residential Landscaping"
  },
  {
    url: "/images/IMG_2926.jpg",
    category: "Hardscaping",
    title: "Finished Walkway/Pavers"
  },



  // Residential Landscaping sequence
  {
    url: "/images/rl1.jpg",
    category: "Landscaping",
    title: "Residential Landscaping I"
  },
  {
    url: "/images/rl2.jpg",
    category: "Landscaping",
    title: "Residential Landscaping II"
  },
  {
    url: "/images/IMG_2925.jpg",
    category: "Hardscaping",
    title: "Residential Landscaping III"
  },
  {
    url: "/images/rl4.jpg",
    category: "Landscaping",
    title: "Residential Landscaping IV"
  },
  {
    url: "/images/rl5.jpg",
    category: "Landscaping",
    title: "Residential Landscaping V"
  },
  {
    url: "/images/rl6.jpg",
    category: "Landscaping",
    title: "Residential Landscaping VI"
  },
  {
    url: "/images/rl9.jpg",
    category: "Landscaping",
    title: "Residential Landscaping IX"
  },

  // Other individual projects
  {
    url: "/images/IMG_2927.jpg",
    category: "Hardscaping",
    title: "Paver Patio & Walkway"
  },
  {
    url: "/images/IMG_2933.jpg",
    category: "Landscaping",
    title: "Walkway Installation"
  },
  {
    url: "/images/IMG_1945.jpg",
    category: "Landscaping",
    title: "Land Clearing"
  },
  {
    url: "/images/IMG_1960.jpg",
    category: "Land Clearing/ Excavation",
    title: "Dirt Work"
  },
  {
    url: "/images/IMG_1963.jpg",
    category: "Land Clearing/ Excavation",
    title: "Stump & Tree Removal"
  },
  {
    url: "/images/IMG_2885.jpg",
    category: "Hardscaping",
    title: "Raised Paver Deck"
  },


  {
    url: "/images/rl7.jpg",
    category: "Land Clearing/ Excavation",
    title: "Residential Landscaping/ Pavers"
  },
  {
    url: "/images/deckimage.jpg",
    category: "Hardscaping",
    title: "Custom Deck Install"
  },
  {
    url: "/images/rdeck2.jpg",
    category: "Hardscaping",
    title: "Hardscape Deck Design"
  },

  {
    url: "/images/rpool.jpg",
    category: "Land Clearing/ Excavation",
    title: "Pool Site Excavation"
  },
  {
    url: "/images/rl3.jpg",
    category: "Landscaping",
    title: "Commercial Landscaping"
  },



  {
    url: "/images/landclearing_fire_photo.jpg",
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
