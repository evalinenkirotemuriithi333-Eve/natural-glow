import React from "react";
import heroBanner from "../../assets/images/hero-banner.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-r from-amber-50 to-orange-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Discover the <span className="text-amber-600">Glow</span> Within
          </h1>

          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Experience nature-inspired skincare crafted to rejuvenate, hydrate,
            and restore your natural radiance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a
              href="#features"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>

          <div className="pt-6 text-gray-700 space-y-1">
            <p>✨ 7+ Years of Glow</p>
            <p>😊 10K+ Happy Clients</p>
            <p>🌿 260+ Natural Formulas</p>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center">
          <img
            src={heroBanner}
            alt="Natural skincare products"
            className="rounded-2xl shadow-lg w-72 sm:w-96 md:w-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;