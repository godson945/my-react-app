import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/sections/Hero';
import Partners from './Components/sections/Partners';
import About from './Components/sections/About';
import PlatformFeatures from './Components/sections/PlatformFeatures';
import ValueProps from './Components/sections/ValueProps';
import VRLearning from './Components/sections/VRLearning';
import HowItWorks from './Components/sections/HowItWorks';
import Training from './Components/sections/Training';
import Programs from './Components/sections/Programs';
import Audience from './Components/sections/Audience';
import InstitutionControl from './Components/sections/InstitutionControl';
import Difference from './Components/sections/Difference';

import Pricing from './Components/sections/Pricing';
import CTA from './Components/sections/CTA';
import Contact from './Components/sections/Contact';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-[#00B3B3] selection:text-white bg-slate-50">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Hero />
        <About />
        <PlatformFeatures />
        <ValueProps />
        <VRLearning />
        <HowItWorks />
        <Training />
        <Partners />
        <Programs />
        <Audience />
        <InstitutionControl />
        <Difference />
        <Pricing />
        <CTA />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
