import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Vehicle Service Specializations',
  description: 'See service specializations in hybrid batteries, EV systems, gearbox diagnostics, car AC, charging, CAN-BUS and automotive electrical repair.',
  path: '/specializations',
});

export default function SpecializationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
