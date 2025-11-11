import React, { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-heading font-bold text-emerald-600">
          Organic<span className="text-emerald-800">Glow</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a
              href="#hero"
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#shop"
          className="hidden md:inline-block btn btn-primary shadow-soft"
        >
          Shop Now
        </a>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <button className="text-emerald-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}