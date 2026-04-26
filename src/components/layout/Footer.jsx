import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-gold rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 rotate-45 bg-gold"></div>
          </div>
          <span className="font-display text-sm text-muted-foreground">Litigo Law Chamber</span>
        </div>
        <div className="text-xs text-muted-foreground text-center">
          © 2024 Litigo Law Chamber. All rights reserved. · Dehradun, Uttarakhand, India
        </div>
        <div className="flex gap-6">
          <a href="#home" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold-400 transition-colors">Home</a>
          <a href="#services" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold-400 transition-colors">Services</a>
          <a href="#contact" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-gold-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
