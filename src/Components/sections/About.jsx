import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[var(--color-medical-secondary)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-medical-accent)]/4 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto  px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <ScrollReveal>
            <div className="relative space-y-6 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-medical-accent)]/10 border border-[var(--color-medical-accent)]/20 ">
                    <span className="text-[var(--color-medical-accent)] text-xs font-bold uppercase tracking-widest">Our Methodology</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight text-[var(--color-medical-highlight)]">
                    Bridging Theory & <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]">Clinical Reality</span>
                </h2>
                <p className="text-[var(--color-medical-text-dim)] text-lg leading-relaxed mb-8 text-justify">
                    We don't just teach modules; we simulate pressure. Our high-fidelity environments replicate the chaos and complexity of real-world medicine, allowing you to master critical decision-making without patient risk.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-[var(--color-medical-accent)]/10 
shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
                        <h4 className="text-[var(--color-medical-highlight)] font-semibold text-lg">Zero-Risk Learning</h4>
                        <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed">Mistakes here are lessons, not liabilities.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 transition-all shadow-sm">
                        <h4 className="text-[var(--color-medical-highlight)] font-semibold text-lg">High Fidelity</h4>
                        <p className="text-[var(--color-medical-text-dim)] text-sm leading-relaxed">State-of-the-art manikins and haptics.</p>
                    </div>
                </div>
            </div>
          </ScrollReveal>
          
          {/* Visual Side - Bento Grid */}
          <div className="grid grid-cols-2 gap-5 relative">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 h-64 rounded-2xl overflow-hidden relative border border-white/10 group"
             >
                <img 
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Simulation Team" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-medical-primary)] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                    <div className="text-[var(--color-medical-highlight)] font-bold text-xl">Team Dynamics</div>
                    <div className="text-[var(--color-medical-accent)] text-sm font-semibold">Crisis Resource Management</div>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="h-48 rounded-3xl overflow-hidden relative border border-white/10 group"
             >
                <img 
                    src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Equipment" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-[var(--color-medical-primary)]/40 group-hover:bg-transparent transition-colors duration-300"></div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="h-48 rounded-3xl bg-gradient-to-br from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] p-6 flex flex-col justify-between text-white relative overflow-hidden group shadow-lg"
             >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div>
                    <div className="font-bold text-3xl">ISO</div>
                    <div className="font-medium opacity-80 text-sm">Certified Center</div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
