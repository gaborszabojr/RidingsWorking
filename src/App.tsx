import { useState, useEffect } from 'react';
import { 
  Truck, 
  Construction, 
  Settings as Gear, 
  Hammer, 
  ArrowRight, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  Menu, 
  X,
  Star,
  Droplets,
  Trees,
  CloudSnow,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AIChatWidget } from './components/AIChatWidget';
import GalleryPage from './pages/Gallery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const SERVICES = [
  {
    title: "Land Clearing/ Excavation",
    description: "Precision site preparation, trenching, complex earthmoving, efficient vegetation removal, tree & stump removal, and professional drainage solutions.",
    icon: <Truck className="w-6 h-6" />,
    image: "/Jpg images Fixed/landclearing_fire_photo.jpg"
  },
  {
    title: "Landscaping",
    description: "Professional design and estate transformations. We handle everything from planting to Rock/Mulch/Soil Delivery.",
    icon: <Hammer className="w-6 h-6" />,
    image: "/Jpg images Fixed/rl1.jpg"
  },
  {
    title: "Hardscaping",
    description: "Expert installation of Patios, Paver patios, Flagstone patios, Pavers, Retaining walls, and custom stone features.",
    icon: <Gear className="w-6 h-6" />,
    image: "/Jpg images Fixed/rl8.jpg"
  },
  {
    title: "Construction and remodel",
    description: "High-quality structural builds, additions, remodels, custom decks, porches, screened-in areas, and fully integrated custom pools.",
    icon: <Construction className="w-6 h-6" />,
    image: "/Jpg images Fixed/rpool.jpg"
  },
  {
    title: "Other Services",
    description: "Specialized solutions including Pools, Decks, Porches, Remodels, Additions, Screened-in areas, and Snow clearing.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "/Jpg images Fixed/rl7.jpg"
  }
];

const PORTFOLIO = [
  "/Jpg images Fixed/rl6.jpg",
  "/Jpg images Fixed/rpool.jpg",
  "/Jpg images Fixed/IMG_2933.jpg",
  "/Jpg images Fixed/rl1.jpg",
  "/Jpg images Fixed/IMG_2930.jpg",
  "/Jpg images Fixed/deckimage.jpg",
];

const TESTIMONIALS = [
  {
    name: "Gabby Golder",
    role: "Verified Client",
    content: "Chase does great work! Highly recommend him for any of your paver or retaining wall needs! Give him a call!",
    stars: 5,
    location: "Recent Review"
  },
  {
    name: "Vicky Montgomery",
    role: "Verified Client",
    content: "Chase and his staff were very friendly and polite. My questions and suggestions during the project were handled professionally. I appreciated Chase moving up the project timeline when possible. The trim work around the flowerbeds looks great and makes my property look prettier.",
    stars: 4,
    location: "Recent Review"
  },
  {
    name: "Kelly Stone",
    role: "Verified Client",
    content: "Chase and his crew have been taking care of my yard for years. They do a fantastic job. I would recommend them to anyone.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Dustin Franklin",
    role: "Verified Client",
    content: "Great company with a outstanding owner that does amazing work",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Margaret Trentham",
    role: "Verified Client",
    content: "Ridings Landscaping has done mowing and landscaping jobs at my home for several years. The work has always been done in a professional and timely manner. Chase is easy to work with and always wants the job to be done right. I would definitely recommend Ridings Landscaping.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Amy Davis",
    role: "Local Guide",
    content: "The Ridings group has taken amazing care of all of my properties over the years! Even when I’ve called last minute to clean up a property for a client, they showed up and did amazing work for an incredible price! I recommend them to all of my friends and clients!",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Macy Hatterfield",
    role: "Verified Client",
    content: "Chase has always been great to me and my husband and couldn’t think of anyone else I’d rather have come do my landscape and any other needs. Very quick and efficient crew. Highly recommend.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Chelsea Mccarter",
    role: "Verified Client",
    content: "Absolutely pleased with chases service. He is a great young man and very smart. I have been using chase for 2 years now for mowing and other landscape work. He is building me a deck and a paver patio for my backyard kitchen. Can’t wait !",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Isaac Carpenter",
    role: "Verified Client",
    content: "Chase and his crew are very great guys extremely friendly and very knowledgeable. They built a big natural block retaining wall and a deck for me and I couldn’t be happier with the outcome of their work. 100% recommend and will be using chase and his guys in the future.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Julie Reynolds",
    role: "Verified Client",
    content: "Great job. They came out quickly, adjusted to my needs and did a great job.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "John Hehmeyer",
    role: "Verified Client",
    content: "Fine work, 100 percent recommend",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Zeb Golder",
    role: "Verified Client",
    content: "Excellent Company. Great Leadership. Polite and Professional Craftsmen! Chase and crew did the dirt work and laid this paver system for our screened porch.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Richard Caprioli",
    role: "Verified Client",
    content: "Excellent service. The work was done on time and in a professional manner. Most importantly, Chase listened to what I wanted and did what I wanted. I would absolutely use this company again and I give it my highest rating.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Jeff Lingerfelt",
    role: "Verified Client",
    content: "Ridings put in a new culvert for us and did an outstanding job.",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Ryan Gossett",
    role: "Verified Client",
    content: "They are the best in town",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Cheryl D'Ambrosio",
    role: "Verified Client",
    content: "Ridings Landscape listen to their clients and deliver excellent service, exactly what you want with fabulous results! They are competent and timely in the work. I highly recommend!",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "Lynn Gentry",
    role: "Verified Client",
    content: "Met with Chase to describe my landscape problems. He went over everything with me & gave me an estimate & approximate time job would begin. His team is knowledgeable and hard working. I’m satisfied with the way things turned out. Beautiful job and a fair price!",
    stars: 5,
    location: "Maryville Area"
  },
  {
    name: "David Hammontree",
    role: "Local Guide",
    content: "Did great job taking care of my yard as I traveled for work. Highly recommend!",
    stars: 5,
    location: "Maryville Area"
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <AIChatWidget />
    </BrowserRouter>
  );
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen industrial-grid">
      {/* Header Group */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Navigation */}
        <nav className={`transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-brand-black/40 backdrop-blur-sm py-6'} border-b border-white/5`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img 
                src="/before-after/Pics/ridingslandscapinglogo.jpg" 
                alt="Ridings Landscaping & Excavation Logo" 
                className="h-12 w-auto md:h-16"
                referrerPolicy="no-referrer"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-display font-black italic tracking-tighter leading-none text-chrome">RIDINGS</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] leading-none mt-1 opacity-80 text-white">Landscaping & Excavation LLC</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Gallery', 'Testimonies', 'Contact'].map((item) => (
                item === 'Gallery' ? (
                  <Link 
                    key={item} 
                    to="/gallery" 
                    className="text-white text-xs uppercase tracking-widest font-black hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </Link>
                ) : item === 'Testimonies' ? (
                  <Link 
                    key={item} 
                    to="/testimonials" 
                    className="text-white text-xs uppercase tracking-widest font-black hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white text-xs uppercase tracking-widest font-black hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </a>
                )
              ))}
              <a 
                href="https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                id="quote-btn"
              >
                Get Free Estimate
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-xl z-[100] md:hidden text-white flex flex-col overflow-hidden border-b border-white/10 shadow-2xl"
              >
                {/* Navigation Links */}
                <div className="px-6 py-10 flex flex-col gap-6">
                  {['Services', 'Gallery', 'Testimonies', 'Contact'].map((item) => (
                    item === 'Gallery' ? (
                      <Link 
                        key={item} 
                        to="/gallery" 
                        className="group flex items-end justify-between border-b border-white/5 pb-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-3xl font-display font-black italic tracking-tight">{item}</span>
                        <ArrowRight size={20} className="text-brand-orange opacity-50 transition-all" />
                      </Link>
                    ) : item === 'Testimonies' ? (
                      <Link 
                        key={item} 
                        to="/testimonials" 
                        className="group flex items-end justify-between border-b border-white/5 pb-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-3xl font-display font-black italic tracking-tight">{item}</span>
                        <ArrowRight size={20} className="text-brand-orange opacity-50 transition-all" />
                      </Link>
                    ) : (
                      <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="group flex items-end justify-between border-b border-white/5 pb-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-3xl font-display font-black italic tracking-tight">{item}</span>
                        <ArrowRight size={20} className="text-brand-orange opacity-50 transition-all" />
                      </a>
                    )
                  ))}
                  
                  <a 
                    href="https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-4 text-lg mt-2 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Free Estimate
                  </a>
                </div>

                {/* Footer of Mobile Menu */}
                <div className="p-6 bg-white/5 space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <a href="tel:8653904963" className="flex items-center gap-4 text-brand-silver">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                        <Phone size={18} />
                      </div>
                      <span className="font-black italic tracking-tight">(865) 390-4963</span>
                    </a>
                    <a href="mailto:cridings05@gmail.com" className="flex items-center gap-4 text-brand-silver">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                        <Mail size={18} />
                      </div>
                      <span className="font-black italic tracking-tight">cridings05@gmail.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?auto=format&fit=crop&q=80&w=2000" 
            alt="Excavation Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-block bg-brand-red px-3 py-1 text-[10px] font-black uppercase tracking-widest skew-x-[-12deg]">
              <span className="block skew-x-[12deg]">Limited Time Offer — Get A Free Estimate Today</span>
            </div>
            <h1 className="text-6xl md:text-9xl leading-[0.85]">
              WE MOVE THE <br />
              <span className="text-brand-orange">EARTH.</span>
            </h1>
            <p className="text-xl text-brand-silver font-medium max-w-xl border-l-4 border-brand-orange pl-6 leading-relaxed">
              Industrial-grade excavation and premium landscaping solutions based in Maryville, TN. 
              Proudly serving Knoxville, Maryville, Walland, Townsend, and Monroe County areas. 
              Built on power, finished with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 text-center sm:text-left">
              <a 
                href="https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto text-center"
              >
                Get Free Estimate <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Licensed & Insured', val: '100%' },
            { label: 'Projects Completed', val: '2,500+' },
            { label: 'Years Experience', val: '26' },
            { label: 'Operator Safety', val: 'RANK A' }
          ].map((stat, i) => (
            <div key={i} className="text-brand-black border-l-2 border-brand-black/20 pl-4">
              <p className="text-2xl font-display font-black italic leading-none">{stat.val}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-brand-red text-lg mb-2">PRECISION SERVICES.</h2>
            <h2 className="text-5xl md:text-7xl">POWER & PERFORMANCE.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/10 overflow-hidden border border-brand-black/10">
            {SERVICES.map((service, i) => {
              const isOtherServices = service.title === 'Other Services';
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`bg-white p-12 group hover:bg-brand-black transition-colors duration-500 flex flex-col justify-between ${isOtherServices ? 'md:col-span-2' : ''}`}
                >
                  {isOtherServices ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex justify-between items-start mb-8">
                            <div className="p-4 bg-brand-orange text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors">
                              {service.icon}
                            </div>
                            <span className="text-4xl font-display font-black italic opacity-10 group-hover:opacity-20 group-hover:text-white/20">0{i+1}</span>
                          </div>
                          <h3 className="text-3xl mb-4 group-hover:text-white">{service.title}</h3>
                          <p className="text-brand-metal group-hover:text-brand-silver/60 mb-0 max-w-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="relative h-64 overflow-hidden w-full">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full justify-between w-full">
                      <div className="flex-1 flex flex-col mb-8">
                        <div className="flex justify-between items-start mb-8">
                          <div className="p-4 bg-brand-orange text-brand-black group-hover:bg-brand-red group-hover:text-white transition-colors">
                            {service.icon}
                          </div>
                          <span className="text-4xl font-display font-black italic opacity-10 group-hover:opacity-20 group-hover:text-white/20">0{i+1}</span>
                        </div>
                        <h3 className="text-3xl mb-4 group-hover:text-white">{service.title}</h3>
                        <p className="text-brand-metal group-hover:text-brand-silver/60 max-w-sm flex-1">
                          {service.description}
                        </p>
                      </div>
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section id="work" className="bg-brand-black py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Slider Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-brand-orange text-brand-black px-4 py-1 text-xs font-black uppercase tracking-widest italic skew-x-[-6deg]">
                <span className="block skew-x-[6deg]">TRANSFORMATION CASE STUDY</span>
              </div>
              <h2 className="text-5xl md:text-7xl leading-none">THE <br />EVOLUTION.</h2>
              <p className="text-brand-silver/60 leading-relaxed italic max-w-md">
                Slide to compare the precision work. We turn raw terrain into 
                engineered excellence. Every square foot is managed for drainage, stability, and aesthetic.
              </p>
              <a 
                href="https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
              >
                Book Site Evaluation
              </a>
            </div>
            <div className="relative group">
              <BeforeAfterSlider 
                slides={[
                  {
                    beforeImage: "/Jpg images Fixed/IMG_2924.jpg",
                    afterImage: "/Jpg images Fixed/IMG_2926.jpg",
                    title: "Hardscaping & Patio Transformation"
                  },
                  {
                    beforeImage: "/Jpg images Fixed/IMG_1945.jpg",
                    afterImage: "/Jpg images Fixed/IMG_1963.jpg",
                    title: "Land Clearing & Stump/Tree Removal"
                  }
                ]}
              />
            </div>
          </div>

          {/* Grid Section */}
          <div className="flex flex-col lg:flex-row gap-16 items-center border-t border-white/5 pt-24">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl mb-8 leading-none italic">FIELD <br />GALLERY.</h2>
              <p className="text-brand-silver/60 mb-10 leading-relaxed italic text-sm">
                Heavy equipment meet high design. Explore our portfolio of 
                transformed landscapes and solid site foundations across the region.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-2">
              {PORTFOLIO.map((img, i) => (
                <Link to="/gallery" key={i} className="aspect-square transition-all duration-500 overflow-hidden cursor-crosshair group">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Project" referrerPolicy="no-referrer" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section id="testimonies" className="section-padding bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-silver/30 -skew-x-12 translate-x-1/2 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-brand-red text-lg mb-2">FIELD REPORTS.</h2>
            <h2 className="text-5xl md:text-7xl">TRUSTED ON <br />EVERY TERRAIN.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.filter(t => {
              const norm = t.name.toLowerCase();
              return (
                norm.includes("zeb golder") || 
                norm.includes("lynn gentry") || 
                norm.includes("dustin") || 
                norm.includes("franklin") || 
                norm.includes("sarol") || 
                norm.includes("fraklin") ||
                norm.includes("cheryl") ||
                norm.includes("cherlyn")
              );
            }).map((t, i) => (
              <Link 
                to="/testimonials"
                key={i}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-black p-8 pt-10 text-white border-2 border-brand-orange shadow-lg shadow-brand-orange/15 rounded-sm relative group hover:border-brand-red hover:shadow-brand-red/25 transition-all h-full cursor-pointer flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 bg-brand-orange text-brand-black text-[8px] font-black uppercase tracking-widest py-1 px-3 skew-x-[-6deg]">
                    <span className="inline-block skew-x-[6deg]">Highlighted Review</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4 select-none">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} size={15} className="fill-brand-orange text-brand-orange" />
                      ))}
                    </div>
                    <p className="text-sm font-medium italic leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-4 mt-auto">
                    <div className="bg-brand-orange text-brand-black w-8 h-8 text-xs rounded-full flex items-center justify-center font-display font-black italic">
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-black italic text-base leading-none text-brand-orange group-hover:text-white transition-colors">{t.name}</span>
                      <span className="text-brand-silver/80 text-[10px] font-bold mt-1">{t.role}</span>
                      <span className="text-brand-silver/40 text-[9px] font-black uppercase tracking-widest mt-1 opacity-50">{t.location}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              to="/testimonials" 
              className="group flex items-center gap-4 text-brand-black font-black uppercase tracking-widest text-xs border-b-2 border-brand-orange pb-2 hover:text-brand-red transition-colors"
            >
              View All Testimonials <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center text-center">
            <div className="w-20 h-1 bg-brand-orange mb-8"></div>
            <p className="text-brand-metal font-black uppercase tracking-[0.3em] text-xs">
              Join 100+ Satisfied Clients
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-brand-silver">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-brand-red text-lg mb-2">NOW BOOKING.</h2>
              <h2 className="text-5xl md:text-7xl leading-none">START YOUR <br />PROJECT.</h2>
            </div>
            <p className="text-brand-metal text-lg max-w-md hidden lg:block">
              We look forward to transforming your property. Reach out through our CRM system or contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            {/* Direct Contact Bar */}
            <div className="bg-brand-black text-white px-6 py-3 flex flex-wrap gap-x-8 gap-y-2 text-[10px] sm:text-xs font-black uppercase tracking-widest italic skew-x-[-6deg]">
              <div className="flex items-center gap-2 skew-x-[6deg]">
                <Phone size={14} className="text-brand-orange" />
                <span>Call: (865) 390-4963</span>
              </div>
              <div className="flex items-center gap-2 skew-x-[6deg]">
                <Mail size={14} className="text-brand-orange" />
                <span>Email: cridings05@gmail.com</span>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 shadow-2xl border-t-8 border-brand-orange flex flex-col justify-between">
              <div className="space-y-6 mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange bg-brand-black px-3 py-1.5 rounded-sm inline-block skew-x-[-6deg]">
                  <span className="inline-block skew-x-[6deg]">Get a Free Estimate</span>
                </span>
                <h3 className="text-3xl font-display font-black italic tracking-tight leading-none text-brand-black">
                  ONLINE ESTIMATE REQUEST
                </h3>
                <p className="text-brand-metal text-sm leading-relaxed">
                  Ready to start your landscaping, excavation, or clearing project? Click the button below to submit your details directly through our secure Jobber CRM portal. We will review your request and schedule a professional site assessment.
                </p>
                <div className="space-y-3 pt-2 text-brand-black text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                    <span>Fast & Simple Submission</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                    <span>Direct Integration with Schedule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                    <span>Professional Project Assessment</span>
                  </div>
                </div>
              </div>
              <div>
                <a 
                  href="https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-5 text-xl font-display font-black italic tracking-wider uppercase text-center block"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black py-16 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-4">
              <img 
                src="/before-after/Pics/ridingslandscapinglogo.jpg" 
                alt="Ridings Landscaping & Excavation Logo" 
                className="h-16 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black italic tracking-tighter leading-none text-chrome">RIDINGS</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 text-white">Landscaping & Excavation LLC</span>
              </div>
            </div>
            <p className="text-brand-silver/40 text-sm">
              RIDINGS is a premier full-service landscaping and excavation firm. 
              We bring superior craftsmanship and industrial-grade equipment to 
              every job site across the tri-state area.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/Ridings-Landscaping-Excavation-61569188207776/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-brand-black transition-all cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/ridings_scapesandexcavation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-brand-black transition-all cursor-pointer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-xs font-black uppercase tracking-widest">
            <div className="space-y-4">
               <p className="text-brand-orange">Quick Links</p>
               <nav className="flex flex-col gap-3 text-brand-silver/60">
                 <a href="#services" className="hover:text-white">Services</a>
                 <Link to="/gallery" className="hover:text-white">Gallery</Link>
                 <Link to="/testimonials" className="hover:text-white">Testimonies</Link>
                 <a href="#contact" className="hover:text-white">Contact</a>
               </nav>
            </div>
            <div className="space-y-4">
               <p className="text-brand-orange">Services</p>
               <nav className="flex flex-col gap-3 text-brand-silver/60">
                 <a href="#services" className="hover:text-white">Land Clearing/ Excavation</a>
                 <a href="#services" className="hover:text-white">Landscaping</a>
                 <a href="#services" className="hover:text-white">Hardscaping</a>
                 <a href="#services" className="hover:text-white">Construction & Remodel</a>
                 <a href="#services" className="hover:text-white">Other Services</a>
               </nav>
            </div>
            <div className="col-span-2 md:col-span-1 space-y-4">
               <p className="text-brand-orange">Safety First</p>
               <div className="bg-white/5 p-4 space-y-2">
                 <div className="flex items-center gap-2"><Star size={12} className="text-brand-orange" /> ISO 9001 Certified</div>
                 <div className="flex items-center gap-2"><Star size={12} className="text-brand-orange" /> Zero Incident Record</div>
               </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-silver/20 font-black uppercase tracking-widest">
          <p>© 2026 RIDINGS LANDSCAPING & EXCAVATION LLC. ALL RIGHTS RESERVED. SITE BY HYZALABS.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

function TestimonialsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen industrial-grid bg-white">
      {/* Reusable Nav for subpages */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className={`transition-all duration-300 ${scrolled ? 'glass-nav py-3 text-brand-black' : 'bg-brand-black/40 backdrop-blur-sm py-6 text-white'} border-b border-white/5`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4 group">
              <img 
                src="/before-after/Pics/ridingslandscapinglogo.jpg" 
                alt="Logo" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className={`text-xl font-display font-black italic tracking-tighter leading-none ${scrolled ? 'text-brand-black' : 'text-chrome'}`}>RIDINGS</span>
                <span className={`text-[8px] font-black uppercase tracking-[0.3em] leading-none mt-1 opacity-80 ${scrolled ? 'text-brand-black/60' : 'text-white'}`}>Back to Home</span>
              </div>
            </Link>
            <Link to="/" className={`btn-primary flex items-center gap-2 text-xs py-2 px-4 shadow-none`}>
              <X size={16} /> Home
            </Link>
          </div>
        </nav>
      </header>

      <section className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-brand-red text-lg mb-2 uppercase tracking-[0.2em] font-black italic">Client Feedback</h2>
            <h1 className="text-6xl md:text-8xl font-display font-black italic tracking-tighter leading-[0.85]">
              TRUSTED <br />
              <span className="text-brand-orange">VOICES.</span>
            </h1>
            <p className="text-brand-metal mt-8 font-medium max-w-xl text-lg italic opacity-80">
              Read all reports from the field. Real words from real clients across our regional project sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-black p-10 text-white border-b-8 border-brand-orange group hover:border-brand-red transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-xl font-medium italic leading-relaxed mb-12 opacity-90">
                    "{t.content}"
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="bg-brand-orange text-brand-black w-10 h-10 text-lg rounded-full flex items-center justify-center font-display font-black italic">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-black italic text-xl leading-none text-brand-orange">{t.name}</span>
                    <div className="flex justify-between items-center mt-3 gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{t.role}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/30"></div>
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-30">{t.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Reuse */}
      <footer className="bg-brand-black py-16 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 text-center md:text-left">
          <div className="mx-auto md:mx-0">
            <Link to="/" className="flex items-center gap-4 justify-center md:justify-start">
              <img src="/before-after/Pics/ridingslandscapinglogo.jpg" className="h-12 w-auto" alt="Logo" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-black italic tracking-tighter leading-none text-chrome">RIDINGS</span>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-80">Landscaping & Excavation LLC</span>
              </div>
            </Link>
            <p className="mt-8 text-[10px] text-brand-silver/20 font-black uppercase tracking-widest">© 2026 RIDINGS LANDSCAPING & EXCAVATION LLC. ALL RIGHTS RESERVED. SITE BY HYZALABS.</p>
            <div className="flex gap-4 mt-4 text-[10px] text-brand-silver/20 font-black uppercase tracking-widest justify-center md:justify-start">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/5">•</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <div className="flex gap-8 mx-auto md:mx-0 items-center">
            <a href="https://www.facebook.com/p/Ridings-Landscaping-Excavation-61569188207776/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/ridings_scapesandexcavation/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
              <Instagram size={20} />
            </a>
            <Link to="/" className="text-[10px] font-black uppercase tracking-widest border border-white/10 px-6 py-2 hover:bg-white hover:text-brand-black transition-colors">Back Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
