import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const InstitutionControl = () => {
  const controls = [
    {
      title: "Simulation-Based Learning",
      description: "Immersive, risk-free training scenarios that bridge the gap between theory and practice."
    },
    {
      title: "Enterprise-Grade Security",
      description: "Advanced data protection and compliance standards for sensitive institutional records."
    },
    {
      title: "Scalable & Multi-Tenant",
      description: "Seamlessly manage multiple departments and campuses from a single centralized dashboard."
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-[var(--color-medical-accent)]/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="text-center max-w-2xl mx-auto mb-16 px-4 space-y-3 relative z-10">

            <h3 className="text-[var(--color-medical-accent)] font-semibold uppercase tracking-widest text-xs">
              Global Standards
            </h3>

            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-medical-highlight)] leading-snug tracking-tight">
              Trusted by Medical Institutions Worldwide
            </h2>

            <p className="text-[var(--color-medical-text-dim)] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Empowering institutions across the globe with advanced tools for scalable medical training and management.
            </p>

          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {controls.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 transition-all duration-300 shadow-sm hover:shadow-lg group"
            >
              <h4 className="font-bold text-xl text-[var(--color-medical-highlight)] mb-3 group-hover:text-[var(--color-medical-accent)] transition-colors mt-4">
                {item.title}
              </h4>
              <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed mb-6 text-justify">
                {item.description}
              </p>
              <div className="flex items-center text-[var(--color-medical-accent)] font-semibold text-sm group/link cursor-pointer">
                <span>Learn more →</span>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="glass-panel rounded-3xl p-8 bg-white border border-[var(--color-medical-accent)]/10 relative z-10 text-center max-w-2xl mx-auto overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-medical-accent)]/5 to-transparent"></div>
            <p className="text-[var(--color-medical-text-dim)] text-sm uppercase tracking-wider font-semibold mb-2 relative z-10">
              Official Content Partner
            </p>
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-medical-highlight)] relative z-10">
              Training content powered by <span className="text-[var(--color-medical-accent)]">Dräger Medical Academy</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstitutionControl;
