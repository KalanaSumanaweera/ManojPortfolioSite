import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Crafting Coffee, Music, and Mixology to Perfection
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Elevating experiences through the art of coffee, the rhythm of music, 
          and the chemistry of cocktails.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full 
                   font-semibold hover:bg-gray-200 transition-colors"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}