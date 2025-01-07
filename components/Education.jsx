// components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Education</h2>
        <div className="flex flex-col space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark">University of Toledo</h3>
            <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science w/ Minor in Mathematics</p>
            <p className="text-gray-600 dark:text-gray-300">Graduating December 2025</p>
            <h4 className="mt-4 font-semibold text-gray-800 dark:text-white">Relevant Coursework:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Object Oriented Programming</li>
              <li>Linear and Non-Linear Data Structures</li>
              <li>Discrete Structures</li>
              <li>Computer Architecture</li>
              <li>OS Programming</li>
              <li>Programming Languages and Paradigms</li>
              <li>Database Management</li>
              <li>Machine Learning</li>
              <li>Software Engineering</li>
              <li>Theory of Computation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


