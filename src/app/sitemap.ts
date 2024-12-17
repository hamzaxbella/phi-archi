import { MetadataRoute } from 'next';
import { Navigators } from './[locale]/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3000'; // update this to your domain
  const languages = ['en', 'fr', 'ar'];

  const routes = Navigators.map(nav => nav.path);
  
  const sitemap: MetadataRoute.Sitemap = [];

  // Add home pages for each language
  languages.forEach(lang => {
    sitemap.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    });
  });

  // Add all routes for each language
  routes.forEach(route => {
    languages.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  return sitemap;
}
