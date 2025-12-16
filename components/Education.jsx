'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-black text-white snap-start"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* TEXT COLUMN (spans 2/3) */}
        <div className="lg:col-span-2 space-y-12">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h2>

          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* DEGREE */}
            <div className="border-l-2 border-cyan-500 pl-6">
              <h3 className="text-2xl font-semibold">
                B.S. in Computer Science
              </h3>
              <p className="mt-1 text-gray-400">University of Toledo</p>
              <p className="text-gray-400">Expected Graduation: Fall 2025</p>
            </div>

            {/* COURSEWORK */}
            <div className="border-l-2 border-cyan-500 pl-6">
              <h3 className="text-2xl font-semibold">
                Relevant Coursework
              </h3>
              <ul className="mt-2 list-disc list-inside space-y-2 text-gray-300">
                <li>Algorithms & Data Structures</li>
                <li>Operating Systems & System Programming</li>
                <li>Data Communications & Networking</li>
                <li>Machine Learning & AI</li>
                <li>Theory of Computation</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* BLEED ICON (spans 1/3) */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center relative">
          <FaUniversity
            className="absolute text-cyan-500 text-[7rem] opacity-10 -right-12"
          />
        </div>
      </div>

      {/* SHAPE DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-12"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0 0v120h1200V0L0 0z"
            className="fill-current text-black"
          />
        </svg>
      </div>
    </section>
  );
}
