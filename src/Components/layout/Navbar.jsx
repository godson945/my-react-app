import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import simlabLogo from '../../assets/simlab-logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'VR Learning', href: '#vr-learning' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? 'bg-white/90 backdrop-blur-md  border-[var(--color-neon-purple)]/20 py-2 shadow-2xl'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]  origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={simlabLogo}
              alt="Simlab Logo"
              className="h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-black text-3xl tracking-tighter text-[var(--color-medical-text)]">
              SIM<span className="text-[var(--color-medical-accent)]">LAB</span>
            </span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center lg:gap-8 md:gap-4 ml-auto">

            {/* Nav Links Container */}
            <div className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-2 py-1 transition-colors">

              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.02 }}
                  className={`relative lg:px-5 md:px-3 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1 group ${activeSection === item.href.replace('#', '')
                      ? 'text-[var(--color-medical-accent)] bg-gray-100'
                      : 'text-gray-700 hover:text-[var(--color-medical-accent)] hover:bg-gray-100'
                    }`}
                >
                  {item.name}

                  {/* Subtle Underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-neon-purple)]"
                    whileHover={{ width: '25%' }}
                  />
                </motion.a>
              ))}

            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4 pl-4">
              <a
                href="#demo"
                className="px-6 py-2.5 bg-[var(--color-neon-purple)] text-white rounded-full font-semibold hover:opacity-90 transition"
              >
                Request a Demo
              </a>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-white' : 'text-[var(--color-medical-text)]'} hover:text-[var(--color-neon-purple)] focus:outline-none p-2 ${isScrolled ? 'bg-white/10 border-white/10' : 'bg-black/5 border-black/10'} rounded-lg border transition-all`}
            >
              {isScrolled && isMobileMenuOpen ? <X className="h-6 w-6" /> : isScrolled ? <Menu className="h-6 w-6" /> : isMobileMenuOpen ? <X className="h-6 w-6 text-[var(--color-medical-text)]" /> : <Menu className="h-6 w-6 text-[var(--color-medical-text)]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-midnight-purple)] border-b border-[var(--color-neon-purple)]/20 shadow-2xl py-6 px-4 flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-[var(--color-neon-purple)] font-medium text-lg block border-b border-white/5 pb-2 px-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a href="#demo" className="bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-deep-indigo)] text-white font-bold py-3 px-4 rounded-xl text-center block shadow-lg mt-4">
            Book Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
