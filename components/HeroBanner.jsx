// components/HeroBanner.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSphere from './HeroSphere';

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="
        flex flex-col md:flex-row 
        bg-black text-white 
        md:h-screen           /* fullscreen only on desktop */
        "
    >
      {/* sphere Column */}
      <div
        className="
          w-full md:w-1/2 
          h-64 sm:h-96 md:h-full  /* fixed-ish height on mobile, full on desktop */
          relative overflow-hidden
        "
      >
        <HeroSphere />
      </div>

      {/* text Column */}
      <div
        className="
          w-full md:w-1/2 
          flex flex-col justify-center  /* vertical-center on desktop */
          items-center md:items-start 
          text-center md:text-left 
          px-6 py-12                    /* some breathing room on mobile */
        "
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Joseph.<br />
          A Computer Science Graduate looking for work
        </motion.h1>
        <motion.button
          onClick={() =>
            document
              .getElementById('projects')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="
            mt-4 px-6 py-3 
            bg-cyan-600 hover:bg-cyan-700 
            text-white rounded-lg shadow-lg
          "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          View Projects
        </motion.button>
      </div>
    </section>
  );
}

