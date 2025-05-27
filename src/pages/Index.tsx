
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
