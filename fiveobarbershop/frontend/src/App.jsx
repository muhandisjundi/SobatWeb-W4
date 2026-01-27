import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurCraft from './components/OurCraft';
import StyleMenu from './components/StyleMenu';
import Pricing from './components/Pricing';
import Academy from './components/Academy';
import Lifestyle from './components/Lifestyle';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <OurCraft />
      <StyleMenu />
      <Pricing />
      <Academy />
      <Lifestyle />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
