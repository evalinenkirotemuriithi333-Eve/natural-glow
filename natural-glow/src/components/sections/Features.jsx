import React from "react";
import serum from "../../assets/images/serum.jpg";
import moisturizer from "../../assets/images/moisturizer.jpg";
import oil from "../../assets/images/oil.jpg";

function Features() {
  const features = [
    {
      id: 1,
      title: "Vitamin C Serum",
      description: "Brightens skin tone and helps reduce dark spots for a radiant glow.",
      image: serum,
    },
    {
      id: 2,
      title: "Hydra Moisturizer",
      description: "Provides deep hydration and locks in moisture all day long.",
      image: moisturizer,
    },
    {
      id: 3,
      title: "Glow Face Oil",
      description: "Nourishes and smooths your skin using 100% natural ingredients.",
      image: oil,
    },
  ];

  return (
    <section
      id="features"
      className="bg-amber-50 py-20 px-6 md:px-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Discover the Glow Difference
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Explore our naturally formulated skincare essentials — crafted to
        nourish, hydrate, and protect your skin for that lasting, confident glow.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-md hover:shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-amber-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-md shadow">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;