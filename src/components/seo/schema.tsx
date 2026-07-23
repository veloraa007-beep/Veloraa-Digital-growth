import React from "react";

type SchemaType = "Organization" | "LocalBusiness" | "WebSite" | "WebPage" | "FAQPage" | "BreadcrumbList";

interface SchemaProps {
  type: SchemaType;
  data: Record<string, any>;
}

export default function Schema({ type, data }: SchemaProps) {
  // Ensure the base properties are always present based on the type
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}

// Pre-configured Organization Schema
export function OrganizationSchema() {
  const data = {
    name: "Velora",
    url: "https://velora.digital",
    logo: "https://velora.digital/logo.png",
    sameAs: [
      "https://twitter.com/velora",
      "https://linkedin.com/company/velora",
      "https://instagram.com/velora.digital"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-5555", // Placeholder
      contactType: "customer service",
      availableLanguage: "English"
    }
  };

  return <Schema type="Organization" data={data} />;
}

// Pre-configured LocalBusiness Schema
export function LocalBusinessSchema() {
  const data = {
    name: "Velora",
    image: "https://velora.digital/website-screenshot.png",
    "@id": "https://velora.digital",
    url: "https://velora.digital",
    telephone: "+1-800-555-5555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    priceRange: "$$$"
  };

  return <Schema type="LocalBusiness" data={data} />;
}
