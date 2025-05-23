// components/WebsiteInfoLightsail.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WebsiteInfoLightsail() {
  return (
    <section
      id="website-info-lightsail"
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
            <span className="font-semibold text-cyan-400">AWS Lightsail</span>{' '}
            using a clean <span className="font-semibold">Ubuntu 24</span>{' '}
            installation, fully configured by me. I set up all the necessary
            server components—web server configuration, SSL certificates, and
            firewall rules—to ensure a secure, optimized environment.
          </p>
          <p>
            Deployments are automated via a{' '}
            <span className="font-semibold text-cyan-400">GitHub webhook</span>,
            which triggers an update every time I push changes. This ensures
            the site stays up-to-date without manual intervention.
          </p>
          <p>
            This approach demonstrates modern DevOps practices and my hands-on
            experience in server administration and custom deployments. It’s a
            robust, maintainable solution built for scalability and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
