import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Disclaimer() {
  const navigate = useNavigate();
  const [disagreed, setDisagreed] = useState(false);

  // If they already agreed, redirect to home immediately
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
      {/* Background grain */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')]"></div>

      <div className="max-w-3xl w-full bg-card border border-border p-6 md:p-8 shadow-2xl relative z-10 flex flex-col">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]"></div>

        {disagreed ? (
          <div className="text-center space-y-6 flex-1 flex flex-col justify-center py-10">
            <h2 className="font-display text-3xl font-light text-foreground">Access Denied</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              You must agree to the disclaimer to enter the website. Please close this window or tab.
            </p>
            <button
              onClick={() => setDisagreed(false)}
              className="px-8 py-3 border border-border text-foreground hover:border-gold hover:text-gold transition-colors text-sm tracking-widest uppercase mt-4 self-center"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6 shrink-0">
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">Disclaimer</h2>
              <div className="w-16 h-px bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="prose prose-sm prose-stone dark:prose-invert max-w-none mb-8 text-muted-foreground font-light leading-relaxed">
              <p className="mb-4">
                As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise.
                By clicking the <strong>"I Agree & Enter"</strong> button and accessing this website, you fully accept that you are seeking
                information of your own accord and volition and that no form of solicitation has taken place by Litigo Law Chambers or its members.
              </p>
              <p className="mb-4">
                The information provided under this website is solely available at your request for informational purposes only,
                should not be interpreted as soliciting or advertisement. In cases where the user has any legal issues,
                he/she in all cases must seek independent legal advice.
              </p>
              <p>
                Litigo Law Chambers is not liable for any consequence of any action taken by the user relying on material/information
                provided under this website.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0">
              <button
                onClick={handleDisagree}
                className="px-6 py-3 border border-border text-foreground hover:border-destructive hover:text-destructive transition-colors text-sm tracking-widest uppercase"
              >
                I Disagree
              </button>
              <button
                onClick={handleAgree}
                className="px-6 py-3 bg-gold text-black hover:opacity-90 transition-all text-sm tracking-widest uppercase shadow-lg shadow-gold/20 hover:-translate-y-0.5"
              >
                I Agree & Enter
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
