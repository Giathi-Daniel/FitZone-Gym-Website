
// Sitemap utility for SEO
export const generateSitemap = () => {
  const baseUrl = 'https://yoursite.lovable.app';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/service/personal-training', priority: '0.8', changefreq: 'monthly' },
    { url: '/service/group-classes', priority: '0.8', changefreq: 'monthly' },
    { url: '/service/strength-conditioning', priority: '0.8', changefreq: 'monthly' },
    { url: '/service/nutrition-coaching', priority: '0.8', changefreq: 'monthly' },
    { url: '/service/cardio-programs', priority: '0.8', changefreq: 'monthly' },
    { url: '/service/recovery-wellness', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  const baseUrl = 'https://yoursite.lovable.app';
  
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Block crawling of admin or private areas
Disallow: /admin/
Disallow: /private/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;
};
