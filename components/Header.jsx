// components/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check for user's theme preference on initial load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else {
      // Optionally, detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-primary dark:text-primary-dark">
          <Link href="/">Joseph Novembre</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#education"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Dark Mode Toggle & Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <FaSun className="h-6 w-6 text-yellow-500" />
            ) : (
              <FaMoon className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={handleLinkClick}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
