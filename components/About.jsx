// components/About.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[100vh] snap-start bg-black text-white"
    >
      <div className="max-w-4xl mx-auto py-20 px-4 grid gap-8 md:grid-cols-2 items-center">
        {/* profile Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile.jpg"
            alt="Photo of Joseph Novembre"
            className="rounded-full w-48 h-48 object-cover border-4 border-cyan-500"
          />
        </motion.div>

        {/* about Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          
          {/* resume Download Button */}
          <a
            href="https://docs.google.com/document/d/1GHlkEgA0yJ6oJH4Bdxuh6SDcCMB_wVTaTO0DZDgjw4A/edit?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 
              bg-blue-600 hover:bg-blue-700 
              text-white font-semibold 
              px-6 py-3 rounded-lg 
              transition-shadow shadow-md 
              hover:shadow-lg
            "
          >
            <FaFilePdf className="w-5 h-5" />
            <span>RESUME</span>
          </a>

          <p className="text-lg leading-relaxed text-gray-300">
            I’m a soon to be Computer Science graduate with a passion for building
            end-to-end solutions. Over the past few years, I’ve:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              Led a 5-person team as Technical Lead on a Dockerized facial‐recognition attendance system using FastAPI & OpenCV.
            </li>
            <li>
              Developed full-stack applications with Next.js, React, Node.js, and PostgreSQL—deploying to AWS Lightsail and Azure.
            </li>
            <li>
              Customized and extended Drupal CMS modules, integrating Python scripts to fetch RESTful API data.
            </li>
            <li>
              Built machine learning pipelines for computer vision and natural language tasks, optimizing models for accuracy and performance.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
