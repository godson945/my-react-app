import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const Training = () => {
    const trainingModules = [
        {
            id: 1,
            category: "Online Learning",
            description: "Accessible, flexible learning designed for healthcare professionals on the go.",
            features: [
                "Free introductory courses on ventilator operation",
                "Live virtual sessions hosted by Dräger experts",
                "Interactive Q&A and real-world device applications",
                "Customized learning paths"
            ],
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            imageAlt: "Online medical training interface",
            accent: "from-[var(--color-medical-accent)] to-[var(--color-medical-highlight)]"
        },
        {
            id: 2,
            category: "Onsite Workshops",
            description: "Hands-on mastery with real equipment in a supervised clinical setting.",
            features: [
                "Practical sessions focused on advanced device skills",
                "Hands-on practice with ventilators & anaesthesia",
                "Tailored workshops for ICU and Neonatal care",
                "Direct guidance from clinical specialists"
            ],
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            imageAlt: "Clinical workshop hands-on",
            accent: "from-blue-500 to-blue-600"
        },
        {
            id: 3,
            category: "VR Simulation",
            description: "Risk-free training in realistic virtual environments with Dräger Virtuo.",
            features: [
                "Realistic VR environments simulating ICU & ER",
                "Practice stabilising preterm infants",
                "Ventilator setup & troubleshooting walkthroughs",
                "Emergency response coordination training"
            ],
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            imageAlt: "VR Medical Training",
            accent: "from-purple-500 to-indigo-600"
        },
        {
            id: 4,
            category: "Sim Labs",
            description: "High-fidelity team simulations for complex clinical workflows.",
            features: [
                "Functional stations with high-fidelity manikins",
                "Routine to emergency response scenarios",
                "Team-based drills for improved communication",
                "Safe setting to repeat and master critical tasks"
            ],
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            imageAlt: "Simulation Lab Setup",
            accent: "from-emerald-500 to-teal-600"
        }
    ];

  return (
    <section id="training" className="py-32 bg-[var(--color-medical-primary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
                 <h2 className="text-[var(--color-medical-accent)] font-bold tracking-wide uppercase text-sm mb-3">Comprehensive Education</h2>
                 <h3 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-medical-highlight)] mb-6">Available Learning Formats</h3>
                 <p className="text-[var(--color-medical-text-dim)] text-lg leading-relaxed text-justify">
                    From remote digital courses to immersive virtual reality and high-fidelity onsite simulations. Choose the learning experience that fits your needs.
                 </p>
            </div>
        </ScrollReveal>

        {/* Learning Modules */}
        <div className="space-y-24">
            {trainingModules.map((module, index) => (
                <div key={module.id} className="relative group">
                    {/* Connection Line */}
                    {index !== trainingModules.length - 1 && (
                        <div className="absolute left-1/2 bottom-[-96px] w-[2px] h-24 bg-gradient-to-b from-[var(--color-medical-accent)]/20 to-transparent hidden lg:block"></div>
                    )}

                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                        
                        {/* Content Side */}
                        <div className="lg:w-1/2">
                            <ScrollReveal width="100%" direction={index % 2 === 0 ? "left" : "right"}>
                                <div className={`glass-panel p-8 md:p-12 rounded-3xl border border-[var(--color-medical-accent)]/10 relative overflow-hidden group-hover:border-[var(--color-medical-accent)]/30 transition-all duration-500 shadow-sm hover:shadow-xl bg-white`}>
                                    {/* Accent Glow */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${module.accent} rounded-full blur-[100px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`}></div>

                                    <div className="relative z-10">
                                         <h3 className="text-3xl font-display font-bold text-[var(--color-medical-highlight)] mb-4">{module.category}</h3>
                                        <p className="text-lg text-[var(--color-medical-text-dim)] mb-8 leading-relaxed text-justify">
                                            {module.description}
                                        </p>
                                        
                                        <ul className="space-y-4 mb-8">
                                            {module.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="w-5 h-5 text-[var(--color-medical-accent)] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <span className="text-[var(--color-medical-text-dim)]">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="inline-flex items-center text-[var(--color-medical-accent)] font-bold hover:text-[var(--color-medical-highlight)] transition-colors group/btn">
                                            Explore This Format
                                            <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Image Side */}
                        <div className="lg:w-1/2 w-full">
                            <ScrollReveal width="100%" direction={index % 2 === 0 ? "right" : "left"}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-medical-accent)]/10 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-shadow duration-500 h-[400px]">
                                    <img 
                                        src={module.image} 
                                        alt={module.imageAlt} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-white/10 transition-opacity duration-500 group-hover:opacity-0"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-60"></div>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default Training;
