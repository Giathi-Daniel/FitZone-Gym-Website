
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Zap } from 'lucide-react';

const PromotionCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-3">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Limited Time Offer!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Get 50% OFF your first month + FREE personal training session
            </p>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm opacity-75">Days</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm opacity-75">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm opacity-75">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm opacity-75">Seconds</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8"
                onClick={() => document.getElementById('book-session')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Clock className="w-4 h-4 mr-2" />
                Claim This Offer
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8"
                onClick={() => window.open('tel:+1234567890')}
              >
                Call for Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromotionCountdown;
