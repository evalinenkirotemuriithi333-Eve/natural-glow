// src/components/sections/Hero.jsx
import React from "react";
import heroBanner from "../../assets/images/hero-banner.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-amber-50 to-orange-100 py-24 flex flex-col md:flex-row items-center justify-between px-8 md:px-16"
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Discover the <span className="text-amber-600">Glow</span> Within
        </h1>
        <p className="text-lg text-gray-600">
          Experience nature-inspired skincare crafted to rejuvenate, hydrate,
          and restore your natural radiance.
        </p>

        <div className="space-x-4">
          <a
            href="#features"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium"
          >
            Learn More
          </a>
        </div>

        <div className="pt-6 text-gray-700">
          <p>✨ 7+ Years of Glow</p>
          <p>😊 10K+ Happy Clients</p>
          <p>🌿 260+ Natural Formulas</p>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src={heroBanner}
          alt="Natural skincare products"
          className="rounded-2xl shadow-lg w-80 md:w-[420px] object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;