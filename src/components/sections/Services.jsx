import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* BG texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 reveal opacity-0 translate-y-[30px]">
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">What We Do</span>
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground reveal opacity-0 translate-y-[30px]">
            Areas of <span className="italic text-gold">Practice</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {/* Service Card */}
          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Civil Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">Recovery suits, stay & injunction, contractual disputes, property matters, arbitration, motor accidents, consumer cases, and drafting of all types of contracts.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>

          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Writs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">Filing writs under Articles 32, 226 & 227 of the Constitution — Fundamental Rights, civil liberties, and challenging governmental actions before High Courts and Supreme Court.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>

          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Corporate Litigation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">Petitions before Debt Recovery Tribunals, Appellate Tribunals, High Courts and Supreme Court on behalf of banks, financial institutions, and public organizations.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>

          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Intellectual Property</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">IPR infringement cases, trademark registration, injunction suits, and comprehensive protection of intellectual property assets across various forums.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>

          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Criminal Matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">Criminal appeals, writs, FIR quashing, bail matters, crimes against women, cheque dishonour, private complaints for cheating, fraud & breach of trust.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>

          <div className="service-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl before:absolute before:inset-0 before:border before:border-transparent before:bg-[linear-gradient(135deg,var(--color-gold-dim),transparent)] before:bg-origin-border before:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] before:mask-exclude before:opacity-0 hover:before:opacity-100 bg-card p-8 group cursor-default reveal opacity-0 translate-y-[30px]">
            <div className="mb-5 text-gold-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground mb-3 group-hover:text-gold-400 transition-colors">Alternate Dispute Resolution</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">Arbitration, conciliation and mediation services — providing a refreshing break from prolonged litigation with unparalleled resolution abilities.</p>
            <div className="mt-6 w-8 h-px transition-all duration-300 group-hover:w-16 bg-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
