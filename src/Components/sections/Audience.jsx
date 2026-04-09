import React from "react";
import { FaUniversity, FaHospital, FaUserMd, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, container } from "../../utility/animation";

const AudienceData = [
  {
    id: 1,
    title: "Medical Colleges",
    desc: "Enhance curriculum with virtual labs and standardized patient scenarios to improve student readiness.",
    icon: <FaUniversity />,
  },
  {
    id: 2,
    title: "Healthcare Institutions",
    desc: "Continuous professional development and complex equipment training for staff.",
    icon: <FaHospital />,
  },
  {
    id: 3,
    title: "Healthcare Professionals",
    desc: "Upskill and maintain certification with convenient, anytime online simulations.",
    icon: <FaUserMd />,
  },
  {
    id: 4,
    title: "Medical Students",
    desc: "Practice clinical skills safely in a risk-free environment before meeting real patients.",
    icon: <FaUserGraduate />,
  },
];

const Audience = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
           viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 font-playfair"
        >

          <motion.div variants={SlideLeft} className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
              Who Can Benefit from SIMLAB?
            </h1>
            <p className="text-gray-500">
              Empowering learners and institutions with realistic, hands-on healthcare simulation experiences.
            </p>
          </motion.div>

          {/* CARDS */}
          {AudienceData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLeft}
              className="space-y-4 p-6 bg-white rounded-xl border border-gray-100   hover:border-[var(--color-medical-accent)]/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON */}
              <div className="text-blue-600 text-3xl bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg">
                {item.icon}
              </div>

              {/* TITLE */}
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
              </p>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default Audience;