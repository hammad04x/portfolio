import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

// Your base URL
const siteUrl = 'https://jagaralahammad.vercel.app';

// List all your routes
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  // Add dynamic or extra routes manually if needed
];

const sitemapStream = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream(path.resolve('./public/sitemap.xml'));

pages.forEach((page) => sitemapStream.write(page));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => {
    writeStream.write(data.toString());
    console.log('✅ Sitemap generated successfully!');
  })
  .catch((err) => console.error('❌ Error generating sitemap:', err));
