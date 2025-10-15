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

// Path to save sitemap
const sitemapPath = path.resolve('./public/sitemap.xml');

// Create a write stream
const writeStream = createWriteStream(sitemapPath);

// Create a SitemapStream instance
const sitemapStream = new SitemapStream({ hostname: siteUrl });

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(writeStream);

// Write each page to the sitemap
pages.forEach((page) => sitemapStream.write(page));

// Close the sitemap stream
sitemapStream.end();

// Optional: also log the full XML in console (streamToPromise)
streamToPromise(sitemapStream)
  .then((data) => {
    console.log('✅ Sitemap XML generated:\n', data.toString());
  })
  .catch((err) => console.error('❌ Error generating sitemap:', err));
