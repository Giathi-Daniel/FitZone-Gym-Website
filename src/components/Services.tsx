
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      id: 'personal-training',
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Customized workout plans', '1-on-1 attention', 'Progress tracking', 'Nutritional guidance']
    },
    {
      id: 'group-classes',
      title: 'Group Classes',
      description: 'High-energy group workouts including HIIT, Yoga, Pilates, and specialized fitness programs.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Variety of classes', 'Expert instructors', 'Community atmosphere', 'All fitness levels']
    },
    {
      id: 'strength-conditioning',
      title: 'Strength & Conditioning',
      description: 'Advanced strength training programs using cutting-edge equipment and proven methodologies.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Olympic lifting', 'Powerlifting', 'Functional training', 'Performance optimization']
    },
    {
      id: 'nutrition-coaching',
      title: 'Nutrition Coaching',
      description: 'Comprehensive nutrition plans and coaching to complement your fitness journey.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Meal planning', 'Supplement guidance', 'Lifestyle coaching', 'Progress monitoring']
    },
    {
      id: 'cardio-programs',
      title: 'Cardio Programs',
      description: 'Dynamic cardiovascular training programs designed to improve endurance and burn calories.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['HIIT training', 'Endurance building', 'Fat burning', 'Heart health']
    },
    {
      id: 'recovery-wellness',
      title: 'Recovery & Wellness',
      description: 'Complete recovery services including massage therapy, stretching, and wellness programs.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: ['Massage therapy', 'Stretching sessions', 'Sauna access', 'Wellness consultations']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of fitness services designed to help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = `/service/${service.id}`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
