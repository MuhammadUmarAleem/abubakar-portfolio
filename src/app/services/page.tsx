'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Battery,
  Gauge,
  CircuitBoard,
  Wrench,
  Zap,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Thermometer,
  Radio,
  Shield,
  Settings,
  Phone
} from 'lucide-react';

const services = [
  {
    icon: Battery,
    title: 'EV Battery Service',
    description: 'Complete EV battery system inspection, maintenance, reconditioning, and repair with proper safety procedures.',
    features: [
      'Battery Pack Inspection',
      'Cell Testing & Balancing',
      'Reconditioning Service',
      'Safety Procedures',
      'Performance Optimization',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Hybrid System Diagnostics',
    description: 'Advanced diagnostics for all hybrid vehicle systems including battery, inverter, and motor components.',
    features: [
      'Hybrid Battery Testing',
      'Inverter Diagnostics',
      'ECU Fault Finding',
      'High-Voltage Relay Check',
      'System Performance Analysis',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Gauge,
    title: 'Scanner Diagnostics',
    description: 'Professional scanner-based diagnostics using Techstream, Honda HDS, Autel, Launch, Xentry, Audi ODIS, and Tesla Toolbox 3.',
    features: [
      'OBD-II Fault Reading',
      'Live Data Analysis',
      'Fault Code Clearing',
      'System Reset',
      'Module Programming',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CircuitBoard,
    title: 'CAN-BUS Repair',
    description: 'Troubleshooting and repair of CAN-BUS communication issues and wiring problems.',
    features: [
      'Communication Diagnostics',
      'Wiring Repair',
      'Module Programming',
      'Network Testing',
      'Signal Analysis',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wrench,
    title: 'Gearbox Diagnostics & Repair',
    description: 'Gearbox and transmission fault diagnosis, including electronic control issues and repair based on inspection.',
    features: [
      'Gearbox Fault Code Reading',
      'Shift & Selector Fault Diagnosis',
      'Transmission Wiring Checks',
      'Control System Testing',
      'Gearbox Repair Assessment',
    ],
    color: 'from-slate-500 to-blue-500',
  },
  {
    icon: Car,
    title: 'Complete Auto Electrical',
    description: 'Full automotive electrical service including wiring repair, alternator, starter, and lighting systems.',
    features: [
      'Wiring Repair',
      'Alternator Service',
      'Starter Motor Repair',
      'Lighting Systems',
      'Battery Service',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Thermometer,
    title: 'Car AC Diagnostics & Repair',
    description: 'AC fault diagnosis and repair, including leak testing, compressor checks, and hybrid/EV cooling system maintenance.',
    features: [
      'AC Fault Diagnosis',
      'Leak Testing',
      'Compressor Checks & Repair',
      'EV Thermal Management',
      'Climate Control Repair',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Radio,
    title: 'Sound & Security Systems',
    description: 'Professional installation of sound systems, security alarms, cameras, and GPS trackers.',
    features: [
      'Audio System Installation',
      'Security Alarm Setup',
      'Reverse Camera',
      'Dash Cam Installation',
      'GPS Tracker Setup',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'ABS, airbag, and immobilizer system diagnostics and repair for all vehicle brands.',
    features: [
      'ABS Diagnostics',
      'Airbag System Service',
      'Immobilizer Repair',
      'ECM Service',
      'Safety Module Reset',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
];

const process = [
  {
    step: 1,
    icon: Phone,
    title: 'Contact Me',
    description: 'Call or WhatsApp to describe your vehicle issue.',
  },
  {
    step: 2,
    icon: Gauge,
    title: 'Diagnostics',
    description: 'Professional diagnosis using advanced equipment.',
  },
  {
    step: 3,
    icon: Wrench,
    title: 'Repair',
    description: 'Expert repair with quality parts and workmanship.',
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Testing',
    description: 'Thorough testing to ensure everything works perfectly.',
  },
];

const brands = ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'BYD', 'Kia', 'Nissan', 'Ford', 'MG', 'Hyundai', 'Honda'];

const guideLinks: Record<string, string> = {
  'EV Battery Service': '/services/ev-diagnostics',
  'Hybrid System Diagnostics': '/services/hybrid-battery-repair',
  'Gearbox Diagnostics & Repair': '/services/gearbox-diagnostics',
  'Car AC Diagnostics & Repair': '/services/car-ac-diagnostics',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Professional Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vehicle <span className="gradient-text">Diagnostics &amp; Repair Services</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              Electrical, hybrid, EV, gearbox, and car AC diagnostics and repair for traditional and electric vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{service.title}</h2>
                <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {guideLinks[service.title] && (
                  <Link href={guideLinks[service.title]} className="inline-flex items-center gap-2 mt-5 font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                    Learn about diagnosis <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              Simple process to get your vehicle diagnosed and repaired
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent z-0" />
                )}
                
                <div className="glass-card p-6 text-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Brands I <span className="gradient-text">Service</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg">
              Expert service for all major vehicle brands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {brands.map((brand) => (
              <span
                key={brand}
                className="px-6 py-3 rounded-xl glass text-dark-700 dark:text-dark-300 font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                {brand}
              </span>
            ))}
            {/* <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium">
              ...All other brands
            </span> */}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                  Why Choose <span className="gradient-text">My Services?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: '⚡', text: '12+ Years of Experience' },
                    { icon: '🔧', text: 'Electrical, Gearbox, Car AC, Hybrid & EV Work' },
                    { icon: '🔋', text: 'Specialized in Battery Systems' },
                    { icon: '📊', text: 'Professional Scanner Diagnostics' },
                    { icon: '✅', text: 'Quality Workmanship Guaranteed' },
                    { icon: '🚗', text: 'Service for All Major Brands' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-dark-700 dark:text-dark-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block">
                  <div className="text-6xl font-bold gradient-text mb-2">12+</div>
                  <div className="text-dark-500 dark:text-dark-400">Years of Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Remote Support */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                <span className="gradient-text">Remote Diagnostic Support</span>
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                Hands-on diagnostics and repair are available by appointment. I also provide remote diagnostic assistance for drivers and workshops.
              </p>
              <p className="text-dark-500 dark:text-dark-400">
                Share the vehicle model, symptoms, fault codes, and any scan results by WhatsApp. I can review the information and advise on the next diagnostic steps.
              </p>
            </div>
            <div className="flex flex-wrap md:justify-center gap-4">
              <a href="https://wa.me/923188283154" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ask for Remote Assistance <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/contact" className="btn-secondary">Contact Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Ready to Get Your Vehicle Serviced?
            </h2>
            <p className="text-dark-500 dark:text-dark-400 mb-6 max-w-xl mx-auto">
              Contact me for electrical, hybrid, EV, gearbox, or car AC diagnostics and repair.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+923188283154" className="btn-primary">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Page
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
