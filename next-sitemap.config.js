/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://avidu.me',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    // ...other options
  }