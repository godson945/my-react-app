import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import abstractLogo from '../../assets/simlab-blue-abstract.png';

const CTA = () => {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-white text-center">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-medical-primary)] to-[var(--color-medical-secondary)] opacity-90"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-medical-accent)] opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-medical-highlight)] opacity-10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">

        {/* Header */}
        <ScrollReveal width="100%">
          <div className="max-w-2xl mx-auto space-y-4 mb-12">

            <h2 className="font-display text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-[var(--color-medical-highlight)]">
              Build the Future of Medical Training <br />
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]">
                SIMLAB
              </span>
            </h2>

            <p className="text-[var(--color-medical-text-dim)] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Join leading institutions worldwide in transforming healthcare education through immersive, risk-free simulation technology.
            </p>

          </div>
        </ScrollReveal>

        {/* Middle Section */}
        <div className="border-y border-[var(--color-medical-accent)]/10 py-8 my-12 relative">

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <img 
              src={abstractLogo} 
              alt="Simlab Abstract Icon" 
              className="h-28 object-contain drop-shadow-[0_0_15px_rgba(27,117,188,0.4)] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <h3 className="text-xl md:text-2xl font-semibold mb-6 font-display text-[var(--color-medical-highlight)]">
            Why Choose SIMLAB?
          </h3>

          <div className="grid md:grid-cols-3 gap-y-3 gap-x-6 text-center md:text-left max-w-4xl mx-auto">
            {[
              "Simulation-first methodology",
              "Built for medical accuracy",
              "Scales for institutions",
              "Long-term platform support",
              "Enterprise-grade security"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)] flex-shrink-0"></div>
                <span className="text-[var(--color-medical-text-dim)] text-sm font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#demo" 
            className="px-8 py-3.5 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Request a Demo
          </a>

          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-white border border-[var(--color-medical-accent)]/20 text-[var(--color-medical-text)] rounded-2xl font-semibold text-base hover:bg-[var(--color-medical-secondary)] hover:border-[var(--color-medical-accent)]/40 transition-all duration-300 shadow-sm"
          >
            Contact Sales
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;