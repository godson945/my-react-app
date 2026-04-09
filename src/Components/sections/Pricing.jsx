import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-[var(--color-medical-primary)] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-4 space-y-4">

  <h3 className="text-[var(--color-medical-accent)] font-semibold uppercase tracking-widest text-xs">
    Flexible Plans
  </h3>

  <h2 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-medical-highlight)] leading-[1.25] tracking-tight">
    Choose Your Pathway
  </h2>

  <p className="text-[var(--color-medical-text-dim)] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
    Scalable solutions for individual professionals and large healthcare institutions.
  </p>

</div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <ScrollReveal direction="left" width="100%">
          <div className="glass-panel rounded-3xl p-10 h-full relative group bg-white border border-[var(--color-medical-accent)]/10 hover:border-[var(--color-medical-accent)]/30 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-medical-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-[var(--color-medical-highlight)] mb-2 mt-4">Institutional Access</h3>
              <p className="text-[var(--color-medical-text-dim)] mb-8 text-sm h-10 text-justify">For Hospitals, Universities & Training Centers requiring full administrative control.</p>

              <div className="space-y-4 mb-10">
                {[
                  "Dedicated Admin Dashboard",
                  "Student Performance Analytics",
                  "Custom Scenario Builder",
                  "API Integration Support",
                  "Priority 24/7 Support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-[var(--color-medical-text-dim)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)] mr-4 flex-shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>

              <a href="#contact" className="block w-full text-center py-4 rounded-3xl bg-white border border-[var(--color-medical-accent)]/20 text-[var(--color-medical-text)] font-bold hover:bg-[var(--color-medical-accent)] hover:text-white hover:border-[var(--color-medical-accent)] transition-all duration-300 shadow-sm">
                Contact Sales
              </a>
            </div>
          </div>
        </ScrollReveal>


        <ScrollReveal direction="right" width="100%" delay={0.2}>
          <div className="rounded-3xl p-10 h-full relative overflow-hidden group border border-[var(--color-medical-accent)]/20 bg-gradient-to-br from-white via-white to-[var(--color-medical-secondary)] shadow-sm hover:shadow-2xl transition-all duration-500">
            {/* Highlight Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-medical-accent)] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-end items-start mb-6">
                <span className="px-3 py-1 bg-[var(--color-medical-accent)]/20 text-[var(--color-medical-accent)] text-xs font-bold uppercase rounded-full border border-[var(--color-medical-accent)]/30">Most Popular</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[var(--color-medical-highlight)] mb-2">Pro Individual</h3>
              <p className="text-[var(--color-medical-text-dim)] mb-8 text-sm h-10 text-justify">For Doctors, Nurses & Specialists seeking advanced certification.</p>

              <div className="space-y-4 mb-10">
                {[
                  "Unlimited VR Module Access",
                  "Global Certification",
                  "Offline Mode",
                  "Peer-to-Peer Feedback",
                  "Monthly Skill Assessment"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-[var(--color-medical-text)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)] mr-4 flex-shrink-0 shadow-sm"></div>
                    {item}
                  </div>
                ))}
              </div>

              <a href="#signup" className="block w-full text-center py-4 rounded-3xl bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Get Started Now
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    
    </section >
  );
};

export default Pricing;
