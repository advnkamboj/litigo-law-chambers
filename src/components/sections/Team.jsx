import React from 'react';

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-36 dark:bg-slate-950 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 reveal opacity-0 translate-y-[30px]">
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">The People</span>
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 reveal opacity-0 translate-y-[30px]">
            Our <span className="italic text-gold">Team</span>
          </h2>
        </div>

        {/* Founder Spotlight */}
        <div className="dark:bg-stone-900 bg-white p-10 lg:p-14 mb-6 relative overflow-hidden reveal opacity-0 translate-y-[30px]">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
          <div className="absolute top-6 right-8 text-xs uppercase tracking-widest text-gold-400">Founder & Managing Partner</div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h3 className="font-display text-3xl lg:text-4xl font-light dark:text-stone-100 text-stone-900 mb-1">Naman Kamboj</h3>
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-6">Founder & Director</div>
              <p className="dark:text-stone-400 text-stone-600 font-light leading-relaxed">Mr. Naman Kamboj is the founder of the firm and oversees key management and operational procedures. With an impressive background including Research Assistant cum Law Clerkship to Hon'ble Chief Justice Dipak Misra of the Supreme Court of India, he effectively handles complex litigations across High Courts and the Supreme Court.</p>
            </div>
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400 mb-3">Expertise</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs border dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600">Civil Litigation</span>
                <span className="px-3 py-1 text-xs border dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600">Criminal Matters</span>
                <span className="px-3 py-1 text-xs border dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600">High Courts</span>
                <span className="px-3 py-1 text-xs border dark:border-stone-700 border-stone-200 dark:text-stone-400 text-stone-600">Supreme Court</span>
                <span className="px-3 py-1 text-xs border border-gold/40 text-gold">SC Law Clerk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Associates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Senior Associate</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Narendra Singh</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">Trial including Original Civil Suits</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Associate</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Prasanna Karnatak</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">Appellate Jurisdiction</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Associate</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Divyansh Rohilla</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">Original Civil Suits & Other Forums</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Associate</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Siddharth Gupta</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">Trial including Legal Research</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-gold-400 mb-3">Associate</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Ms. Namrata</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">Legal Compliances</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-stone-500 mb-3">Clerk</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Karan Kumar</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">High Court Work at Nainital</p>
          </div>

          <div className="border-t border-gold pt-6 dark:bg-stone-900/80 bg-white p-7 reveal opacity-0 translate-y-[30px]">
            <div className="text-xs uppercase tracking-widest text-stone-500 mb-3">Clerk</div>
            <h4 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-2">Vijay Singh</h4>
            <p className="text-xs dark:text-stone-500 text-stone-500 leading-relaxed">District Courts & Forums at Dehradun</p>
          </div>
        </div>
      </div>
    </section>
  );
}
