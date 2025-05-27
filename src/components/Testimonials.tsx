
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "FitZone has completely transformed my life! The trainers are amazing and the community is so supportive. I've lost 30 pounds and gained so much confidence.",
      rating: 5,
      transformation: "Lost 30 lbs in 6 months"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "As someone who works long hours, FitZone's flexible schedule and 24/7 access has been a game-changer. The equipment is top-notch and always well-maintained.",
      rating: 5,
      transformation: "Gained 15 lbs muscle"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The group classes at FitZone are incredible! The instructors are motivating and the variety keeps workouts exciting. I've made lifelong friends here.",
      rating: 5,
      transformation: "Completed first marathon"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The personal training program helped me recover from a back injury and get stronger than ever. The trainers really know their stuff and care about your progress.",
      rating: 5,
      transformation: "Recovered from injury"
    },
    {
      name: "Lisa Park",
      role: "Nurse",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "After having kids, I thought I'd never get back in shape. FitZone's supportive environment and childcare services made it possible. I feel amazing!",
      rating: 5,
      transformation: "Post-pregnancy fitness journey"
    },
    {
      name: "James Wilson",
      role: "Retired",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "At 65, I wasn't sure if I could start a fitness routine. The staff at FitZone made me feel comfortable and helped me build a sustainable workout plan.",
      rating: 5,
      transformation: "Improved mobility & strength"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at FitZone Gym
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                      />
                      
                      <blockquote className="text-lg text-gray-600 mb-6 italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="text-center">
                        <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 mb-2">{testimonial.role}</p>
                        <p className="text-red-600 font-semibold">{testimonial.transformation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg border-gray-200 hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-red-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
