'use client';

import { motion } from 'framer-motion';
import { 
  Wrench, 
  Car, 
  Battery, 
  Zap,
  Gauge,
  CircuitBoard,
  Sparkles,
  CheckCircle2,
  Star,
  Folder
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Hybrid Vehicle Diagnostics',
    description: 'Comprehensive diagnostics and repair for Toyota, Lexus, and Honda hybrid systems. Expert in battery pack inspection, reconditioning, and hybrid system troubleshooting.',
    tags: ['Toyota Techstream', 'Honda HDS', 'Battery Testing', 'Hybrid Systems'],
    highlights: [
      'Battery pack inspection & reconditioning',
      'Inverter & ECU diagnostics',
      'High-voltage relay repair',
      'Cooling system maintenance'
    ],
    color: 'from-blue-500 to-cyan-500',
    featured: true,
    category: 'Hybrid Vehicles',
  },
  {
    title: 'EV Battery Systems',
    description: 'Complete EV battery system service including battery pack removal, inspection, reconditioning, and installation. Expert in high-voltage safety procedures.',
    tags: ['High-Voltage Safety', 'Battery Inspection', 'Reconditioning', 'EV Systems'],
    highlights: [
      'Battery pack removal & installation',
      'Cell testing & balancing',
      'Safety procedures',
      'Performance optimization'
    ],
    color: 'from-green-500 to-emerald-500',
    featured: true,
    category: 'Electric Vehicles',
  },
  {
    title: 'CAN-BUS Communication Repair',
    description: 'Troubleshooting and repair of CAN-BUS wiring and communication issues. Module programming and ECU diagnostics for all vehicle brands.',
    tags: ['CAN-BUS', 'Wiring Repair', 'Module Programming', 'ECU Diagnostics'],
    highlights: [
      'Communication troubleshooting',
      'Wiring repair & restoration',
      'Module programming',
      'Network diagnostics'
    ],
    color: 'from-purple-500 to-pink-500',
    category: 'Electrical Systems',
  },
  {
    title: 'Electric Motor & Inverter Service',
    description: 'Expert repair and maintenance of electric motors, inverters, and converters for hybrid and electric vehicles.',
    tags: ['Electric Motors', 'Inverters', 'Converters', 'DC-DC Systems'],
    highlights: [
      'Motor wiring repair',
      'Inverter diagnostics',
      'DC-DC converter service',
      'Power electronics testing'
    ],
    color: 'from-orange-500 to-red-500',
    category: 'EV Components',
  },
  {
    title: 'ABS & Airbag System Repair',
    description: 'Complete ABS, airbag, and safety system diagnostics and repair. ECM wiring repairs and immobilizer service.',
    tags: ['ABS Repair', 'Airbag Systems', 'Immobilizer', 'Safety Systems'],
    highlights: [
      'ABS module repair',
      'Airbag wiring service',
      'Immobilizer programming',
      'ECM diagnostics'
    ],
    color: 'from-yellow-500 to-orange-500',
    category: 'Safety Systems',
  },
  {
    title: 'Car AC Diagnostics & Repair',
    description: 'Car AC fault diagnosis, leak testing, compressor checks, and repair, including hybrid/EV cooling system maintenance.',
    tags: ['AC Diagnostics', 'AC Repair', 'Leak Testing', 'Cooling Systems'],
    highlights: [
      'AC fault diagnosis & leak testing',
      'Compressor diagnostics',
      'EV thermal management',
      'Climate control repair'
    ],
    color: 'from-cyan-500 to-blue-500',
    featured: true,
    category: 'Climate Systems',
  },
  {
    title: 'Sound & Security Systems',
    description: 'Professional installation of sound systems, security systems, reverse cameras, dash cams, and GPS trackers.',
    tags: ['Sound Systems', 'Security', 'Cameras', 'GPS Trackers'],
    highlights: [
      'Premium audio installation',
      'Alarm system setup',
      'Camera integration',
      'GPS tracking systems'
    ],
    color: 'from-indigo-500 to-purple-500',
    category: 'Accessories',
  },
  {
    title: 'Charging System Service',
    description: 'EV and hybrid charging system fault diagnosis, repair, and maintenance. Onboard charger and charging port service.',
    tags: ['Charging Systems', 'Onboard Charger', 'Charging Port', 'EV Service'],
    highlights: [
      'Charging fault diagnosis',
      'Charger port repair',
      'Cable testing',
      'System optimization'
    ],
    color: 'from-emerald-500 to-green-500',
    category: 'Electric Vehicles',
  },
  {
    title: 'Gearbox Diagnostics & Repair',
    description: 'Gear shifting and transmission faults assessed with code reading, live data, wiring checks, and repair planning.',
    tags: ['Gearbox Diagnostics', 'Transmission Controls', 'Wiring Checks'],
    highlights: ['Gearbox fault code reading', 'Shift and selector checks', 'Transmission wiring diagnosis', 'Repair assessment'],
    color: 'from-slate-500 to-blue-500',
    featured: true,
    category: 'Gearbox Systems',
  },
];

const categories = ['All', 'Hybrid Vehicles', 'Electric Vehicles', 'Electrical Systems', 'EV Components', 'Safety Systems', 'Climate Systems', 'Gearbox Systems', 'Accessories'];

const stats = [
  { label: 'Years Experience', value: '12+', icon: Folder },
  { label: 'Vehicles Serviced', value: '3k+', icon: Car },
  { label: 'Vehicle Brands', value: '20+', icon: Star },
  { label: 'Service Types', value: '5+', icon: Wrench },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Folder className="w-4 h-4" />
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Service <span className="gradient-text">Specializations</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              Service expertise across hybrid and electric vehicles, gearbox diagnostics and repair, and car AC diagnostics and repair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-dark-500 dark:text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Specializations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className={`h-32 bg-gradient-to-br ${project.color} p-6 relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded text-xs bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-12 bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              All <span className="gradient-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                  {project.category === 'Hybrid Vehicles' && <Zap className="w-6 h-6 text-white" />}
                  {project.category === 'Electric Vehicles' && <Battery className="w-6 h-6 text-white" />}
                  {project.category === 'Electrical Systems' && <CircuitBoard className="w-6 h-6 text-white" />}
                  {project.category === 'EV Components' && <Gauge className="w-6 h-6 text-white" />}
                  {project.category === 'Safety Systems' && <Car className="w-6 h-6 text-white" />}
                  {project.category === 'Climate Systems' && <Wrench className="w-6 h-6 text-white" />}
                  {project.category === 'Accessories' && <Star className="w-6 h-6 text-white" />}
                  {project.category === 'Gearbox Systems' && <Wrench className="w-6 h-6 text-white" />}
                </div>
                <span className="text-xs font-medium text-primary-600 dark:text-primary-400">{project.category}</span>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Brands I Work With
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'BYD', 'Kia', 'Nissan', 'Ford', 'MG', 'Hyundai', 'Honda'].map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-full glass text-dark-600 dark:text-dark-300 font-medium"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Need Professional Service?
            </h2>
            <p className="text-dark-500 dark:text-dark-400 mb-6 max-w-xl mx-auto">
              I provide hybrid and EV service, gearbox diagnostics and repair, car AC diagnostics and repair, and auto electrical work.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
