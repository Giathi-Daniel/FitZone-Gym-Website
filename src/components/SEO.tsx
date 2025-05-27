
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "FitZone Gym - Premium Fitness Center | Personal Training & Group Classes",
  description = "Transform your fitness journey at FitZone Gym. Premium equipment, expert personal trainers, group classes, nutrition coaching. Join today for special membership deals!",
  keywords = "gym, fitness center, personal training, group classes, strength training, cardio, nutrition coaching, membership, workout, fitness",
  image = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
  url = "https://yoursite.lovable.app",
  type = "website",
  schemaData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
