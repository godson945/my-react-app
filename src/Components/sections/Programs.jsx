import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const Programs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const programs = [
        { name: "Anaesthesia Workstations", category: "Critical Care", description: "Master the operation of modern anaesthesia delivery systems and gas monitoring with hands-on simulations." },
        { name: "Medical Ventilators", category: "Respiratory", description: "Advanced modes, weaning strategies, and troubleshooting for critical respiratory care scenarios." },
        {
            name: "Neonatal Care",
            category: "Pediatrics",
            description: "Thermoregulation techniques and gentle respiratory support for safe and effective newborn care."
        },
        { name: "Patient Monitoring", category: "Diagnostics", description: "Real-time interpretation of vital signs, arrhythmia detection, and comprehensive alarm management." },
        { name: "High-Frequency Ventilation", category: "Advanced Respiratory", description: "Expertise in HFOV strategies to protect delicate lungs in critical cases and reduce injury." },
        { name: "Lung Protective Strategies", category: "Safety Protocols", description: "Evidence-based ventilation protocols designed to prevent Ventilator-Induced Lung Injury (VILI)." },
        { name: "Device Application", category: "Technical Skills", description: "Hands-on configuration, regular maintenance, and rigorous safety checks for medical devices." },
        { name: "Workplace Design", category: "Ergonomics", description: "Optimizing clinical workspaces for maximum ergonomics, workflow efficiency, and infection control." }
    ];

    return (
        <section id="programs" className="py-28 bg-white relative overflow-hidden">


            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-medical-accent)] rounded-full blur-[128px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-medical-highlight)] rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">


                <ScrollReveal>
                    <div className="max-w-xl space-y-4 mb-16">

                        <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-medical-accent)]/10 border border-[var(--color-medical-accent)]/20 backdrop-blur-md">
                            <span className="text-[var(--color-medical-accent)] font-medium tracking-wide uppercase text-xs">
                                Certification & Skills
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-medical-highlight)] leading-tight tracking-tight">
                            Comprehensive Programs
                        </h2>

                        <p className="text-base md:text-lg text-[var(--color-medical-text-dim)] leading-relaxed">
                            Designed for specialists. Our curriculum covers the entire spectrum of critical care technology and clinical application.
                        </p>

                    </div>
                </ScrollReveal>


                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {programs.map((prog, i) => (
                        <ScrollReveal key={i} delay={i * 0.05} width="100%">
                            <motion.div
                                onHoverStart={() => setHoveredIndex(i)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ y: -6 }}
                                className="group relative h-full bg-white border border-[var(--color-medical-accent)]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-medical-accent)]/30 shadow-sm hover:shadow-md"
                            >

                                {/* Gradient Overlay (kept but softened) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-medical-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="p-6 relative z-10 flex flex-col h-full space-y-4">

                                    {/* Category */}
                                    <div className="flex justify-end">
                                        <span className="text-xs font-medium text-[var(--color-medical-text-dim)] bg-[var(--color-medical-secondary)] px-3 py-1 rounded-full border border-[var(--color-medical-accent)]/10">
                                            {prog.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-lg text-[var(--color-medical-highlight)] group-hover:text-[var(--color-medical-accent)] transition-colors duration-200">
                                        {prog.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--color-medical-text-dim)] text-base leading-relaxed flex-grow">
                                        {prog.description}
                                    </p>

                                    {/* Footer Animation (kept) */}
                                    <div className="flex items-center text-[var(--color-medical-accent)] text-sm font-semibold">
                                        <span className="relative overflow-hidden">
                                            <span className="inline-block transform group-hover:translate-y-[-100%] transition-transform duration-200">
                                                View Curriculum
                                            </span>
                                            <span className="absolute top-0 left-0 inline-block transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-200">
                                                Start Learning
                                            </span>
                                        </span>
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>

                                </div>

                                {/* Bottom Line Animation (kept) */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;