// components/Footer.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="min-h-[100vh] snap-start bg-black text-white flex items-center justify-center py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl w-full text-center px-4">
        <motion.h2
          className="mb-6 text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Feel free to reach out via email or connect with me on LinkedIn!
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="mailto:josephnovem@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-transform transform hover:scale-105"
          >
            <FaEnvelope className="h-6 w-6" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-novembre-5678231b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-transform transform hover:scale-105"
          >
            <FaLinkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/jnovembre1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-transform transform hover:scale-105"
          >
            <FaGithub className="h-6 w-6" />
            <span>GitHub</span>
          </a>
        </motion.div>

        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Joseph Novembre. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
