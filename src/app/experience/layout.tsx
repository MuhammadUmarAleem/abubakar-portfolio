import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Work History & Experience',
  description: 'Review Muhammad Abubakar’s automotive work history from 2014 to present and experience with hybrid, EV, gearbox, AC and electrical systems.',
  path: '/experience',
});

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
