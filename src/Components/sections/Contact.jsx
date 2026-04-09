import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-[var(--color-midnight-purple)] overflow-hidden">
        {/* Background Accents (Neon Purple Immersion) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-deep-indigo)]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                 <h2 className="text-[var(--color-neon-purple)] font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Get in Touch</h2>
                 <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[var(--color-medical-highlight)]">Start Your Simulation Journey</h3>
                 <p className="text-slate-300 text-lg mb-10 leading-relaxed text-justify">
                    Whether you need to book a demo, inquire about institutional training, or register for a class, our team is here to help.
                 </p>
                 
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[var(--color-neon-purple)]/20 flex items-center justify-center text-[var(--color-neon-purple)] group-hover:scale-110 group-hover:border-[var(--color-neon-purple)]/60 transition-all duration-300 shadow-2xl backdrop-blur-xl">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                             <p className="text-sm text-slate-300 mb-1">Call Us</p>
                            <p className="font-display font-bold text-xl text-white group-hover:text-[var(--color-neon-purple)] transition-colors">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[var(--color-neon-purple)]/20 flex items-center justify-center text-[var(--color-neon-purple)] group-hover:scale-110 group-hover:border-[var(--color-neon-purple)]/60 transition-all duration-300 shadow-2xl backdrop-blur-xl">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                             <p className="text-sm text-slate-300 mb-1">Email Us</p>
                            <p className="font-display font-bold text-xl text-white group-hover:text-[var(--color-neon-purple)] transition-colors">training@simlab.edu</p>
                        </div>
                    </div>
                 </div>
            </div>
            
            <div className="rounded-3xl p-8 bg-white/5 border border-[var(--color-neon-purple)]/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group/form">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-purple)]/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-500"></div>
                <form className="relative z-10 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] outline-none transition-all placeholder:text-slate-600 text-white" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] outline-none transition-all placeholder:text-slate-600 text-white" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] outline-none transition-all placeholder:text-slate-600 text-white" placeholder="john@hospital.com" />
                    </div>
                     <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Interested In</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] outline-none transition-all text-slate-300">
                            <option className="bg-[var(--color-midnight-purple)]">Institutional Training</option>
                            <option className="bg-[var(--color-midnight-purple)]">VR Solutions</option>
                            <option className="bg-[var(--color-midnight-purple)]">Individual Courses</option>
                            <option className="bg-[var(--color-midnight-purple)]">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-400 mb-2">Message</label>
                        <textarea className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-[var(--color-neon-purple)] focus:ring-1 focus:ring-[var(--color-neon-purple)] outline-none transition-all h-32 placeholder:text-slate-600 text-white" placeholder="Tell us about your training needs..."></textarea>
                    </div>
                    <button className="w-full py-4 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-deep-indigo)] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5">
                        Send Message
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-4">
                        By submitting this form, you agree to our privacy policy.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
