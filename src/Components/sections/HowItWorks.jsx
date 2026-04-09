import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: "Register", description: "Institution or Individual creates a secure account." },
    { id: 2, title: "Select Module", description: "Browse the extensive simulation-based training library." },
    { id: 3, title: "Simulate", description: "Perform real-life medical scenarios in VR or browser." },
    { id: 4, title: "Certify", description: "Get evaluated, graded & certified automatically." }
  ];

  return (
    <section className="py-32 bg-[var(--color-medical-primary)] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(var(--color-medical-accent) 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-medical-highlight)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-wide uppercase text-blue-500">
              Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-medical-highlight)] leading-tight">
              How SIMLAB Works
            </h2>
          </div>
        </ScrollReveal>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >

              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-medical-accent)]/5 to-transparent transform -translate-x-8"></div>
              )}

              <div className="p-6 rounded-2xl h-full border border-[var(--color-medical-accent)]/10 bg-white hover:border-[var(--color-medical-accent)]/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col space-y-4">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-medical-accent)] text-white font-semibold text-lg">
                    {step.id}
                  </div>

                  <h4 className="text-lg font-semibold text-[var(--color-medical-highlight)]">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[var(--color-medical-text-dim)] text-base leading-relaxed">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;