import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import brandImage from '../../assets/simlab-brand-montage.png';
import dragerLogo from '../../assets/Drager_Logo.svg';

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-[var(--color-midnight-purple)] relative overflow-hidden text-center border-t border-[var(--color-neon-purple)]/10">
      {/* Background Mix Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[var(--color-neon-purple)]/10 to-[var(--color-deep-indigo)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal width="100%" scale={1.05}>
          <h2 className="font-display text-2xl font-bold mb-8 text-[var(--color-neon-purple)] uppercase tracking-[0.3em] text-sm drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">Partnership Model</h2>
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[var(--color-neon-purple)]/20 hover:border-[var(--color-neon-purple)]/40 transition-all duration-700 shadow-2xl relative overflow-hidden group">
             {/* Dynamic Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 via-transparent to-[var(--color-deep-indigo)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
 
            <p className="text-2xl mb-10 font-light italic text-slate-200 relative z-10 leading-relaxed">
              "We dictate the technology, they provide the clinical expertise."
            </p>
            <div className="flex flex-col items-center relative z-10">
              <img src={dragerLogo} alt="Dräger Logo" className="h-12 mb-3" />
              <div className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--color-neon-purple)] mb-8 opacity-80">Medical Academy</div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent mb-8"></div>
              <div className="text-xl text-[var(--color-medical-highlight)] font-display font-bold mb-4 tracking-wide">Advanced Medical Equipment Training</div>
              <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed text-center group-hover:text-slate-300 transition-colors mb-12">
                SIMLAB licenses and integrates premium simulation content from Dräger Medical Academy under strict platform governance and quality standards.
              </p>

              {/* Native Vector Image Placement */}
              <div className="w-full max-w-md mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.15)] border border-[var(--color-medical-accent)]/20 relative group/img bg-white/5 p-3 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-medical-primary)] to-transparent opacity-30 group-hover/img:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
                 <img 
                    src={brandImage} 
                    alt="Simlab Platform Aesthetics" 
                    className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 rounded-2xl filter brightness-110 contrast-125 saturate-150"
                 />
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
