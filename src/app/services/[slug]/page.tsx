import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { serviceGuides, serviceGuideSlugs } from '@/lib/service-guides';
import { pageMetadata, serializeJsonLd, siteUrl } from '@/lib/seo';

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceGuideSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = serviceGuides[params.slug];
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/services/${guide.slug}`,
  });
}

export default function ServiceGuidePage({ params }: Props) {
  const guide = serviceGuides[params.slug];
  if (!guide) notFound();

  const url = `${siteUrl}/services/${guide.slug}`;
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: guide.title,
        description: guide.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        author: { '@id': `${siteUrl}/#person` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        mainEntity: { '@id': `${url}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: guide.title,
        description: guide.description,
        url,
        provider: { '@id': `${siteUrl}/#person` },
        serviceType: guide.title,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="pt-28 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageSchema) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-dark-500 dark:text-dark-400 mb-10">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-primary-500">Services</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">{guide.title}</span>
        </nav>

        <header className="max-w-3xl mb-12">
          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">Vehicle diagnostic service</p>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">{guide.title}</h1>
          <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">{guide.intro}</p>
          <p className="mt-5 text-sm text-dark-500 dark:text-dark-400">
            Guide by <Link href="/about" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Muhammad Abubakar</Link>, automotive diagnostics specialist.
          </p>
        </header>

        <section aria-label="Quick answer" className="glass-card p-6 md:p-8 mb-14 border-l-4 border-primary-500">
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{guide.quickQuestion}</h2>
          <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{guide.quickAnswer}</p>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-5">Common signs</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {guide.symptoms.map((symptom) => (
              <li key={symptom} className="glass-card p-5 flex gap-3 text-dark-600 dark:text-dark-300">
                <CheckCircle2 aria-hidden="true" className="w-5 h-5 mt-0.5 text-primary-500 flex-shrink-0" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-3">How the fault is investigated</h2>
          <p className="text-dark-500 dark:text-dark-400 mb-6">The checks below depend on the vehicle and the symptoms found during inspection.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {guide.checks.map((check, index) => (
              <article key={check.title} className="glass-card p-6">
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">Step {index + 1}</p>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{check.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{check.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">What happens after diagnosis?</h2>
            <ul className="space-y-3 list-disc pl-5 text-dark-600 dark:text-dark-300">
              {guide.nextSteps.map((step) => <li key={step}>{step}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Before you get in touch</h2>
            <ul className="space-y-3 list-disc pl-5 text-dark-600 dark:text-dark-300">
              {guide.preparation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">Frequently asked questions</h2>
          <div className="space-y-5">
            {guide.faqs.map((faq) => (
              <article key={faq.question} className="glass-card p-6">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-dark-600 dark:text-dark-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-card p-7 md:p-9 mb-12">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">Discuss your vehicle fault</h2>
          <p className="text-dark-600 dark:text-dark-300 mb-6">Share the vehicle details and symptoms. I can advise on the diagnostic appointment or available remote assistance.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Contact me <ArrowRight className="w-4 h-4" /></Link>
            <a href="https://wa.me/923188283154" className="btn-secondary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            <a href="tel:+923188283154" className="btn-secondary inline-flex items-center gap-2"><Phone className="w-4 h-4" /> Call</a>
          </div>
        </section>

        <aside aria-label="Related services">
          <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Related services</h2>
          <div className="flex flex-wrap gap-4">
            {guide.related.map((slug) => (
              <Link key={slug} href={`/services/${slug}`} className="glass-card p-4 text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-2">
                {serviceGuides[slug].title} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
