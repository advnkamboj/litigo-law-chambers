import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import content from "../../content.json";

export default function Disclaimer() {
  const navigate = useNavigate();
  const [disagreed, setDisagreed] = useState(false);

  const data = content.disclaimer;

  if (typeof window !== 'undefined' && localStorage.getItem('disclaimerAgreed') === 'true') {
    return <Navigate to="/" replace />;
  }

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    navigate('/', { replace: true, state: { showWelcome: true } });
  };

  const handleDisagree = () => {
    setDisagreed(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-6 relative">

      <div className="max-w-3xl w-full bg-card border border-border p-6 md:p-8 shadow-2xl relative z-10 flex flex-col">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]"></div>

        {disagreed ? (
          <div className="text-center space-y-6 flex-1 flex flex-col justify-center py-10">
            <h2 className="font-display text-3xl font-light text-foreground">
              {data.denied.title}
            </h2>

            <p className="text-muted-foreground font-light leading-relaxed">
              {data.denied.message}
            </p>

            <button
              onClick={() => setDisagreed(false)}
              className="px-8 py-3 border border-border text-foreground hover:border-gold hover:text-gold transition-colors text-sm tracking-widest uppercase mt-4 self-center"
            >
              {data.denied.backBtn}
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
                {data.title}
              </h2>
              <div className="w-16 h-px bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="prose prose-sm max-w-none mb-8 text-muted-foreground font-light leading-relaxed">
              <p className="mb-4">{data.intro}</p>

              {data.points.map((point, index) => (
                <p key={index} className="mb-4">{point}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDisagree}
                className="px-6 py-3 border border-border text-foreground hover:border-destructive hover:text-destructive transition-colors text-sm tracking-widest uppercase"
              >
                {data.disagreeBtn}
              </button>

              <button
                onClick={handleAgree}
                className="px-6 py-3 bg-gold text-black hover:opacity-90 transition-all text-sm tracking-widest uppercase shadow-lg shadow-gold/20 hover:-translate-y-0.5"
              >
                {data.agreeBtn}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}