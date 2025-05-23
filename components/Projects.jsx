// components/Projects.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[100vh] snap-start bg-black text-white"
    >
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="mb-8 text-4xl font-bold">Projects</h2>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* attendance Checker */}
          <div className="group rounded-xl bg-gray-800 p-6 transition-transform hover:scale-[1.03] hover:shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold text-white group-hover:text-cyan-400">
              Attendance Checker{' '}
              <span className="text-sm text-gray-400 font-normal">
                | Team Lead & Developer
              </span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Led 5-person team; managed sprints, delegated tasks, approved designs.</li>
              <li>Created Dockerized face-recognition attendance system (FastAPI, OpenCV).</li>
              <li>Designed and tuned facial recognizer; integrated peer-contributed modules.</li>
            </ul>
          </div>

          {/* intelligent Vehicle Pull-Over System */}
          <div className="group rounded-xl bg-gray-800 p-6 transition-transform hover:scale-[1.03] hover:shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold text-white group-hover:text-cyan-400">
              Intelligent Vehicle Pull-Over System{' '}
              <span className="text-sm text-gray-400 font-normal">
                | University of Toledo
              </span>
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Developed CV pipeline and ML models for detecting driver fatigue/intoxication.</li>
              <li>Prototyped on embedded hardware (NVIDIA Jetson, Raspberry Pi).</li>
            </ul>
          </div>

          {/* subscriber Information Site */}
          <div className="group rounded-xl bg-gray-800 p-6 transition-transform hover:scale-[1.03] hover:shadow-xl">
            <h3 className="mb-4 text-2xl font-semibold text-white group-hover:text-cyan-400">
              Subscriber Information Site{' '}
              <span className="text-sm text-gray-400 font-normal">
                | Python, Drupal CMS, MySQL
              </span>
            </h3>
            <p className="text-gray-300">
              Conceptualized and built an internal website with Drupal CMS, enabling seamless storage and retrieval of subscriber user information, encompassing order history and comments.
            </p>
            <p className="mt-4 text-gray-300">
              Implemented Python scripts for backend data retrieval from a Restful API, seamlessly integrating the acquired data into the Drupal site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
