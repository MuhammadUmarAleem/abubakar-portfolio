import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Automotive Diagnostic Skills & Tools',
  description: 'Explore diagnostic skills for hybrid and electric vehicles, gearboxes, car AC and electrical systems, plus the professional tools used.',
  path: '/skills',
});

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
