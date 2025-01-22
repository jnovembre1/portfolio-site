// components/GitHubWebhookPings.jsx
"use client";

import React, { useState, useEffect } from 'react';

const GitHubWebhookPings = () => {
  const [pings, setPings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPings() {
      try {
        const res = await fetch('/webhook');
        const data = await res.json();
        setPings(data);
      } catch (error) {
        console.error('Error fetching webhook pings:', error);
      }
      setLoading(false);
    }
    fetchPings();
  }, []);

  if (loading) {
    return (
      <section
        id="github-webhook-pings"
        className="py-16 bg-white dark:bg-gray-900 transition-all duration-300"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">Loading webhook pings...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github-webhook-pings"
      className="py-16 bg-white dark:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-once="true"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Recent GitHub Webhook Pings
        </h2>
        {pings.length === 0 ? (
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
            No webhook pings received yet.
          </p>
        ) : (
          <ul>
            {pings.map((ping, index) => (
              <li key={index} className="bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-4 my-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Received at: {new Date(ping.receivedAt).toLocaleString()}
                </p>
                <pre className="whitespace-pre-wrap text-xs text-gray-800 dark:text-gray-200 mt-2">
                  {JSON.stringify(ping.payload, null, 2)}
                </pre>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default GitHubWebhookPings;
