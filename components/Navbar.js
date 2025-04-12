// faris-jalal-portfolio/components/Navbar.js
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link"; // Use Link for internal navigation
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("dark"); // Default theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to load theme from localStorage and apply initial class
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Function to toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  }, []);

  // Function to close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className='main-nav'>
      <div className='nav-container'>
        {/* Always visible: Name */}
        <div className='nav-brand'>
          <Link href='/' onClick={closeMobileMenu}>
            {" "}
            {/* Link to home */}
            Faris Jalal
          </Link>
        </div>

        {/* Links container (hidden on mobile, shown in menu) */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href='/#about' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href='/#technical-skills' onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link href='/#interests' onClick={closeMobileMenu}>
                Interests
              </Link>
            </li>
            <li>
              <Link href='/#projects' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/#contact' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Always visible: Theme Toggle and Hamburger */}
        <div className='nav-controls'>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='theme-toggle-button'
            aria-label='Toggle theme'
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className='hamburger-button'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
