import { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/about',
    '/skills',
    '/experience',
    '/specializations',
    '/services',
    '/services/hybrid-battery-repair',
    '/services/ev-diagnostics',
    '/services/gearbox-diagnostics',
    '/services/car-ac-diagnostics',
    '/contact',
  ];

  return paths.map((path) => ({ url: path === '/' ? siteUrl : new URL(path, siteUrl).toString() }));
}
