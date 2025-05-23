// components/Experience.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Software Development Intern at Faith Catholic",
    duration: "May 2024 - Present",
    responsibilities: [
      "Developed and maintained Drupal CMS patches in PHP, ensuring seamless integration and compatibility.",
      "Created custom Drupal modules using PHP, Symfony, Twig, and JavaScript to enhance site functionality and user experience.",
      "Managed a comprehensive deployment workflow from local to development and production environments, utilizing MySQL, MariaDB, and Apache.",
      "Set up and maintained development environments with Docker and Ddev on a Unix-based system, contributing to effective DevOps practices.",
      "Developed an app integrating a Drupal site via Drupal API with Zendesk to enhance customer support ticketing services.",
    ],
  },
  {
    title: "Data Structures Peer Mentor at University of Toledo College of Engineering",
    duration: "Jan 2024 - May 2024",
    responsibilities: [
      "Conducted lab sessions for a comprehensive data structures course, focusing on key structures such as maps, linked lists, stacks, queues, and recursion algorithms with Java as the vehicle language.",
      "Played a pivotal role in troubleshooting peers' code, providing hands-on assistance, and offering clear explanations for intricate topics.",
      "Adept at simplifying complex concepts, fostering a collaborative learning environment, and ensuring students grasp the practical applications of data structures and algorithms.",
    ],
  },
  {
    title: "Information Technology Intern at Faith Catholic",
    duration: "May 2023 - Aug 2023",
    responsibilities: [
      "Developed innovative scripting solutions and harnessed programming prowess to create robust knowledge repositories for internal use, leveraging Python and expertise in REST APIs.",
      "Constructed cutting-edge modules for seamless integration into the company's Drupal deployments, utilizing PHP, JavaScript (JS), and CSS. Successfully implemented a development site using the powerful LAMP tech stack.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group rounded-xl bg-gray-800 p-6 transition-transform hover:scale-[1.03] hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
