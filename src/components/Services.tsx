import React from 'react';
import { Coffee, Music2, GlassWater } from 'lucide-react';

const services = [
  {
    title: 'Expert Barista',
    icon: Coffee,
    description: 'Crafting perfect espresso shots and creating stunning latte art. Specialized in single-origin beans and alternative brewing methods.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Professional DJ',
    icon: Music2,
    description: 'Curating immersive musical experiences for clubs, weddings, and private events. Versatile repertoire spanning multiple genres.',
    image: 'https://images.unsplash.com/photo-1571266028243-e4bb35f0a8c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Mixologist',
    icon: GlassWater,
    description: 'Creating innovative cocktails and classic drinks with precision. Specialized in craft cocktails and molecular mixology.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-white mr-2" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}