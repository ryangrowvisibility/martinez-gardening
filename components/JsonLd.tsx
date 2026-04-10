export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapeService",
    name: "Martinez Gardening",
    description:
      "Personal lawn and garden care by Julian Martinez since 2008. Lawn mowing, edging, garden maintenance, yard cleanup, and landscaping in Fresno, CA.",
    url: "https://martinez-gardening.vercel.app",
    telephone: "+15599782067",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4202 N Constance Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93722",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Fresno, CA",
    },
    founder: {
      "@type": "Person",
      name: "Julian Martinez",
    },
    foundingDate: "2008",
    priceRange: "$",
    sameAs: [
      "https://www.google.com/maps/search/?api=1&query=Martinez+Gardening&query_place_id=ChIJ_fLVFuNllIAR08z5HFud7XI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
