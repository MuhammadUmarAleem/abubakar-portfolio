import type { Metadata } from 'next';

export const siteUrl = 'https://mabubakar.com';
export const socialImageUrl = `${siteUrl}/opengraph-image`;

// Keep JSON-LD safe when it is written into an HTML script element.
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = new URL(path, siteUrl).toString();
  const fullTitle = `${title} | Muhammad Abubakar`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Muhammad Abubakar',
      locale: 'en_US',
      type: 'website',
      images: [{ url: socialImageUrl, width: 1200, height: 630, alt: 'Muhammad Abubakar automotive diagnostics and repair' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [socialImageUrl],
    },
  };
}
