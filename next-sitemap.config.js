// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://cms-strapi-mocha.vercel.app', // Replace with your domain
    generateRobotsTxt: true, // Generates robots.txt file
    changefreq: 'daily', // How often the content changes
    priority: 0.7, // Page priority (0.0 - 1.0)
    sitemapSize: 5000, // Split sitemap if you have more than 5000 URLs
  };
  