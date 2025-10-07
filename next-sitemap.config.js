/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.fleitzfamilytile.com",
  generateRobotsTxt: true,
  exclude: ["/legal"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: path === "/" ? 1 : 0.7,
      lastmod: new Date().toISOString()
    };
  }
};

export default config;
