import React from 'react';
import simlabLogo from '../../assets/simlab-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[var(--color-medical-accent)]/10 text-[var(--color-medical-text-dim)] pt-24 pb-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[var(--color-medical-accent)]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src={simlabLogo} 
                  alt="Simlab Logo" 
                  className="h-12 w-12 object-contain" 
                />
              </div>
              <span className="font-display font-bold text-2xl text-[var(--color-medical-text)] tracking-tight">SIM<span className="text-[var(--color-medical-accent)]">LAB</span></span>
            </div>
            <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed max-w-xs">
              Empowering healthcare professionals with next-generation simulation training. Master critical skills in a risk-free environment.
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-[var(--color-medical-highlight)] font-display font-bold text-lg mb-6 flex items-center gap-2">
                Platform
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical-accent)]"></span>
            </h3>
            <ul className="space-y-4">
              {['Virtual Simulations', 'Skill Assessment', 'Institutional Dashboard', 'Certified Authors', 'Integration API'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--color-medical-accent)] transition-colors flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-[var(--color-medical-highlight)] font-display font-bold text-lg mb-6 flex items-center gap-2">
                Company
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-medical-highlight)]"></span>
            </h3>
            <ul className="space-y-4">
              {['About SIMLAB', 'Careers', 'Blog', 'Press Kit', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--color-medical-accent)] transition-colors flex items-center gap-2 group">
                     <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-[var(--color-medical-highlight)] font-display font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-sm text-[var(--color-medical-text-dim)] mb-6">
              Subscribe to our newsletter for the latest simulation scenarios and medical updates.
            </p>
            <div className="space-y-3">
              <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-[var(--color-medical-secondary)] border border-[var(--color-medical-accent)]/10 rounded-3xl pl-12 pr-4 py-3 text-sm text-[var(--color-medical-text)] focus:outline-none focus:border-[var(--color-medical-accent)] transition-all placeholder:text-[var(--color-medical-text-dim)]/50"
                  />
              </div>
               <button className="w-full bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white px-4 py-3 rounded-3xl text-sm font-bold transition-all shadow-md hover:shadow-xl cursor-pointer">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-medical-accent)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; 2026 SIMLAB. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-[var(--color-medical-accent)] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
