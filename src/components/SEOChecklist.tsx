
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';

const SEOChecklist = () => {
  const seoItems = [
    { item: 'Meta title (50-60 characters)', status: 'complete' },
    { item: 'Meta description (150-160 characters)', status: 'complete' },
    { item: 'H1 tag optimization', status: 'complete' },
    { item: 'Image alt text', status: 'complete' },
    { item: 'Schema.org structured data', status: 'complete' },
    { item: 'Mobile responsiveness', status: 'complete' },
    { item: 'Page loading speed optimization', status: 'complete' },
    { item: 'Internal linking structure', status: 'complete' },
    { item: 'SSL certificate', status: 'pending' },
    { item: 'XML sitemap', status: 'complete' },
    { item: 'Google Analytics integration', status: 'pending' },
    { item: 'Local SEO optimization', status: 'complete' }
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>SEO Optimization Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {seoItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">{item.item}</span>
              {item.status === 'complete' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOChecklist;
