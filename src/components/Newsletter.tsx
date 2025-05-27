
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-red-600 rounded-full p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with FitZone
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest gym news, workout tips, exclusive offers, and member success stories delivered to your inbox.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20"
              />
              <Button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center text-green-400 text-lg">
              <CheckCircle className="w-6 h-6 mr-2" />
              Thank you for subscribing!
            </div>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            Join 1,000+ members who trust us with their fitness journey. Unsubscribe anytime.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-red-400">Weekly</div>
              <div className="text-sm text-gray-300">Workout Tips</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">Monthly</div>
              <div className="text-sm text-gray-300">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">Exclusive</div>
              <div className="text-sm text-gray-300">Member Offers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">Early</div>
              <div className="text-sm text-gray-300">Event Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
