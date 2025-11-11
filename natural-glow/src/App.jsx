import React from "react";
import Navigation from "./layout/Navigation";
import Header from "./layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import ColorPalette from "./components/sections/ColorPalette";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="features" className="section">
          <Features />
        </section>
        <section id="colors" className="section">
          <ColorPalette />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;