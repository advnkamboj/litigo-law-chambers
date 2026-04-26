import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-bg bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,76,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(201,168,76,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,76,0.06)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(201,168,76,0.04)_0%,transparent_50%)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-400/10 animate-float-slow"></div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-400/10" className="animate-float-slow" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        {/* Grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
        {/* Glow spot */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 reveal opacity-0 translate-y-[30px]">
            <div className="w-[60px] h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">Est. Dehradun · Uttarakhand</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display leading-none mb-6 reveal opacity-0 translate-y-[30px]">
            <span className="block text-6xl sm:text-7xl lg:text-9xl font-light dark:text-stone-100 text-stone-900">Litigo</span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl font-light italic" className="text-gold">Law</span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl font-light dark:text-stone-100 text-stone-900">Chambers</span>
          </h1>

          {/* Tagline */}
          <p className="text-base lg:text-lg font-body dark:text-stone-400 text-stone-600 max-w-xl leading-relaxed mb-10 reveal opacity-0 translate-y-[30px]" style={{ fontWeight: 300 }}>
            A new generation law firm delivering best quality legal work — with integrity, passion, and an unwavering commitment to justice.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 reveal opacity-0 translate-y-[30px]">
            <a href="#services" className="inline-flex items-center gap-3 px-7 py-3.5 text-xs uppercase tracking-widest font-medium text-stone-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5" className="bg-gold">
              Our Services
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 border hover:border-gold-400 dark:hover:text-stone-100 hover:text-stone-900" className="border-gold/30 text-gold">
              Free Consultation
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-12 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0 translate-y-[30px]">
          <div>
            <div className="font-heading text-6xl font-light text-gold leading-none">4<span className="text-2xl">+</span></div>
            <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500 mt-1">High Courts</div>
          </div>
          <div>
            <div className="font-heading text-6xl font-light text-gold leading-none">10<span className="text-2xl">+</span></div>
            <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500 mt-1">Tribunals & Forums</div>
          </div>
          <div>
            <div className="font-heading text-6xl font-light text-gold leading-none">7<span className="text-2xl">+</span></div>
            <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500 mt-1">Practice Areas</div>
          </div>
          <div>
            <div className="font-heading text-6xl font-light text-gold leading-none">∞</div>
            <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500 mt-1">Client Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
}
