import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const Difference = () => {
  const differentiators = [
    {
      title: "Decision-Based Scenarios",
      description: "Branching clinical paths where every choice impacts the patient outcome."
    },
    {
      title: "Equipment Workflows",
      description: "Replica interfaces of real medical devices for authentic operational training."
    },
    {
      title: "Outcome-Driven",
      description: "Evaluation based on latest clinical guidelines and patient safety metrics."
    },
    {
      title: "Mistake-Safe",
      description: "Learn from critical errors in a risk-free virtual environment."
    }
  ];

  return (
    <section id="difference" className="py-24 bg-[var(--color-midnight-purple)] overflow-hidden relative">
        {/* Background Accents (Neon Purple/Blue Immersion) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-deep-indigo)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <ScrollReveal width="100%" direction="left">
               <h2 className="text-[var(--color-neon-purple)] font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">The Difference</h2>
               <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-medical-highlight)]">What Makes SIMLAB Different?</h3>
            </ScrollReveal>
            <ScrollReveal width="100%" delay={0.1} direction="left">
              <p className="text-lg text-slate-300 mb-10 leading-relaxed text-justify">
                True-to-life medical simulations that bridge the gap between theory and practice. We focus on the consequences of decisions.
              </p>
            </ScrollReveal>
            
            <ul className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 rounded-[1.5rem] transition-all duration-300 bg-white/5 border border-[var(--color-neon-purple)]/20 hover:border-[var(--color-neon-purple)]/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group backdrop-blur-xl"
                >
                  <div className="w-full">
                    <h4 className="font-display font-bold text-lg text-[var(--color-medical-highlight)] mb-2 group-hover:text-[var(--color-neon-purple)] transition-colors">{item.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed text-justify group-hover:text-slate-200 transition-colors">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <ScrollReveal width="100%" direction="right" delay={0.2}>
              <div className="relative aspect-square p-8 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-purple)]/40 to-[var(--color-deep-indigo)]/40 rounded-3xl transform rotate-3 scale-95 z-0 blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-[var(--color-midnight-purple)] rounded-3xl transform -rotate-3 z-0 border border-[var(--color-neon-purple)]/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Doctor using tablet" 
                  className="relative rounded-2xl shadow-2xl z-10 border border-[var(--color-neon-purple)]/20 brightness-90 contrast-110 grayscale-[20%] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 w-full h-full object-cover"
                />


              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
