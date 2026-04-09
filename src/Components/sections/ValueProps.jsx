import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const ValueProps = () => {
  const features = [
    {
      title: "Simulation-First Learning",
      description: "Go beyond traditional lectures with immersive, hands-on scenarios that reflect real clinical situations."
    },
    {
      title: "Real-World Clinical Scenarios",
      description: "Practice on authentic cases designed by medical experts to build confidence and decision-making skills."
    },
    {
      title: "Performance-Driven Insights",
      description: "Track progress with detailed analytics and feedback to improve skills and ensure clinical competency."
    }
  ];

  return (
    <section id="about" className="py-28 bg-[var(--color-medical-primary)] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-medical-accent)]/4 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* CENTER HEADER */}
        <ScrollReveal width="100%">
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-medical-highlight)] leading-tight">
              What is SIMLAB?
            </h2>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              A simulation-driven platform designed to deliver real-world clinical training, improve decision-making, and enhance practical skills.
            </p>

          </div>
        </ScrollReveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-14">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 
              hover:border-[var(--color-medical-accent)]/30 
              transition-all duration-300 
              shadow-sm hover:shadow-md 
              space-y-4"
            >
              {/* LEFT ALIGNED CONTENT */}
              <h3 className="text-xl font-semibold text-[var(--color-medical-highlight)] text-left">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-base text-left">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValueProps;