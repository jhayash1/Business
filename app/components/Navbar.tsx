"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold text-gray-900"
          >
            Deep<span className="text-blue-600">Tech</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>

          </nav>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 md:block"
          >
            Get Started
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-gray-300 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t py-4 md:hidden">

            <nav className="flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Home
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Get Started
              </a>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}