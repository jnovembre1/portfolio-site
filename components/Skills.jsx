// components/Skills.jsx
import React from 'react';

const skills = {
  Knowledge: [
    "Experience with Deployment and Handling of Webpages",
    "Full Stack Experience",
    "API Integration",
    "Developing Machine Learning Applications",
  ],
  Programming: [
    "Java",
    "C++",
    "Python",
    "MatLab",
    "JavaScript",
    "HTML",
    "CSS",
    "PHP",
    "Twig",
    "SQL",
  ],
  Tech: [
    "Docker",
    "Drupal",
    "Platform.sh",
    "DDev",
    "Apache Web Server",
    "Postman",
  ],
  LibrariesDatabases: [
    "MySQL",
    "Symfony",
    "Ajax",
    "jQuery",
    "NumPy",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(skills).map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-dark">
                {category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {skills[category].map((skill, idx) => (
                  <li key={idx} className="mb-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
