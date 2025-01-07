// components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <p className="mb-6 text-gray-300 dark:text-gray-400">Feel free to reach out via email or connect with me on LinkedIn!</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:josephnovem@gmail.com"
            className="hover:text-accent transition duration-300 flex items-center space-x-2"
          >
            <FaEnvelope className="h-6 w-6" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-novembre-5678231b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition duration-300 flex items-center space-x-2"
          >
            <FaLinkedin className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/jnovembre1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition duration-300 flex items-center space-x-2"
          >
            <FaGithub className="h-6 w-6" />
            <span>GitHub</span>
          </a>
        </div>
        <p className="mt-4 text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Joseph Novembre. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


