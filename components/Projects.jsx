// components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Stable Roommates",
    tech: "Java",
    description:
      "Developed a recursive backtracking solution for the Stable Roommates Problem, efficiently assigning 2n individuals to n rooms based on their preferences. Utilized principles from data structures, recursive methods, and sorting algorithms to create a scalable and efficient solution.",
  },
  {
    title: "Subscriber Information Site",
    tech: "Python, Drupal CMS, MySQL",
    description:
      "Conceptualized and built an internal website with Drupal CMS, enabling seamless storage and retrieval of subscriber user information, encompassing order history and comments. Implemented Python scripts for backend data retrieval from a Restful API, seamlessly integrating the acquired data into the Drupal site.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-primary-dark">
                {project.title}
              </h3>
              <p className="text-indigo-600 mb-4 dark:text-secondary">
                {project.tech}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
