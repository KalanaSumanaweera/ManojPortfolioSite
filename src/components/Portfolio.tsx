import React from 'react';

const portfolioItems = [
  {
    category: 'Coffee',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    category: 'DJ',
    images: [
      'https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    category: 'Mixology',
    images: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
    ]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Portfolio
        </h2>
        <div className="space-y-16">
          {portfolioItems.map((item) => (
            <div key={item.category}>
              <h3 className="text-2xl font-semibold text-white mb-8">{item.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {item.images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg group">
                    <img
                      src={image}
                      alt={`${item.category} ${index + 1}`}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
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