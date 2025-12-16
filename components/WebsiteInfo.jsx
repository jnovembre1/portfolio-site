'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';

export default function WebsiteInfo() {
  return (
    <section
      id="website-info"
      className="relative bg-black text-white snap-start"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* TEXT COLUMN (spans 2/3) */}
        <div className="lg:col-span-2 space-y-8">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Website Deployment & Infrastructure
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>
              This website is hosted on{' '}
              <span className="font-semibold text-cyan-400">
                AWS Lightsail
              </span>{' '}
              using a clean <span className="font-semibold">Ubuntu 24</span>{' '}
              installation, fully configured by me. I set up all the necessary
              server components—web server configuration, SSL certificates, and
              firewall rules—to ensure a secure, optimized environment.
            </p>
            <p>
              Deployments are automated via a{' '}
              <span className="font-semibold text-cyan-400">
                GitHub webhook
              </span>
              , which triggers an update every time I push changes. This ensures
              the site stays up-to-date without manual intervention.
            </p>
            <p>
              This approach demonstrates modern DevOps practices and my
              hands-on experience in server administration and custom
              deployments. It’s a robust, maintainable solution built for
              scalability and performance.
            </p>
          </motion.div>
        </div>

        {/* BLEED ICON (spans 1/3) */}
        <div className="hidden lg:flex lg:col-span-1 items-center justify-center relative">
          <FaAws
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
