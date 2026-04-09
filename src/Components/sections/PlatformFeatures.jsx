import React from 'react';
import { motion } from 'framer-motion';

import ScrollReveal from '../ui/ScrollReveal';

const PlatformFeatures = () => {
  const features = [
    { 
      title: "Multi-Tenant Management", 
      desc: "Manage multiple departments or campuses from a single, centralized dashboard with hierarchy controls.",
      color: "from-[var(--color-medical-accent)]/20 to-[var(--color-medical-highlight)]/10"
    },
    { 
      title: "Real-Life Modules", 
      desc: "High-fidelity simulations for specialized equipment, respiratory care, and complex clinical procedures.",
      color: "from-[var(--color-medical-highlight)]/20 to-[var(--color-medical-accent)]/10"
    },
    { 
      title: "Progress Tracking", 
      desc: "Comprehensive analytics reporting on individual and cohort performance over time with trend analysis.",
      color: "from-[var(--color-medical-highlight)]/20 to-blue-600/10"
    },
    { 
      title: "Trainer Dashboards", 
      desc: "Real-time monitoring and active assessment tools for instructors to guide students through simulations.",
      color: "from-[var(--color-medical-accent)]/20 to-[var(--color-medical-highlight)]/10"
    },
    { 
      title: "Automated Certification", 
      desc: "Instant grading and secure certificate generation upon successful module completion and validation.",
      color: "from-[var(--color-medical-highlight)]/20 to-teal-500/10"
    },
    { 
      title: "Global Cloud Access", 
      desc: "Secure, low-latency cloud-based platform accessible from anywhere, ensuring seamless training continuity.",
      color: "from-[var(--color-medical-accent)]/20 to-indigo-500/10"
    }
  ];

  return (
    <section id="features" className="py-32 bg-[var(--color-medical-secondary)] relative overflow-hidden">
      {/* Background Decorative Blurs - Unified with medical palette */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-medical-highlight)]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <ScrollReveal width="100%">
          <div className="space-y-6 max-w-xl mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-medical-accent)]/10 border border-[var(--color-medical-accent)]/20  backdrop-blur-md">
                <span className="text-[var(--color-medical-accent)] font-bold tracking-wider uppercase text-xs">Platform Architecture</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-[var(--color-medical-highlight)] leading-tight">
              Powerful Features for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] italic">Next-Gen Simulation</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 shadow-[0_4px_20px_rgba(99,102,241,0.06)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Top Glow Border */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${feature.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="flex flex-col h-full z-10 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a2540] text-white font-display font-bold text-lg shadow-[0_4px_15px_rgba(10,37,64,0.3)] border border-[#0a2540]/20 group-hover:bg-[#1a365d] transition-all duration-300">
                    0{index + 1}
                  </div>
                  <h4 className="font-display font-bold text-xl text-[var(--color-medical-highlight)] group-hover:text-[var(--color-medical-accent)] transition-colors leading-tight">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-[var(--color-medical-text-dim)] leading-relaxed text-left text-sm">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;

