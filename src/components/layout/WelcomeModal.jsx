import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import content from "../../content.json";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const data = content.welcomeModal;

  useEffect(() => {
    if (location.state?.showWelcome) {
      setIsOpen(true);
      navigate('.', { replace: true, state: {} });
    }
  }, [location, navigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
      <div className="max-w-md w-full bg-card border border-border p-8 text-center shadow-2xl relative" style={{ animation: 'fadeUp 0.5s ease-out forwards' }}>

        <h2 className="font-display text-3xl font-light text-foreground mb-4">
          {data.title}
        </h2>

        <div className="w-12 h-px bg-gold mx-auto opacity-50 mb-6"></div>

        <p className="text-muted-foreground font-light leading-relaxed mb-8">
          {data.message}
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 bg-gold text-black hover:opacity-90 transition-all text-sm tracking-widest uppercase shadow-lg shadow-gold/20 hover:-translate-y-0.5"
        >
          {data.buttonText}
        </button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}