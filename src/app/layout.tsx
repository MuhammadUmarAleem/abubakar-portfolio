import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

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
    default: 'Muhammad Abubakar | Auto Electrician & Gearbox Specialist',
    template: '%s | Muhammad Abubakar',
  },
  description: 'Muhammad Abubakar offers auto electrical, hybrid, EV, and gearbox diagnostics and repair in Lahore, with remote diagnostic assistance. 12+ years of experience.',
  keywords: ['Auto Electrician', 'Hybrid Vehicle Specialist', 'Electric Vehicle Repair', 'Gearbox Diagnostics', 'EV Battery System', 'HEV Diagnostics', 'Car Electrical Repair', 'Muhammad Abubakar', 'Lahore Pakistan', 'Toyota Hybrid', 'Mercedes EV', 'BMW Electric', 'CAN-BUS Repair'],
  authors: [{ name: 'Muhammad Abubakar', url: 'https://mabubakar.com' }],
  creator: 'Muhammad Abubakar',
  publisher: 'Muhammad Abubakar',
  metadataBase: new URL('https://mabubakar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Abubakar | Auto Electrician & Gearbox Specialist',
    description: 'Auto electrical, hybrid, EV, and gearbox diagnostics and repair in Lahore. 12+ years of experience and remote diagnostic assistance.',
    url: 'https://mabubakar.com',
    siteName: 'Muhammad Abubakar - Auto Electrician Portfolio',
    images: [
      {
        url: '/og-image.png',
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
    title: 'Muhammad Abubakar | Auto Electrician',
    description: 'Auto electrical, hybrid, EV, and gearbox diagnostics and repair in Lahore. Remote diagnostic assistance available.',
    images: ['/og-image.png'],
    creator: '@mabubakar',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
