
import React from 'react';
import SEO from '@/components/SEO';
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GymAndFitnessCenter",
    "name": "FitZone Gym",
    "description": "Transform your fitness journey at FitZone Gym. Premium equipment, expert personal trainers, group classes, nutrition coaching.",
    "url": "https://yoursite.lovable.app",
    "logo": "https://yoursite.lovable.app/logo.png",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Fitness Street",
      "addressLocality": "Your City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "telephone": "+1-555-123-4567",
    "email": "info@fitzonegym.com",
    "priceRange": "$29-$199",
    "openingHours": [
      "Mo-Fr 05:00-23:00",
      "Sa-Su 06:00-22:00"
    ],
    "amenityFeature": [
      "Personal Training",
      "Group Classes", 
      "Cardio Equipment",
      "Strength Training",
      "Nutrition Coaching",
      "Recovery & Wellness"
    ],
    "hasMap": "https://maps.google.com/?q=123+Fitness+Street,+Your+City",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="FitZone Gym - Transform Your Fitness Journey | Premium Gym & Personal Training"
        description="Join FitZone Gym for premium fitness equipment, expert personal trainers, group classes, and nutrition coaching. Special membership deals available. Transform your body today!"
        keywords="gym membership, personal trainer, fitness classes, strength training, cardio workout, nutrition coaching, fitness center, workout equipment, group fitness, weight loss"
        schemaData={schemaData}
      />
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
