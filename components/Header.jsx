// components/Header.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'website-info', label: 'Website Info' },
  { id: 'education',    label: 'Education' },
  { id: 'projects',     label: 'Projects' },
  { id: 'experience',   label: 'Experience' },
  { id: 'skills',       label: 'Skills' },
  { id: 'contact',      label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto flex items-center justify-between p-4">
          {/* logo */}
          <div
            onClick={() => handleNav('home')}
            className="text-white text-lg font-bold cursor-pointer"
          >
            Joseph Novembre
          </div>

          {/* desktop nav */}
          <ul className="hidden md:flex space-x-6 text-gray-300">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  className="hover:text-white transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-gray-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>
      </header>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center space-y-6 p-6">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="w-full text-center text-white text-2xl py-2 hover:bg-gray-900 rounded"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
