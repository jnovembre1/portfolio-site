// components/About.jsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/profile.jpg"
              alt="Joseph Novembre"
              width={256}
              height={256}
              className="rounded-full object-cover mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm Joseph, a dedicated Computer Science student at the University of Toledo, passionate about building scalable and efficient applications. With a strong foundation in full stack development, deployment, and machine learning, I strive to leverage modern technologies to solve real-world problems and continuously expand my skill set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



