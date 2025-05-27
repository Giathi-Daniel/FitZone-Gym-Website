
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What are your membership options?",
      answer: "We offer flexible membership plans including monthly, quarterly, and annual options. Each plan includes access to all gym equipment, group classes, and basic facilities."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes! We have certified personal trainers available for one-on-one sessions. Personal training packages can be purchased separately or added to your membership."
    },
    {
      question: "What are your operating hours?",
      answer: "We're open Monday-Friday 5:00 AM - 11:00 PM, Saturday-Sunday 6:00 AM - 10:00 PM. Some areas have 24/7 access for premium members."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 7-day free trial for new members. This gives you full access to try our facilities and classes before committing to a membership."
    },
    {
      question: "What group classes do you offer?",
      answer: "We offer a variety of classes including HIIT, Yoga, Pilates, Zumba, Spin, CrossFit, and strength training classes. Check our schedule for specific times."
    },
    {
      question: "Do you have locker rooms and showers?",
      answer: "Yes, we have fully equipped locker rooms with showers, changing areas, and complimentary towels. We also provide hair dryers and basic toiletries."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons, travel, or other valid circumstances. A small administrative fee may apply."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We maintain the highest safety standards with regular equipment maintenance, 24/7 security monitoring, first aid stations, and trained staff always available to assist."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers to help you get started on your fitness journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-red-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
