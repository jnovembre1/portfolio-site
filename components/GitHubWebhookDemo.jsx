// components/GitHubWebhookDemo.jsx
"use client";

import React, { useState, useEffect } from 'react';

const GitHubWebhookDemo = () => {
  const [latestCommit, setLatestCommit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestCommit() {
      try {
        const response = await fetch("https://api.github.com/repos/jnovembre1/portfolio-site/commits?per_page=1");
        const data = await response.json();
        if (data && data.length > 0) {
          setLatestCommit(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub commit data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLatestCommit();
  }, []);

  if (loading) {
    return (
      <section
        id="github-webhook-demo"
        className="py-16 bg-white dark:bg-gray-900 transition-all duration-300"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">Loading GitHub deployment data...</p>
        </div>
      </section>
    );
  }

  if (!latestCommit) {
    return (
      <section
        id="github-webhook-demo"
        className="py-16 bg-white dark:bg-gray-900 transition-all duration-300"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-red-500">Failed to load GitHub deployment data.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github-webhook-demo"
      className="py-16 bg-white dark:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-once="true"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          GitHub Webhook Deployment Demo
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Latest Commit on the Main Branch:
          </p>
          <p className="mt-2 font-bold text-indigo-600 dark:text-indigo-400">
            {latestCommit.commit.message}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Committed by {latestCommit.commit.author.name} on{" "}
            {new Date(latestCommit.commit.author.date).toLocaleString()}
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            A GitHub webhook automatically triggers a deployment when new code is pushed. This demo shows the most recent commit that initiated that process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubWebhookDemo;
