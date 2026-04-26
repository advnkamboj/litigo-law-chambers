import React from 'react';
import content from "../../content.json";

export default function About() {

  const data = content.about;

  return (
    <section id="about" className="py-24 lg:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-4 mb-6 reveal opacity-0 translate-y-[30px]">
              <div className="w-[60px] h-px bg-linear-to-r from-transparent via-gold to-transparent"></div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight reveal opacity-0 translate-y-[30px]">
              {data.titleLine1}<br />
              <span className="italic text-gold">{data.titleLine2}</span>
            </h2>

            <div className="space-y-5 text-muted-foreground font-light leading-relaxed reveal opacity-0 translate-y-[30px]">
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 reveal opacity-0 translate-y-[30px]">
              <a href="#contact" className="inline-flex items-center gap-3 text-xs uppercase tracking-widest transition-colors text-gold">
                {data.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="relative reveal opacity-0 translate-y-[30px]">
            <div className="bg-muted p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-gold opacity-30"></div>

              <div className="font-heading text-[8rem] leading-[0.6] text-gold opacity-20 mb-4">"</div>

              <blockquote className="font-display text-2xl lg:text-3xl font-light italic text-foreground leading-snug mb-6">
                {data.quote.text}
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold"></div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {data.quote.author}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wider">
                    {data.quote.designation}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 -z-10 bg-gold-dim border border-gold/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
}