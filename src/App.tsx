import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Manji. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;