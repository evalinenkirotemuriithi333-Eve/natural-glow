import React from "react";
import Navigation from "./layout/Navigation";
import Header from "./layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Hero />
      <Features />
      <Footer/>
    </>
  );
}

export default App;