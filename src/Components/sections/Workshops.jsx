import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Workshops = () => {
  return (
    <section id="workshops" className="py-24 bg-[var(--color-medical-primary)] relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-medical-accent)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
             <div className="text-center mb-16 relative z-10">
                 <h2 className="text-[var(--color-medical-accent)] font-bold tracking-wide uppercase text-sm mb-3">Institutional Solutions</h2>
                 <h3 className="font-display text-4xl font-bold text-white">Simulation Workshops</h3>
                 <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto text-justify">Customized on-site training programs for hospitals, universities, and emergency response teams.</p>
             </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="glass-panel rounded-3xl p-8 hover:border-[var(--color-medical-accent)]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-medical-accent)]/20 flex items-center justify-center text-[var(--color-medical-accent)] mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h4 className="font-bold text-2xl text-white mb-4">Hospital-Based Programs</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-justify">
                    We bring the simulation lab to your facility. Our instructors conduct in-situ simulations to test your systems, equipment protocols, and team dynamics in your actual clinical environment.
                </p>
                <ul className="space-y-3 mb-8">
                    {[
                        "ICU & ER Protocols",
                        "New Equipment Orientation",
                        "Code Blue Mock Drills"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                             <div className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)]"></div>
                             {item}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 border border-[var(--color-medical-accent)] text-[var(--color-medical-accent)] font-semibold rounded-lg hover:bg-[var(--color-medical-accent)] hover:text-white transition-all cursor-pointer">
                    Request Proposal
                </button>
            </div>

            <div className="glass-panel rounded-3xl p-8 hover:border-[var(--color-medical-accent)]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-medical-highlight)]/20 flex items-center justify-center text-[var(--color-medical-highlight)] mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <h4 className="font-bold text-2xl text-white mb-4">College & Academic Workshops</h4>
                <p className="text-slate-400 mb-6 leading-relaxed text-justify">
                    Partner with us to enhance your medical or nursing curriculum. We provide ready-to-deploy simulation modules that bridge the gap between classroom theory and clinical practice.
                </p>
                <ul className="space-y-3 mb-8">
                    {[
                        "Curriculum Integration",
                        "Semester-End Competency Assessments",
                        "Faculty Development"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                             <div className="w-2 h-2 rounded-full bg-[var(--color-medical-highlight)]"></div>
                             {item}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 border border-[var(--color-medical-accent)] text-[var(--color-medical-accent)] font-semibold rounded-lg hover:bg-[var(--color-medical-accent)] hover:text-white transition-all cursor-pointer">
                    Contact Academic Team
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
