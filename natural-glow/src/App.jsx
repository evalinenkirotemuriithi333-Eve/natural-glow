import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <h1 className="text-5xl font-bold text-pink-600 mb-4">
        TailwindCSS is Working! 💅
      </h1>
      <p className="text-gray-700 text-lg">
        Welcome to <span className="font-semibold text-purple-700">Skin Glow</span>
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
        Test Button
      </button>
    </div>
  );
}

export default App;