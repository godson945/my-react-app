import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const VRLearning = () => {
  const features = [
    {
      title: "3D Anatomy Exploration",
      desc: "Visualize complex anatomical structures in high definition.",
      videoId: "3d43advxR3k"
    },
    {
      title: "Emergency Scenarios",
      desc: "Manage critical patients in realistic virtual ER settings.",
      img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Virtual ICU Training",
      desc: "Master ventilator settings and patient monitoring protocols.",
      videoId: "gvlGAdmFaRc"
    }
  ];

  return (
    <section id="vr-learning" className="py-32 bg-[var(--color-midnight-purple)] relative overflow-hidden">

      {/* Stronger background focus */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[var(--color-neon-purple)]/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-deep-indigo)]/15 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center space-y-5 max-w-3xl mx-auto mb-20">

            <p className="text-xs font-semibold tracking-wide uppercase text-blue-400">
              Immersive VR Experience
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Experience the Future with{" "}
              <span className="text-[var(--color-neon-purple)]">
                SimLabsXR
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              Step into high-fidelity virtual environments designed to replicate real-world clinical scenarios — enabling safe, immersive, and effective training.
            </p>

          </div>
        </ScrollReveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 
              hover:border-[var(--color-neon-purple)]/50 
              transition-all duration-300 
              shadow-md hover:shadow-xl"
            >

              {/* MEDIA */}
              <div className="h-56 overflow-hidden">
                {feature.videoId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${feature.videoId}?autoplay=1&mute=1&loop=1&playlist=${feature.videoId}&playsinline=1`}
                    title={feature.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                  ></iframe>
                ) : (
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-7 space-y-3 text-left">

                <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-neon-purple)] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
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

export default VRLearning;