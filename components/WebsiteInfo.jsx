// components/WebsiteInfoLightsail.jsx
import React from 'react';

const WebsiteInfoLightsail = () => {
  return (
    <section
      id="website-info-lightsail"
      className="py-16 bg-white dark:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Website Deployment & Infrastructure
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          This website is hosted on <span className="font-semibold text-indigo-700">AWS Lightsail</span> using a
          clean <span className="font-semibold">Ubuntu 24</span> installation, fully configured by me. I set up all the
          necessary server components, including web server configuration, SSL certificates, and firewall rules, to ensure a secure and optimized environment.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          The deployment process is automated via a <span className="font-semibold text-indigo-700">GitHub webhook</span>, which triggers an
          automatic update every time I push new changes to the repository. This ensures that the site stays up-to-date
          without requiring manual intervention.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This approach not only demonstrates modern DevOps practices but also reflects my hands-on experience in server
          administration and custom deployments. It’s a robust, maintainable solution built for scalability and performance.
        </p>
      </div>
    </section>
  );
};

export default WebsiteInfoLightsail;
