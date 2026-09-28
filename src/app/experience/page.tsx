'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Wrench,
  Sparkles,
  ArrowRight,
  Car,
  Battery,
  Zap,
  Gauge,
  CircuitBoard,
  Award,
  Target,
  Thermometer
} from 'lucide-react';
import Link from 'next/link';

const experience = [
  {
    role: 'Auto Electrician',
    company: 'AR Akhtar Ali Workshop',
    period: '2019 - Present',
    type: 'Full-time',
    specialty: 'Hybrid, EV, Gearbox & AC Diagnostics',
    current: true,
    description: 'Diagnosing and repairing hybrid and EV systems, gearbox faults, and car AC and cooling issues.',
    highlights: [
      'Performed advanced diagnostics and repair on hybrid (HEV) and fully electric vehicles (EV)',
      'Worked on EV battery systems, electric motors, inverters, converters, and charging systems',
      'Repaired CAN-BUS communication issues and programmed modules where required',
      'Installed EV accessories, DC-DC converters, dash cams, trackers, and upgraded systems',
      'Conducted preventive maintenance for EV cooling systems and wiring inspections',
      'Diagnosed gear shifting, selector, wiring, and transmission control faults',
      'Diagnosed car AC performance, compressor, leak, and cooling faults',
    ],
    technologies: ['HEV Repair', 'EV Diagnostics', 'Gearbox Diagnostics', 'Car AC Repair', 'CAN-BUS', 'Scanner Diagnostics'],
  },
  {
    role: 'Auto Electrician',
    company: 'Allah Hoo Autos',
    period: '2014 - 2019',
    type: 'Full-time',
    specialty: 'Hybrid Vehicles Specialist',
    current: false,
    description: 'Performed electrical and hybrid system diagnostics on all German and Japanese vehicles. Specialized in battery pack reconditioning and advanced scanner diagnostics.',
    highlights: [
      'Performed electrical and hybrid system diagnostics on all German and Japanese vehicles',
      'Assisted in battery pack removal, inspection, reconditioning, and installation',
      'Repaired hybrid wiring systems, inverters, ECUs, and high-voltage relays',
      'Used advanced scanners (Techstream, Launch, Autel) for fault code reading and troubleshooting',
      'Carried out ABS, airbag, immobilizer, and ECM wiring repairs',
      'Installed sound systems, security systems, reverse cameras, and lighting upgrades',
      'Repaired and serviced car AC systems including gas refilling, compressor checks, and leakage testing',
      'Handled installation and maintenance of batteries, alternators, starters, and lighting systems',
      'Diagnosed electrical faults using basic tools and multimeters',
    ],
    technologies: ['Hybrid Systems', 'Techstream', 'Honda HDS', 'Autel', 'Launch', 'ECU Repair', 'Car AC', 'Sound Systems', 'Security Systems', 'Electrical Repair', 'Multimeter Diagnostics'],
  },
];

const specializations = [
  { name: 'Traditional Petrol Cars', icon: Car, expertise: 'Expert', description: 'AC systems, sound systems, security, lighting' },
  { name: 'Hybrid Vehicles (HEV)', icon: Zap, expertise: 'Expert', description: 'Battery reconditioning, inverters, ECU repair' },
  { name: 'Electric Vehicles (EV)', icon: Battery, expertise: 'Expert', description: 'Battery systems, motors, charging systems' },
  { name: 'Diagnostic Systems', icon: Gauge, expertise: 'Expert', description: 'OBD-II, Techstream, Honda HDS, Autel, Launch' },
  { name: 'Electrical Wiring', icon: CircuitBoard, expertise: 'Expert', description: 'CAN-BUS, short circuit, open circuit repair' },
  { name: 'High-Voltage Systems', icon: Wrench, expertise: 'Advanced', description: 'Safety procedures, inverters, converters' },
  { name: 'Gearbox Diagnostics & Repair', icon: Wrench, expertise: 'Experienced', description: 'Gearbox fault diagnosis, control systems, and repair assessment' },
  { name: 'Car AC Diagnostics & Repair', icon: Thermometer, expertise: 'Experienced', description: 'AC fault finding, leak testing, compressor checks, and repair' },
];

const achievements = [
  { icon: Wrench, value: '12+', label: 'Years Experience' },
  { icon: Car, value: '3k+', label: 'Vehicles Serviced' },
  { icon: Target, value: '20+', label: 'Vehicle Brands' },
  { icon: Award, value: '5+', label: 'Service Types' },
];

const brands = ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'BYD', 'Kia', 'Nissan', 'Ford', 'MG', 'Hyundai', 'Honda'];

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Professional Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              12+ years of automotive experience across electrical, hybrid, EV, gearbox, and car AC work. The timeline below shows that work history.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{item.value}</div>
                  <div className="text-dark-500 dark:text-dark-400 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-900 z-10 hidden md:block" />
                  
                  {/* Card */}
                  <div className="md:w-1/2 md:px-8">
                    <div className={`glass-card p-6 md:p-8 ${exp.current ? 'border-primary-500/50' : ''}`}>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium mb-4">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Current Position
                        </span>
                      )}
                      
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                          <Car className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark-900 dark:text-white">{exp.role}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                          <p className="text-sm text-accent-600 dark:text-accent-400">{exp.specialty}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-dark-600 dark:text-dark-300 mb-4">{exp.description}</p>

                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-dark-900 dark:text-white text-sm">Key Responsibilities:</h4>
                        {exp.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Areas of <span className="gradient-text">Specialization</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              Comprehensive expertise across all automotive electrical systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 dark:text-white">{spec.name}</h3>
                    <span className="text-xs font-medium text-green-600 dark:text-green-400">{spec.expertise}</span>
                  </div>
                </div>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{spec.description}</p>
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
              Brands I <span className="gradient-text">Work With</span>
            </h2>
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
                className="px-4 py-2 rounded-full glass text-dark-600 dark:text-dark-300 font-medium"
              >
                {brand}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full glass text-primary-600 dark:text-primary-400 font-medium">
              ...
            </span>
          </motion.div>
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
              Need Automotive Electrical Service?
            </h2>
            <p className="text-dark-500 dark:text-dark-400 mb-6 max-w-xl mx-auto">
              Contact me for hybrid and EV systems, gearbox diagnostics and repair, car AC diagnostics and repair, or electrical work.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Me
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
