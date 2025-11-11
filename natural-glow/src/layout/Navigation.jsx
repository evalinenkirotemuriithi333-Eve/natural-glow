import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>

      <nav className="hidden md:flex items-center space-x-10 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-emerald-500 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>

      
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

    
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md border-t border-gray-100 md:hidden animate-fadeIn">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-emerald-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;