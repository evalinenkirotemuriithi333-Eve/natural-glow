import React from "react";

const colors = [
  {
    name: "Emerald Essence",
    description:
      "The refreshing core of Organic Glow — symbolizing vitality and growth.",
    shades: [
      { code: "#10b981", label: "Primary 500" },
      { code: "#6ee7b7", label: "Accent 300" },
      { code: "#065f46", label: "Deep 800" },
    ],
  },
  {
    name: "Glow Harmony",
    description:
      "Soft, luminous tones representing warmth, light, and gentle care.",
    shades: [
      { code: "#fffaf3", label: "Cream" },
      { code: "#fef3c7", label: "Beige" },
      { code: "#fcd34d", label: "Gold" },
      { code: "#f9a8d4", label: "Blush" },
    ],
  },
  {
    name: "Skin Serenity",
    description:
      "Natural, earthy shades reflecting balance, softness, and wellness.",
    shades: [
      { code: "#fde2e2", label: "Peach" },
      { code: "#fef2f2", label: "Soft" },
      { code: "#78350f", label: "Brown" },
    ],
  },
];

export default function ColorPalette() {
  return (
    <section
      id="colors"
      className="bg-gradient-to-b from-white via-emerald-50/40 to-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
          Brand Color Palette
        </h2>

        <p className="text-gray-600 mb-20 text-lg max-w-2xl mx-auto leading-relaxed">
          A soothing blend of natural tones that express the calm confidence of the{" "}
          <span className="text-emerald-600 font-semibold">Organic Glow</span> brand.
        </p>

        {/* Palette Sections */}
        <div className="space-y-24">
          {colors.map((palette) => (
            <div
              key={palette.name}
              className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-md p-10 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
                {palette.name}
              </h3>
              <p className="text-gray-500 mb-10">{palette.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
                {palette.shades.map((shade) => (
                  <div
                    key={shade.label}
                    className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Color Box with badge */}
                    <div
                      className="relative h-32 w-full flex items-end justify-between px-3 py-2"
                      style={{ backgroundColor: shade.code }}
                    >
                      <span className="text-[13px] font-medium bg-white/70 backdrop-blur-sm text-gray-800 rounded-md px-2 py-[2px] shadow-sm">
                        {shade.label}
                      </span>
                      <span className="text-[11px] font-mono bg-white/70 text-gray-700 rounded-md px-2 py-[2px] shadow-sm">
                        {shade.code}
                      </span>
                    </div>

                    {/* Label Section */}
                    <div className="p-4 bg-white text-left">
                      <p className="text-sm font-semibold text-gray-800">
                        {shade.label}
                      </p>
                      <p className="text-xs text-gray-500">{shade.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
