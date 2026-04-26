import React from 'react';

export default function Values() {
  return (
    <section id="values" clasName="py-24 lg:py-36 dark:bg-stone-950 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 reveal opacity-0 translate-y-[30px]">
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">Why Choose Us</span>
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 reveal opacity-0 translate-y-[30px]">
            Values & <span className="italic text-gold">Strengths</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="reveal group">
            <div className="w-[52px] h-[52px] border border-gold rounded-full flex items-center justify-center shrink-0 text-gold font-heading text-[1.4rem] font-semibold mb-5 group-hover:scale-110 transition-transform duration-300">I</div>
            <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3">Integrity</h3>
            <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed">Every act is taken in a manner that is fair, honest, and in the best interest of the client and society. The cornerstone of all our dealings.</p>
          </div>

          <div className="reveal group">
            <div className="w-[52px] h-[52px] border border-gold rounded-full flex items-center justify-center shrink-0 text-gold font-heading text-[1.4rem] font-semibold mb-5 group-hover:scale-110 transition-transform duration-300">P</div>
            <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3">Passion</h3>
            <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed">A tremendous zeal for law and justice. Emotional attachment with work inspires every member to give their best with enthusiasm.</p>
          </div>

          <div className="reveal group">
            <div className="w-[52px] h-[52px] border border-gold rounded-full flex items-center justify-center shrink-0 text-gold font-heading text-[1.4rem] font-semibold mb-5 group-hover:scale-110 transition-transform duration-300">R</div>
            <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3">Responsibility</h3>
            <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed">We realize every case can have profound ramifications on the lives of people and the functioning of organizations. We never take that lightly.</p>
          </div>

          <div className="reveal group">
            <div className="w-[52px] h-[52px] border border-gold rounded-full flex items-center justify-center shrink-0 text-gold font-heading text-[1.4rem] font-semibold mb-5 group-hover:scale-110 transition-transform duration-300">T</div>
            <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-3">Trust</h3>
            <p className="text-sm dark:text-stone-500 text-stone-500 font-light leading-relaxed">Members are trusted with their work while appropriate checks ensure quality is never compromised. Openness and free flow of ideas define our culture.</p>
          </div>
        </div>

        {/* Strengths Banner */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,var(--color-gold)_30%,var(--color-gold)_70%,transparent)] opacity-40 my-12"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal opacity-0 translate-y-[30px]">
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" clasName="text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-sm dark:text-stone-400 text-stone-600 font-light">Pool of experienced advocates in diverse fields</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" clasName="text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-sm dark:text-stone-400 text-stone-600 font-light">Unparalleled mediation and conciliation abilities</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" clasName="text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-sm dark:text-stone-400 text-stone-600 font-light">Strong hold over constitutional provisions</span>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" clasName="text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="text-sm dark:text-stone-400 text-stone-600 font-light">Commitment to client's solace & satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
