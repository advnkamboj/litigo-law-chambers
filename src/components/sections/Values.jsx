import React from 'react';
import content from "../../content.json";

export default function Values() {
  const data = content.values;

  return (
    <section id="values" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6 reveal opacity-0 translate-y-[30px]">
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">{data.eyebrow}</span>
            <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground reveal opacity-0 translate-y-[30px]">
            {data.title1} <span className="italic text-gold">{data.title2}</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data.items.map((item, i) => (
            <div key={i} className="reveal group">
              <div className="w-[52px] h-[52px] border border-gold rounded-full flex items-center justify-center shrink-0 text-gold font-heading text-[1.4rem] font-semibold mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.letter}
              </div>
              <h3 className="font-display text-2xl font-light text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Strengths Banner */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,var(--color-gold)_30%,var(--color-gold)_70%,transparent)] opacity-40 my-12"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal opacity-0 translate-y-[30px]">
          {data.strengths.map((strength, i) => (
            <div key={i} className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-muted-foreground font-light">{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

