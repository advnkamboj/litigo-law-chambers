import React from 'react';
import content from "../../content.json";

export default function Team() {
  const data = content.team;

  return (
    <section id="team" className="py-24 lg:py-36 bg-muted/30">
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

        {/* Founder Spotlight */}
        <div className="bg-card p-10 lg:p-14 mb-6 relative overflow-hidden reveal opacity-0 translate-y-[30px] border border-border shadow-sm">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
          <div className="absolute top-6 right-8 text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
            {data.founder.badge}
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h3 className="font-display text-3xl lg:text-4xl font-light text-foreground mb-1">
                {data.founder.name}
              </h3>
              <div className="text-xs uppercase tracking-widest text-gold-400 mb-6">
                {data.founder.role}
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                {data.founder.bio}
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Expertise</div>
              <div className="flex flex-wrap gap-2">
                {data.founder.expertise.map((exp, i) => (
                  <span key={i} className={`px-3 py-1 text-[10px] border tracking-wider uppercase ${exp.highlight ? 'border-gold/40 text-gold' : 'border-border text-muted-foreground'}`}>
                    {exp.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Associates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.associates.map((member, i) => (
            <div key={i} className="border-t border-gold pt-6 bg-card p-7 reveal opacity-0 translate-y-[30px] border-x border-b shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[10px] uppercase tracking-widest text-gold-400 mb-3 font-medium">
                {member.role}
              </div>
              <h4 className="font-display text-xl font-light text-foreground mb-2">
                {member.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

