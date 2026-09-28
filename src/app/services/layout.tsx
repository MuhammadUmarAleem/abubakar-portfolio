import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Vehicle Diagnostics & Repair Services',
  description: 'Explore hybrid battery, EV, gearbox and car AC diagnostics and repair, plus electrical, scanner, CAN-BUS and safety system services.',
  path: '/services',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
