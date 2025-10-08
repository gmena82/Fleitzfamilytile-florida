import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const hq = siteConfig.headquarters;
  const addresses = [
    {
      '@type': 'PostalAddress',
      streetAddress: hq.street,
      addressLocality: hq.city,
      addressRegion: hq.state,
      postalCode: hq.postalCode,
      addressCountry: 'US'
    }
  ];

  const payload = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: addresses.length === 1 ? addresses[0] : addresses,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00'
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
