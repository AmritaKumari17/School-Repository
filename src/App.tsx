import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Facilities from './components/Facilities';
import Teachers from './components/Teachers';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Classes />
      <Facilities />
      <Teachers />
      <Career />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;