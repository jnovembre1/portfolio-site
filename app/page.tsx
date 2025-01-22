// app/page.jsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import WebsiteInfo from '../components/WebsiteInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph Novembre - Portfolio</title>
        <meta name="description" content="Portfolio website of Joseph Novembre showcasing skills, projects, and experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-20"> 
        <Hero />
        <About />
        <WebsiteInfo />
        <Education />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

