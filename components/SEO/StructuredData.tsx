export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KangLaundry",
    "url": "https://kanglaundry.vercel.app/",
    "image": "https://kanglaundry.vercel.app/og-image.jpg",
    "telephone": "+628978898454",
    "priceRange": "Rp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Purwokerto",
      "addressCountry": "ID"
    },
    "areaServed": "Purwokerto Barat, Purwokerto Timur, Purwokerto Utara, Purwokerto Selatan, Sokaraja, Kembaran",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "21:00"
    }]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}