// components/Hero.jsx
"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-900 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-20"
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="50">
          Hello, I'm Joseph Novembre
        </h1>
        <p className="text-xl mb-8 transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
          A passionate Computer Scientist specializing in Full Stack Development and Machine Learning
        </p>
        <Link
          href="#projects"
          className="bg-white text-indigo-700 dark:bg-gray-800 dark:text-white px-6 py-3 rounded-full font-semibold inline-block transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-blue-600"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
