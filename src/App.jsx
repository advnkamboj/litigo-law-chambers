import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Disclaimer from './components/layout/Disclaimer';
import WelcomeModal from './components/layout/WelcomeModal';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Courts from './components/sections/Courts';
import Team from './components/sections/Team';
import Values from './components/sections/Values';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

// Wrapper component to use the theme context
function MainSite() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Wait for components to mount before attaching GSAP animations
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            }
          }
        );
      });

      const heroReveals = document.querySelectorAll('#home .reveal');
      if (heroReveals.length) {
        gsap.fromTo(heroReveals,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
        );
      }
    });

    // Intersection Observer for highlighting active nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a.nav-link');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('text-gold');
            link.classList.add('text-muted-foreground');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('text-gold');
              link.classList.remove('text-muted-foreground');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));

    return () => {
      ctx.revert(); // clean up gsap context
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      <WelcomeModal />
      <div className="fixed inset-0 pointer-events-none z-9999 opacity-40 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')]"></div>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Services />
      <Courts />
      {/* <Team /> */}
      <Values />
      <Contact />
      <Footer />
    </div>
  );
}

// Route protector component
function ProtectedRoute({ children }) {
  const hasAgreed = localStorage.getItem('disclaimerAgreed') === 'true';
  const location = useLocation();

  if (!hasAgreed) {
    return <Navigate to="/disclaimer" state={{ from: location }} replace />;
  }
  return children;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/*" element={
            <ProtectedRoute>
              <MainSite />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
