// components/Hero.jsx
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Joseph Novembre</h1>
        <p className="text-xl mb-8">
          A passionate Computer Scientist specializing in Full Stack Development and Machine Learning
        </p>
        <Link
          href="#projects"
          className="bg-white text-primary dark:text-secondary px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300 inline-block"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;



