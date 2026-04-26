import React from 'react';
import content from "../../content.json";

export default function Courts() {
  const data = content.courts;

  return (
    <section id="courts" className="py-24 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--color-gold)" strokeWidth="1">
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
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">{data.eyebrow}</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground leading-tight">
              {data.title1}<br /><span className="italic text-gold">{data.title2}</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-light leading-relaxed">
              {data.description}
            </p>
            <div className="mt-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{data.address.title}</div>
              <address className="not-italic text-foreground font-light leading-loose">
                {data.address.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </address>
            </div>
          </div>

          {/* Courts list */}
          <div className="space-y-px reveal opacity-0 translate-y-[30px]">
            {data.items.map((court, i) => (
              <div key={i} className={`flex items-center gap-5 px-6 py-4 border-l-2 transition-all group bg-muted/30 hover:bg-muted ${court.primary ? 'border-gold' : 'border-transparent hover:border-gold'}`}>
                <div className={`w-2 h-2 rounded-full shrink-0 ${court.primary ? 'bg-gold' : 'bg-muted-foreground'}`}></div>
                <span className={`font-light text-sm ${court.primary ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {court.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

