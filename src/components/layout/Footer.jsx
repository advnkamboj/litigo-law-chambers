import React from 'react';
import content from "../../content.json";

export default function Footer() {
  const data = content.footer;

  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-gold rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
          </div>
          <span className="font-display text-sm text-muted-foreground">{data.logoText}</span>
        </div>
        <div className="text-xs text-muted-foreground text-center">
          {data.copyright}
        </div>
        <div className="flex gap-6">
          {data.links.map((link, i) => (
            <a key={i} href={link.href} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

