import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-emerald-100 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
        
       
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
        >
          Skin<span className="text-emerald-500">Glow</span>
        </a>

       
        <nav className="hidden md:flex space-x-10 text-gray-700 font-medium">
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

        
        <a
          href="#contact"
          className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300"
        >
          Shop Now
        </a>

    
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 animate-fadeIn">
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
    </header>
  );
}

export default Header;