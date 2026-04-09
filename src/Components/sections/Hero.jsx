import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/hero_bg.png';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 1000], [0, 20]);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[var(--color-medical-primary)]">
            {/* Dynamic Background with Parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-medical-accent)] opacity-5 rounded-full blur-[150px] animate-pulse-glow"
                ></motion.div>
                <motion.div
                    style={{ y: y2, animationDelay: '2s' }}
                    className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[var(--color-medical-highlight)] opacity-5 rounded-full blur-[150px] animate-pulse-glow"
                ></motion.div>

                {/* Floating Shapes */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-[var(--color-medical-accent)]/10 rounded-full blur-sm"
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-left max-w-xl space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-medical-secondary)] border border-[var(--color-medical-accent)]/20 backdrop-blur-md mb-8">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-medical-accent)] animate-pulse"></span>
                            <span className="text-[var(--color-medical-accent)] text-sm font-semibold tracking-wide uppercase">Next-Gen Medical Training</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-[var(--color-medical-highlight)] leading-tight">
                            Master Clinical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]">Perfection</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[var(--color-medical-text-dim)] leading-relaxed max-w-lg">
                            Experience the world's most advanced simulation platform.
                            Risk-free, high-fidelity environments for critical care, anaesthesia, and surgical training.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">

                            {/* Primary Button */}
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="px-7 py-3.5 bg-gradient-to-r from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)] 
        text-white rounded-xl font-semibold text-base shadow-lg 
        transition-all duration-300 ease-in-out 
        flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative z-10">
                                    Start Training
                                </span>
                            </motion.button>

                            {/* Secondary Button */}
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="px-7 py-3.5 bg-[var(--color-medical-secondary)] 
        border border-[var(--color-medical-accent)]/20 
        text-[var(--color-medical-text)] rounded-xl font-semibold text-base 
        transition-all duration-300 ease-in-out 
        flex items-center justify-center gap-2 shadow-sm 
        hover:bg-white/10"
                            >
                                Partner with Simlab
                            </motion.button>

                        </div>

                        {/* Stats */}
                    </motion.div>

                    {/* Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 animate-float-slow">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/5 bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/LDQxjY6pZ8k?autoplay=1&mute=1&loop=1&playlist=LDQxjY6pZ8k"
                                    title="Simlab Medical VR Training"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
