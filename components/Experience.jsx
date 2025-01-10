// components/Experience.jsx
import React from 'react';

const experiences = [
  {
    title: "Software Development Intern at Faith Catholic",
    duration: "May 2024 - Aug 2024",
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
    duration: "May 2023 - August 2023",
    responsibilities: [
      "Developed innovative scripting solutions and harnessed programming prowess to create robust knowledge repositories for internal use, leveraging Python and expertise in REST APIs. ",
      "Constructed cutting-edge modules for seamless integration into the company's Drupal deployments, utilizing PHP, JavaScript (JS), and CSS. Successfully implemented a development site using the powerful LAMP tech stack.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


