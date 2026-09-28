'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Car,
  Wrench,
  Battery,
  Target,
  Zap,
  Heart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  MapPin,
  Phone,
  Mail,
  Gauge,
  CircuitBoard
} from 'lucide-react';

const journey = [
  {
    icon: Car,
    title: 'Traditional Cars',
    description: 'Started with petrol car electrical systems, sound systems, and AC repairs at AR Workshop.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Hybrid Vehicles',
    description: 'Advanced to hybrid vehicle diagnostics and battery reconditioning at Allah Hoo Autos.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Battery,
    title: 'Electric Vehicles',
    description: 'Now specializing in fully electric vehicles, EV battery systems, and advanced diagnostics.',
    color: 'from-primary-500 to-accent-500',
  },
  {
    icon: Gauge,
    title: 'Diagnostic Expert',
    description: 'Uses professional diagnostic tools including Techstream, Honda HDS, Autel, Xentry, Audi ODIS, and Tesla Toolbox 3.',
    color: 'from-orange-500 to-red-500',
  },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Accurate diagnostics and repairs with attention to every detail.',
  },
  {
    icon: Zap,
    title: 'Expertise',
    description: '12+ years of hands-on experience across all vehicle types.',
  },
  {
    icon: Wrench,
    title: 'Dedication',
    description: 'Committed to providing the best service for every vehicle.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Clear communication and reliable service you can trust.',
  },
];

const funFacts = [
  { label: 'Years Experience', value: '12+', icon: Wrench },
  { label: 'Vehicles Serviced', value: '3k+', icon: Car },
  { label: 'Vehicle Brands', value: '20+', icon: CheckCircle2 },
  { label: 'Happy Customers', value: '100+', icon: Heart },
];

const languages = [
  { name: 'Urdu', level: 'Native or Bilingual Proficiency' },
  { name: 'Punjabi', level: 'Native or Bilingual Proficiency' },
//   { name: 'Saraiki', level: 'Native or Bilingual Proficiency' },
//   { name: 'English', level: 'Professional Working Proficiency' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative glass-card p-4 rounded-3xl">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/profile.png"
                      alt="Muhammad Abubakar, automotive diagnostics specialist"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 448px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dark-900 dark:text-white">Electrical & Gearbox Specialist</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">HEV & EV Specialist</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
                <Sparkles className="w-4 h-4" />
                About Me
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From <span className="gradient-text">Traditional</span> to{' '}
                <span className="gradient-text">Electric</span>
              </h1>
              
              <div className="space-y-4 text-dark-600 dark:text-dark-300 text-lg">
                <p>
                  I&apos;m <span className="font-semibold text-dark-900 dark:text-white">Muhammad Abubakar</span>, 
                  an automotive specialist with 12+ years of hands-on experience. My work covers electrical, hybrid, EV, and gearbox systems.
                </p>
                <p>
                  A dedicated and hardworking professional skilled in{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">electrical diagnostics</span>,{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">wiring repair</span>, and{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">gearbox diagnostics and repair</span>{' '}
                  across traditional petrol cars, hybrid vehicles, and fully electric cars.
                </p>
                <p>
                  Currently working at <span className="font-semibold">AR Akhtar Ali Workshop</span> in Lahore, I specialize in 
                  advanced diagnostics and repair on HEV and fully electric vehicles, plus gearbox fault finding and repair.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/experience" className="btn-primary">
                  View Experience
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              From traditional cars to cutting-edge electric vehicles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-dark-200 dark:from-dark-700 to-transparent z-0" />
                )}
                <div className="glass-card p-6 relative z-10 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-dark-500 dark:text-dark-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🎯 Why Choose <span className="gradient-text">Me?</span>
              </h2>
              
              <div className="space-y-6 text-dark-600 dark:text-dark-300">
                <p className="text-lg">
                  Modern vehicles require specialized expertise—whether it&apos;s a traditional petrol car, a hybrid, or a fully electric vehicle.
                </p>
                <p className="text-lg">
                  My extensive experience and dedication to quality ensure:
                </p>
                
                <div className="grid gap-4">
                  {[
                    { icon: '⚡', title: 'Advanced Diagnostics', desc: 'Using professional scanners for accurate fault finding' },
                    { icon: '🔋', title: 'Battery Expertise', desc: 'Hybrid and EV battery inspection, reconditioning, and repair' },
                    { icon: '🔧', title: 'Electrical & Gearbox Work', desc: 'Wiring and ECU diagnosis, plus gearbox fault finding and repair' },
                    { icon: '🚗', title: 'All Major Brands', desc: 'Toyota, Lexus, Mercedes, BMW, BYD, and more' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl glass">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="font-medium text-dark-900 dark:text-white">{item.title}</span>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl font-medium text-dark-800 dark:text-dark-200 mb-6 italic">
                  &quot;Quality work, honest service, and dedication to every vehicle I touch—that&apos;s my commitment to you.&quot;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-white font-bold">M.A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-white">Muhammad Abubakar</p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">Auto Electrician, Lahore</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Languages I <span className="gradient-text">Speak</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{lang.name}</h3>
                <p className="text-sm text-dark-500 dark:text-dark-400">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              What I <span className="gradient-text">Bring</span>
            </h2>
            <p className="section-subtitle">
              Core values that drive my work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-dark-500 dark:text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-900 dark:text-white">
              📊 By the Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4">
                    <fact.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{fact.value}</div>
                  <div className="text-dark-500 dark:text-dark-400">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-dark-900 dark:text-white">
              📍 Location & Contact
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>A.R Akhtar Ali Autos Near Netsol Technologies, Lahore, Pakistan</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a href="tel:+923188283154" className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-500">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+92 318 8283154</span>
              </a>
              <a href="mailto:abubakaraleem1122@gmail.com" className="flex items-center gap-2 text-dark-600 dark:text-dark-300 hover:text-primary-500">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>abubakaraleem1122@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
