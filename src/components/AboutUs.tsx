
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const stats = [
    { number: '500+', label: 'Happy Members' },
    { number: '10+', label: 'Expert Trainers' },
    { number: '5', label: 'Years Experience' },
    { number: '24/7', label: 'Access Available' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About FitZone Gym</h2>
            <p className="text-lg text-gray-600 mb-6">
              At FitZone Gym, we believe fitness is not just about physical transformation—it's about 
              building confidence, creating healthy habits, and fostering a supportive community that 
              empowers you to become the best version of yourself.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Since our founding, we've been dedicated to providing state-of-the-art facilities, 
              expert guidance, and a welcoming environment where members of all fitness levels can 
              thrive and achieve their personal goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Join Our Community
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Gym training"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Gym equipment"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Group training"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Gym interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
