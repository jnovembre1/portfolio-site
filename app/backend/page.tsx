// app/backend/page.tsx (or page.jsx)
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import GitHubWebhookDemo from '../../components/GitHubWebhookDemo';
import Footer from '../../components/Footer';
import PerformanceMetrics from '../../components/PerformanceMetrics';
import GithubWebhookPings from '../../components/GitHubWebhookPings';

const BackendShowcase = () => {
  return (
    <>
      <Head>
        <title>Backend & Deployment Demo - Joseph Novembre</title>
        <meta name="description" content="A showcase of deployment automation using GitHub webhooks." />
      </Head>
      <Header />
      <main>
        <PerformanceMetrics />
        <GitHubWebhookDemo />
        <GithubWebhookPings />
      </main>
      <Footer />
    </>
  );
};

export default BackendShowcase;
