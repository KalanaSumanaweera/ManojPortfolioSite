import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-white mb-2">Service</label>
              <select
                id="service"
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
              >
                <option value="">Select a service</option>
                <option value="barista">Barista Services</option>
                <option value="dj">DJ Services</option>
                <option value="bartender">Bartending Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-white text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}