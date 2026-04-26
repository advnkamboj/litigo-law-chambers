import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36 relative overflow-hidden bg-background">
      {/* Dark mode background gradient - isolated to avoid affecting light mode */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none bg-[linear-gradient(135deg,var(--background)_0%,var(--card)_100%)]"></div>

      {/* Gold mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-100" style={{ backgroundImage: 'linear-gradient(var(--color-gold-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-dim) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)] opacity-20 dark:opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal opacity-0 translate-y-[30px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[60px] h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold">Get In Touch</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
              Let's Discuss<br />
              <span className="italic text-gold">Your Case</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12">
              Reach out to Litigo Law Chamber for expert legal guidance. Our team is ready to provide dedicated support for your legal needs.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center shrink-0 transition-colors bg-background">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Chamber</div>
                  <address className="not-italic text-foreground font-light text-sm leading-relaxed">Opposite SDM Court, District Court Compound,<br />Dehradun, Uttarakhand</address>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center shrink-0 transition-colors bg-background">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Office</div>
                  <address className="not-italic text-foreground font-light text-sm leading-relaxed">11-DS, 2nd Floor, PLS Plaza,<br />58 Gandhi Road, Dehradun, Uttarakhand</address>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center shrink-0 transition-colors bg-background">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <a href="mailto:naman@lawyer.com" className="text-foreground hover:text-gold font-light text-sm transition-colors block">naman@lawyer.com</a>
                  <a href="mailto:litigolaw@gmail.com" className="text-foreground hover:text-gold font-light text-sm transition-colors block">litigolaw@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-10 h-10 border border-border group-hover:border-gold flex items-center justify-center shrink-0 transition-colors bg-background">
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+918126630631" className="text-foreground hover:text-gold font-light text-sm transition-colors block">+91-8126630631</a>
                  <a href="tel:+919868650636" className="text-foreground hover:text-gold font-light text-sm transition-colors block">+91-9868650636</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-10 border border-border reveal opacity-0 translate-y-[30px] shadow-sm dark:shadow-none">
            <h3 className="font-display text-2xl font-light text-foreground mb-8">Send a Message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-background border border-input text-foreground placeholder-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full bg-background border border-input text-foreground placeholder-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-background border border-input text-foreground placeholder-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Matter Type</label>
                <select className="w-full bg-background border border-input text-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option value="">Select practice area</option>
                  <option>Civil Matters</option>
                  <option>Criminal Matters</option>
                  <option>Corporate Litigation</option>
                  <option>Intellectual Property</option>
                  <option>Writs</option>
                  <option>Alternate Dispute Resolution</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Brief Description</label>
                <textarea rows="4" placeholder="Briefly describe your legal matter..." className="w-full bg-background border border-input text-foreground placeholder-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 text-xs uppercase tracking-widest font-medium text-black transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5 bg-gold">
                Send Enquiry
              </button>
              <p className="text-xs text-muted-foreground text-center">Your information is confidential and protected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

