import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About & Automotive Experience',
  description: 'Meet Muhammad Abubakar and learn about 12+ years of electrical, hybrid, EV, gearbox and car AC diagnostics and repair work.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
