import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { siteUrl, socialImageUrl } from '@/lib/seo';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Abubakar | Hybrid, EV, Gearbox & AC Diagnostics',
    template: '%s | Muhammad Abubakar',
  },
  description: 'Muhammad Abubakar offers electrical, hybrid, EV, gearbox, and car AC diagnostics and repair, plus remote diagnostic assistance. 12+ years of experience.',
  keywords: ['Auto Electrician', 'Hybrid Vehicle Specialist', 'Electric Vehicle Repair', 'Gearbox Diagnostics', 'Gearbox Repair', 'Car AC Diagnostics', 'Car AC Repair', 'EV Battery System', 'HEV Diagnostics', 'Car Electrical Repair', 'Muhammad Abubakar', 'Toyota Hybrid', 'Mercedes EV', 'BMW Electric', 'CAN-BUS Repair'],
  authors: [{ name: 'Muhammad Abubakar', url: 'https://mabubakar.com' }],
  creator: 'Muhammad Abubakar',
  publisher: 'Muhammad Abubakar',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: 'Muhammad Abubakar | Hybrid, EV, Gearbox & AC Diagnostics',
    description: 'Electrical, hybrid, EV, gearbox, and car AC diagnostics and repair. 12+ years of experience and remote diagnostic assistance.',
    url: `${siteUrl}/`,
    siteName: 'Muhammad Abubakar - Auto Electrician Portfolio',
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: 'Muhammad Abubakar - Auto Electrician Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abubakar | Vehicle Diagnostics & Repair',
    description: 'Electrical, hybrid, EV, gearbox, and car AC diagnostics and repair. Remote diagnostic assistance available.',
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const identitySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Muhammad Abubakar',
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/profile.png`,
      jobTitle: 'Automotive diagnostics and repair specialist',
      telephone: '+92 318 8283154',
      email: 'abubakaraleem1122@gmail.com',
      knowsAbout: ['Hybrid vehicle diagnostics', 'Electric vehicle diagnostics', 'Gearbox diagnostics', 'Car AC diagnostics', 'Auto electrical repair'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Muhammad Abubakar',
      url: `${siteUrl}/`,
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identitySchema) }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF6B6B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
