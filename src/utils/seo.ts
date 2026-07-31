import { SITE_CONFIG } from "../config/siteConfig";
import { Product } from "../types";

export function updatePageTitleAndMeta(title: string, description: string) {
  if (typeof document === "undefined") return;

  // Title
  document.title = title ? `${title} | ${SITE_CONFIG.brandName}` : `${SITE_CONFIG.brandName} - ${SITE_CONFIG.brandTagline}`;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute("content", description || "Organic, 100% natural herbal soup powders crafted using traditional recipes.");

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute("content", title);

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.setAttribute("content", description);
}

export function generateProductSchema(product: Product) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.shortDescription,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.brandName
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE_CONFIG.siteUrl}/#/product/${product.slug}`,
      "priceCurrency": SITE_CONFIG.currencyCode,
      "price": product.price,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.stockStatus === "In Stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.brandName
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  };

  return JSON.stringify(schema);
}

export function generateOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.brandName,
    "url": SITE_CONFIG.siteUrl,
    "logo": `${SITE_CONFIG.siteUrl}/favicon.ico`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_CONFIG.phone,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta", "hi"]
    },
    "sameAs": [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube
    ]
  };

  return JSON.stringify(schema);
}
