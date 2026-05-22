import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Mail, Phone, Calendar } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-brand-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Grid background matching global aesthetic */}
      <div className="fixed inset-0 industrial-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation back */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-brand-orange hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.2em]"
          >
            <ArrowLeft size={14} /> Back To Home
          </Link>
        </div>

        {/* Header decoration */}
        <div className="border-l-4 border-brand-orange pl-6 mb-16 space-y-4">
          <div className="flex items-center gap-2 text-brand-orange text-xs font-black uppercase tracking-[0.2em]">
            <BookOpen size={14} /> Agreement & Guidelines
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter leading-none uppercase">
            TERMS & <br />
            <span className="text-brand-orange">CONDITIONS.</span>
          </h1>
          <div className="flex items-center gap-2 text-brand-silver/40 text-[10px] font-black uppercase tracking-widest pt-2">
            <Calendar size={12} /> Last Updated: March 20, 2026
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-brand-black/40 border border-white/5 p-8 md:p-12 space-y-12 text-brand-silver font-sans text-sm leading-relaxed backdrop-blur-sm">
          
          <section className="space-y-4">
            <p className="text-base text-white/90">
              Welcome to the website of Ridings Landscape & Excavation (“Company,” “we,” “our,” or “us”). By accessing or using our website (<a href="https://ridingslandscaping.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">ridingslandscaping.com</a>), you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">01.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Use of the Website</h2>
            </div>
            <p>You agree to use our website only for lawful purposes related to viewing our landscaping, clearing, and excavation portfolio, information queries, and submitting legitimate consultation requests. You are strictly prohibited from using the site for fraudulent activities, distributing harmful code, or attempting unauthorized access to any system components.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">02.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Estimates and CRM Requests</h2>
            </div>
            <p>Submitting a request on our website or through our integrated Jobber CRM system does not guarantee pricing or initiate a binding contract. All prices and project parameters are subject to a physical on-site evaluation and must be finalized through a signed written scope of work between both parties.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">03.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Intellectual Property</h2>
            </div>
            <p>All content displayed on this website, including logos, designs, custom headers, site photographs, project gallery images, and descriptive texts, is the exclusive intellectual property of Ridings Landscape & Excavation LLC. No content may be copied, reproduced, or used for commercial purposes without our express written permission.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">04.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Limitation of Liability</h2>
            </div>
            <p>While we make every effort to display accurate representations of project timelines, landscaping transformations, and site conditions, we are not liable for typographical errors or deviations based on site-specific physical parameters. We provide our digital resources 'as is' without warranty of any kind.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">05.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Privacy Policy Alignment</h2>
            </div>
            <p>Our collection, processing, and storage of user-provided structural and personal information is fully governed by our <Link to="/privacy" className="text-brand-orange hover:underline font-bold">Privacy Policy</Link>.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">06.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Governing Law</h2>
            </div>
            <p>These terms and any projects completed under them shall be governed by and construed in accordance with the laws of the State of Tennessee, without regard to conflict of law principles.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">07.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Contact Information</h2>
            </div>
            <p className="mb-4">For any questions or clarification regarding these Terms and Conditions, please contact us directly:</p>
            
            <div className="bg-white/5 border border-white/5 p-6 space-y-4">
              <div className="font-display font-black italic tracking-wide text-white uppercase">
                Ridings Landscape & Excavation
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:cridings05@gmail.com" className="flex items-center gap-3 text-brand-silver hover:text-brand-orange transition-colors">
                  <Mail size={16} className="text-brand-orange" />
                  <span>cridings05@gmail.com</span>
                </a>
                <a href="tel:8653244107" className="flex items-center gap-3 text-brand-silver hover:text-brand-orange transition-colors">
                  <Phone size={16} className="text-brand-orange" />
                  <span>(865) 324-4107</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
