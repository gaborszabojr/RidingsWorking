import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, Phone, Calendar } from 'lucide-react';

export default function Privacy() {
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
            <Shield size={14} /> Compliance & Trust
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter leading-none uppercase">
            PRIVACY <br />
            <span className="text-brand-orange">POLICY.</span>
          </h1>
          <div className="flex items-center gap-2 text-brand-silver/40 text-[10px] font-black uppercase tracking-widest pt-2">
            <Calendar size={12} /> Effective Date: March 20, 2026
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-brand-black/40 border border-white/5 p-8 md:p-12 space-y-12 text-brand-silver font-sans text-sm leading-relaxed backdrop-blur-sm">
          
          <section className="space-y-4">
            <p className="text-base text-white/90">
              Ridings Landscape & Excavation (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to protecting it through this Privacy Policy.
            </p>
            <p>
              This policy describes how we collect, use, and share information when you visit our website: <a href="https://ridingslandscapeandexcavation.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">https://ridingslandscapeandexcavation.com</a>
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">01.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Information We Collect</h2>
            </div>
            
            <div className="space-y-6 pl-4 md:pl-6 border-l border-white/5">
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-2">A. Information You Provide</h3>
                <p className="mb-2">When you fill out a form on our website or submit through our CRM, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1 text-white/80">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Address (if provided)</li>
                  <li>Details about your project or request</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-2">B. Automatically Collected Information</h3>
                <p className="mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-5 space-y-1 text-white/80">
                  <li>IP address</li>
                  <li>Browser type and device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website or source</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-2">C. Tracking Technologies</h3>
                <p className="mb-2">We may use:</p>
                <ul className="list-disc pl-5 space-y-1 text-white/80">
                  <li>Cookies</li>
                  <li>Pixels (such as Meta/Facebook Pixel)</li>
                  <li>Analytics tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">02.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">How We Use Your Information</h2>
            </div>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-9 space-y-2 text-white/80">
              <li>Respond to inquiries and provide quotes</li>
              <li>Contact you regarding your landscaping or excavation project</li>
              <li>Improve website performance and user experience</li>
              <li>Measure the effectiveness of advertising campaigns</li>
              <li>Prevent fraud or misuse of our website</li>
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">03.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Advertising & Analytics</h2>
            </div>
            <p className="mb-4">We may use third-party services, including:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                <span className="text-xs font-bold text-white block mb-1">Google Ads</span>
                <p className="text-xs text-brand-silver">Paid search and tracking.</p>
              </div>
              <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                <span className="text-xs font-bold text-white block mb-1">Google Analytics</span>
                <p className="text-xs text-brand-silver">Analyzing site performance and traffic.</p>
              </div>
              <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                <span className="text-xs font-bold text-white block mb-1">Meta Ads</span>
                <p className="text-xs text-brand-silver">Facebook and Instagram Retargeting.</p>
              </div>
            </div>
            <p>These services may use cookies, pixels, and similar technologies to track your activity across websites, show you relevant advertisements, and measure ad performance. These third parties may collect or receive information from our website and use it according to their own privacy policies.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">04.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Cookies Policy</h2>
            </div>
            <p>Cookies are small data files stored on your device. We use cookies to understand how users interact with our website, improve functionality and performance, and support advertising efforts. You can choose to disable cookies through your browser settings.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">05.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Sharing of Information</h2>
            </div>
            <p className="mb-2">We do not sell your personal information.</p>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-9 space-y-1 text-white/80">
              <li>Service providers (e.g., website hosting, marketing tools)</li>
              <li>Advertising partners (for marketing and analytics)</li>
              <li>Law enforcement or regulators if required by law</li>
            </ul>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">06.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Data Security</h2>
            </div>
            <p>We implement reasonable security measures to protect your information. However, no online system is completely secure.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">07.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Your Privacy Rights (U.S.)</h2>
            </div>
            <p className="mb-2">Depending on your state (such as California), you may have rights to:</p>
            <ul className="list-disc pl-9 space-y-1 text-white/80">
              <li>Request access to the personal data we have about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of certain data sharing practices</li>
            </ul>
            <p>To exercise your rights, contact us using the details below.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">08.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Do Not Track Signals</h2>
            </div>
            <p>Some browsers offer “Do Not Track” signals. Our website may not respond to these signals.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">09.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Children’s Privacy</h2>
            </div>
            <p>Our services are not directed to individuals under 13. We do not knowingly collect information from children.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">10.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Changes to This Privacy Policy</h2>
            </div>
            <p>We may update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.</p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <span className="text-brand-orange font-mono font-black text-sm">11.</span>
              <h2 className="text-lg font-display font-black tracking-wide text-white uppercase italic">Contact Information</h2>
            </div>
            <p className="mb-4">If you have questions about this Privacy Policy or your data, contact us:</p>
            
            <div className="bg-white/5 border border-white/5 p-6 space-y-4">
              <div className="font-display font-black italic tracking-wide text-white uppercase">
                Ridings Landscape & Excavation
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="mailto:chaseridingslandscaping865@gmail.com" className="flex items-center gap-3 text-brand-silver hover:text-brand-orange transition-colors">
                  <Mail size={16} className="text-brand-orange" />
                  <span>chaseridingslandscaping865@gmail.com</span>
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
