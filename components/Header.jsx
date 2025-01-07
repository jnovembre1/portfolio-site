// components/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's theme preference on initial load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') {
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

  return (
    <header className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-primary dark:text-primary-dark">
          <Link href="/">Joseph Novembre</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
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
      </nav>
    </header>
  );
};

export default Header;
