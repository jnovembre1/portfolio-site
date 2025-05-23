// components/Skills.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiPhp,
  SiDrupal,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiSelenium,
  SiPuppeteer,
  SiOpenai,
  SiHuggingface,
  SiNumpy,
  SiSymfony,
  SiJquery
} from 'react-icons/si';
import { FaTerminal, FaCloud, FaCode } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Material UI', icon: <SiMaterialdesign /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Drupal CMS', icon: <SiDrupal /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'VS Code', icon: <FaCode /> },          // fallback
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'DDEV', icon: <FaTerminal /> },
      { name: 'Platform.sh', icon: <FaCloud /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Heroku', icon: <SiHeroku /> },
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    title: 'Automation & AI',
    skills: [
      { name: 'Selenium', icon: <SiSelenium /> },
      { name: 'Puppeteer', icon: <SiPuppeteer /> },
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'HuggingFace', icon: <SiHuggingface /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Symfony', icon: <SiSymfony /> },
      { name: 'jQuery', icon: <SiJquery /> },
      { name: 'Web Scraping', icon: <SiJquery /> }, // generic fallback
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="mb-4 text-xl font-semibold uppercase text-cyan-400">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-md text-sm"
                  >
                    {React.cloneElement(skill.icon, { className: 'w-5 h-5' })}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
