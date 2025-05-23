// components/Education.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-[100vh] snap-start bg-black text-white"
    >
      <div className="max-w-4xl mx-auto py-20 px-4">
        <motion.h2
          className="mb-8 text-4xl font-bold"
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
          {/* degree */}
          <div className="border-l-2 border-cyan-500 pl-6">
            <h3 className="text-2xl font-semibold">B.S. in Computer Science</h3>
            <p className="mt-1 text-gray-400">University of Toledo</p>
            <p className="text-gray-400">Expected Graduation: Fall 2025</p>
          </div>

          {/* relevant coursework */}
          <div className="border-l-2 border-cyan-500 pl-6">
            <h3 className="text-2xl font-semibold">Relevant Coursework</h3>
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
    </section>
  );
}
