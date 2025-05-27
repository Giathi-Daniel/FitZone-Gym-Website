
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import BookSession from '@/components/BookSession';
import PromotionCountdown from '@/components/PromotionCountdown';
import Newsletter from '@/components/Newsletter';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <PromotionCountdown />
        <Services />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <BookSession />
        <Gallery />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
