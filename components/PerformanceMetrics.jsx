// components/PerformanceMetrics.jsx
import React from 'react';

const metrics = [
  { label: 'Total User Clicks', value: 15234 },
  { label: 'Daily Active Users', value: 893 },
  { label: 'Avg API Response Time (ms)', value: 200 },
  { label: 'Server Uptime (%)', value: 99.98 },
  { label: 'Page Views', value: 41200 },
  { label: 'Error Rate (%)', value: 0.3 },
];

const PerformanceMetrics = () => {
  return (
    <section
      id="performance-metrics"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Performance Metrics
        </h2>
        <h3 className="text-xl font-bold text-center mb-8 text-gray-400 dark:text-white">
          These metrics are made up until i get the backend working for real metrics
        </h3>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {metric.value}
              </p>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
