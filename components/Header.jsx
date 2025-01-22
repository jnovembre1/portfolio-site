// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  // Import usePathname from Next.js
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Navigation items with conditional hrefs:
  // For homepage sections, if we're not on the home page, prefix with "/" so that navigation goes to the home page.
  const navItems = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Education", href: isHome ? "#education" : "/#education" },
    { label: "Projects", href: isHome ? "#projects" : "/#projects" },
    { label: "Experience", href: isHome ? "#experience" : "/#experience" },
    { label: "Skills", href: isHome ? "#skills" : "/#skills" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
    { label: "Backend", href: "/backend" }, // This one always routes to the backend page
  ];

  return (
    <header
      className="bg-white dark:bg-gray-900 shadow fixed top-0 left-0 w-full z-50"
      data-aos="fade-down"
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-primary dark:text-primary-dark">
          <Link href="/">Joseph Novembre</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 transform hover:scale-105"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Dark Mode Toggle & Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none transition-all duration-300 transform hover:scale-105"
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
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none transition-all duration-300 transform hover:scale-105"
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
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-all duration-300 transform hover:scale-105"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
