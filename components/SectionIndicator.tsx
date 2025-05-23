// components/SectionIndicator.tsx
'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionIndicator() {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={
            `w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ` +
            (active === id ? 'bg-cyan-400' : 'bg-gray-600')
          }
          aria-label={label}
        />
      ))}
    </nav>
  );
}
