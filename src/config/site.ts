export const siteConfig = {
  name: "Fleitz Family Tile",
  description:
    "Family-owned tile showroom and installation experts providing curated surfaces for homes and businesses across Florida.",
  keywords: [
    "tile showroom",
    "tile installation",
    "flooring",
    "Florida tile store"
  ],
  url: "https://www.fleitzfamilytile.com",
  ogImage: "/images/branding/og-image.jpg",
  contact: {
    phone: "(000) 000-0000",
    email: "info@fleitzfamilytile.com"
  },
  locations: [
    {
      label: "Primary Showroom",
      address: "Update with verified street address",
      city: "Florida (update with city)",
      coordinates: null
    }
  ],
  hours: {
    weekdays: "Monday–Friday: 9:00 AM – 5:00 PM",
    saturday: "Saturday: 10:00 AM – 3:00 PM",
    sunday: "Sunday: Closed"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/fleitzfamilytile",
    instagram: "https://www.instagram.com/fleitzfamilytile"
  }
};

export type SiteConfig = typeof siteConfig;
