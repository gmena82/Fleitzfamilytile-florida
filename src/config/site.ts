export const siteConfig = {
  name: "Fleitz Family Tile",
  description:
    "Premium tile installation and remodeling contractor serving Bradenton, Sarasota, and Lakewood Ranch with meticulous craftsmanship.",
  keywords: [
    "Bradenton tile installer",
    "Bradenton tile contractor",
    "tile installation Bradenton FL",
    "Sarasota tile installation",
    "Lakewood Ranch tile installer"
  ],
  url: "https://www.fleitzfamilytile.com",
  ogImage: "[OG_IMAGE]",
  contact: {
    phone: "[PHONE]",
    email: "[EMAIL]"
  },
  headquarters: {
    street: "[ADDRESS_LINE_1]",
    city: "Bradenton",
    state: "FL",
    postalCode: "[ZIP]"
  },
  geo: {
    latitude: 27.498928,
    longitude: -82.574821
  },
  serviceAreas: ["Bradenton", "Sarasota", "Lakewood Ranch", "Gulf-Coast communities"],
  hours: {
    weekdays: "Monday–Friday: 8:00 AM – 5:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: By appointment"
  },
  socialLinks: {
    facebook: "https://www.facebook.com/[handle]",
    x: "https://x.com/[handle]",
    instagram: "https://www.instagram.com/[handle]/",
    youtube: "https://www.youtube.com/@[handle]"
  }
};

export type SiteConfig = typeof siteConfig;
