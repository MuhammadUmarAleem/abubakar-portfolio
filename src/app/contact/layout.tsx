import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact for Vehicle Diagnostics',
  description: 'Contact Muhammad Abubakar by phone, WhatsApp or email about hybrid, EV, gearbox, car AC and auto electrical diagnostics and repair.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
