import React from 'react';

export default function Courts() {
  return (
    <section id="courts" className="py-24 lg:py-36 dark:bg-stone-950 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#c9a84c" strokeWidth="1">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal opacity-0 translate-y-[30px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">Our Reach</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 leading-tight">
              Courts &<br /><span className="italic text-gold">Tribunals</span>
            </h2>
            <p className="mt-6 dark:text-stone-400 text-stone-600 font-light leading-relaxed">
              From the Supreme Court of India to specialized tribunals, our experienced team practices across the full spectrum of India's judicial hierarchy.
            </p>
            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-400 mb-4">Primary Office</div>
              <address className="not-italic dark:text-stone-300 text-stone-700 font-light leading-loose">
                Opposite SDM Court,<br />
                District Court Compound,<br />
                Dehradun, Uttarakhand
              </address>
            </div>
          </div>

          {/* Courts list */}
          <div className="space-y-px reveal opacity-0 translate-y-[30px]">
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-colors">
              <div className="w-2 h-2 rounded-full shrink-0 bg-gold"></div>
              <span className="dark:text-stone-300 text-stone-700 font-light text-sm">Supreme Court of India</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">High Court of Uttarakhand at Nainital</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">High Court of Delhi at Delhi</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">High Court of Sikkim at Gangtok</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">High Court of Uttar Pradesh at Allahabad</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">National Consumer Disputes Redressal Commission, New Delhi</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">Central Administrative Tribunal at Nainital</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">Debt Recovery Tribunal, Dehradun</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">District Court & Labour Courts, Dehradun</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">Real Estate Regulatory Authority & Appellate Tribunal, Dehradun</span>
            </div>
            <div className="flex items-center gap-5 dark:bg-stone-900/50 bg-stone-50 px-6 py-4 border-l-2 border-transparent hover:border-gold-400 group hover:dark:bg-stone-900 hover:bg-stone-100 transition-all">
              <div className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></div>
              <span className="dark:text-stone-400 text-stone-600 font-light text-sm">District & State Consumer Disputes Redressal Forums</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
