
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-6 mb-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">123 Fitness Street, Gym City, GC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@fitzonegym.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 h-64">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Fitness Street, Gym City</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
