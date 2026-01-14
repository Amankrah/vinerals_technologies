type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };

interface StructuredDataProps {
  data: JSONValue;
}

/**
 * Component to inject JSON-LD structured data for SEO
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for site-wide use
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vinerals Technologies',
  alternateName: 'Vinerals Tech',
  url: 'https://vinerals.ca',
  logo: 'https://vinerals.ca/logo.png',
  description:
    'Montreal-based solidarity cooperative building affordable software and AI solutions for SMEs.',
  foundingDate: '2025',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montreal',
      addressRegion: 'QC',
      addressCountry: 'CA',
    },
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Canada',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Quebec',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/vinerals-technologies',
    'https://github.com/vinerals-tech',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-514-961-9754',
    contactType: 'sales',
    availableLanguage: ['English', 'French'],
  },
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vinerals Technologies',
  image: 'https://vinerals.ca/office.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Montreal',
    addressLocality: 'Montreal',
    addressRegion: 'QC',
    postalCode: 'H9X 1J1',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5017,
    longitude: -73.5673,
  },
  url: 'https://vinerals.ca',
  telephone: '+1 (514) 961-9754',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
};

// Service Schema generator
export function createServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'Vinerals Technologies',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    description: service.description,
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'CAD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: service.price,
          priceCurrency: 'CAD',
          unitText: 'hourly rate starting from',
        },
      },
    }),
  };
}

// Article/Blog Post Schema generator
export function createArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinerals Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vinerals.ca/logo.png',
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    ...(article.image && {
      image: article.image,
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

// Breadcrumb Schema generator
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ Schema generator
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
