import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = {
    'personal-training': {
      title: 'Personal Training',
      hero: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Experience the ultimate in personalized fitness with our certified personal trainers who will design custom workout programs tailored specifically to your goals, fitness level, and lifestyle.',
      features: [
        'One-on-one attention from certified trainers',
        'Customized workout plans based on your goals',
        'Proper form and technique instruction',
        'Nutritional guidance and meal planning',
        'Progress tracking and regular assessments',
        'Flexible scheduling to fit your lifestyle',
        'Motivation and accountability support',
        'Injury prevention and modification strategies'
      ],
      packages: [
        { name: 'Single Session', price: '$75', sessions: '1 session' },
        { name: 'Starter Package', price: '$300', sessions: '4 sessions' },
        { name: 'Monthly Package', price: '$550', sessions: '8 sessions' },
        { name: 'Premium Package', price: '$1000', sessions: '16 sessions' }
      ]
    },
    'group-classes': {
      title: 'Group Classes',
      hero: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Join our energizing group fitness classes led by experienced instructors in a motivating community environment. From high-intensity workouts to mindful yoga sessions, we offer something for everyone.',
      features: [
        'Variety of class types including HIIT, Yoga, Pilates, Spin',
        'Expert instructors with specialized certifications',
        'Motivating group atmosphere and community support',
        'Classes for all fitness levels from beginner to advanced',
        'State-of-the-art studio spaces with premium equipment',
        'Flexible scheduling with morning, afternoon, and evening options',
        'Online class booking and waitlist system',
        'Member-exclusive workshops and special events'
      ],
      packages: [
        { name: 'Drop-in Class', price: '$20', sessions: '1 class' },
        { name: 'Class Pack', price: '$75', sessions: '4 classes' },
        { name: 'Monthly Unlimited', price: '$129', sessions: 'Unlimited classes' },
        { name: 'Annual Membership', price: '$1200', sessions: 'Unlimited classes + perks' }
      ]
    },
    'strength-conditioning': {
      title: 'Strength & Conditioning',
      hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Build serious strength and power with our comprehensive strength and conditioning programs. Using cutting-edge equipment and proven methodologies, we help athletes and fitness enthusiasts reach peak performance.',
      features: [
        'Olympic lifting and powerlifting techniques',
        'Functional movement and athletic performance training',
        'Advanced strength training equipment and platforms',
        'Sport-specific conditioning programs',
        'Mobility and flexibility enhancement',
        'Performance testing and progress tracking',
        'Competition preparation for athletes',
        'Injury prevention and rehabilitation support'
      ],
      packages: [
        { name: 'Assessment', price: '$50', sessions: 'Initial evaluation' },
        { name: 'Basic Program', price: '$200', sessions: '4 weeks program' },
        { name: 'Advanced Program', price: '$350', sessions: '8 weeks program' },
        { name: 'Elite Coaching', price: '$600', sessions: '12 weeks + nutrition' }
      ]
    },
    'nutrition-coaching': {
      title: 'Nutrition Coaching',
      hero: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Complement your fitness journey with expert nutrition guidance. Our certified nutritionists will help you develop sustainable eating habits that support your goals and lifestyle.',
      features: [
        'Personalized meal plans based on your goals and preferences',
        'Macronutrient tracking and education',
        'Supplement recommendations and guidance',
        'Grocery shopping and meal prep strategies',
        'Lifestyle and behavior modification coaching',
        'Regular check-ins and plan adjustments',
        'Educational resources and cooking tips',
        'Support for special dietary needs and restrictions'
      ],
      packages: [
        { name: 'Consultation', price: '$100', sessions: 'Initial assessment' },
        { name: 'Basic Plan', price: '$250', sessions: '4 weeks coaching' },
        { name: 'Comprehensive', price: '$450', sessions: '8 weeks coaching' },
        { name: 'Transformation', price: '$800', sessions: '16 weeks + meal plans' }
      ]
    },
    'cardio-programs': {
      title: 'Cardio Programs',
      hero: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Boost your cardiovascular health and endurance with our dynamic cardio programs. From high-intensity interval training to steady-state endurance building, we make cardio engaging and effective.',
      features: [
        'High-intensity interval training (HIIT) sessions',
        'Endurance building and stamina improvement',
        'Fat burning and weight management programs',
        'Heart rate monitoring and zone training',
        'Variety of cardio equipment and methods',
        'Progressive programming for all fitness levels',
        'Virtual reality cardio experiences',
        'Outdoor training options and boot camps'
      ],
      packages: [
        { name: 'Trial Session', price: '$25', sessions: '1 session' },
        { name: 'Starter Pack', price: '$90', sessions: '4 sessions' },
        { name: 'Monthly Program', price: '$160', sessions: '8 sessions' },
        { name: 'Ultimate Cardio', price: '$300', sessions: '16 sessions + nutrition' }
      ]
    },
    'recovery-wellness': {
      title: 'Recovery & Wellness',
      hero: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Optimize your recovery and overall wellness with our comprehensive recovery services. From therapeutic massage to wellness consultations, we help you feel and perform your best.',
      features: [
        'Therapeutic massage and deep tissue therapy',
        'Assisted stretching and mobility sessions',
        'Sauna and steam room access',
        'Cryotherapy and recovery treatments',
        'Stress management and mindfulness coaching',
        'Sleep optimization consultation',
        'Wellness workshops and education',
        'Holistic health assessments'
      ],
      packages: [
        { name: 'Single Service', price: '$80', sessions: '1 treatment' },
        { name: 'Wellness Pack', price: '$300', sessions: '4 treatments' },
        { name: 'Monthly Wellness', price: '$550', sessions: '8 treatments' },
        { name: 'Ultimate Wellness', price: '$1000', sessions: 'Unlimited monthly access' }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Service Not Found - FitZone Gym"
          description="The requested service page could not be found. Browse our available fitness services and programs."
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const serviceSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "GymAndFitnessCenter",
      "name": "FitZone Gym",
      "url": "https://yoursite.lovable.app"
    },
    "offers": service.packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "price": pkg.price.replace('$', ''),
      "priceCurrency": "USD",
      "description": pkg.sessions
    })),
    "image": service.hero,
    "url": `https://yoursite.lovable.app/service/${serviceId}`
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${service.title} - FitZone Gym | Professional Fitness Services`}
        description={`${service.description.substring(0, 155)}...`}
        keywords={`${service.title.toLowerCase()}, fitness service, gym program, personal fitness, workout program`}
        image={service.hero}
        url={`https://yoursite.lovable.app/service/${serviceId}`}
        schemaData={serviceSchemaData}
      />
      
      <div className="relative h-96 overflow-hidden">
        <img
          src={service.hero}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-lg text-gray-600 mb-8">{service.description}</p>
            
            <h3 className="text-2xl font-bold mb-4">What's Included</h3>
            <div className="grid gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Choose Your Package</h3>
            <div className="grid gap-4">
              {service.packages.map((pkg, index) => (
                <Card key={index} className="border-2 hover:border-red-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{pkg.name}</span>
                      <span className="text-red-600 text-2xl font-bold">{pkg.price}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{pkg.sessions}</p>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-4">
                  Book a free consultation to discuss your goals and find the perfect program for you.
                </p>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you choose the right program and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
