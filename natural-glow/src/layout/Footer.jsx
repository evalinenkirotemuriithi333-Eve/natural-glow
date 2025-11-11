// src/components/layout/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-emerald-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Skin<span className="text-emerald-500">Glow</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Nature-inspired skincare that nourishes, hydrates, and restores your natural glow.
          </p>
          <div className="flex space-x-4 mt-6 text-emerald-500">
            <a href="#" aria-label="Instagram" className="hover:text-emerald-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-emerald-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-emerald-600">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#hero" className="hover:text-emerald-500">Home</a></li>
            <li><a href="#features" className="hover:text-emerald-500">Products</a></li>
            <li><a href="#about" className="hover:text-emerald-500">About</a></li>
            <li><a href="#contact" className="hover:text-emerald-500">Contact</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-emerald-500">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-500">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-emerald-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-500">Terms of Service</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Join Our Glow Community</h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe for skincare tips, product drops, and exclusive offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded-r-full hover:bg-emerald-600 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>


      <div className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} SkinGlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;