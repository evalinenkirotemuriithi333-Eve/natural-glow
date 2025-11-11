import React from "react";
import moisturizer from "../../assets/images/moisturizer.jpg";
import oil from "../../assets/images/oil.jpg";
import serum from "../../assets/images/serum.jpg";

function Features() {
  const features = [
    {
      image: moisturizer,
      title: "Hydrating Moisturizer",
      description:
        "Deeply nourishes your skin with natural botanicals for lasting hydration and a radiant finish.",
    },
    {
      image: oil,
      title: "Rejuvenating Glow Oil",
      description:
        "A lightweight blend that enhances your skin’s natural glow and softness every day.",
    },
    {
      image: serum,
      title: "Vitamin C Serum",
      description:
        "Brightens dull skin while reducing signs of aging and improving skin texture.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Discover the Glow Difference
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
            >
              {/* Fixed image box */}
              <div className="h-48 w-full overflow-hidden flex items-center justify-center mb-4 rounded-xl bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;