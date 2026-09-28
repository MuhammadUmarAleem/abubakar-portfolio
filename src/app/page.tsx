'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { 
  ArrowDown, 
  Download, 
  Linkedin, 
  Mail,
  Wrench,
  CheckCircle2,
  Zap,
  Shield,
  Target,
  ExternalLink,
  Award,
  Users,
  Briefcase,
  Building2,
  Calendar,
  ChevronRight,
  Car,
  Battery,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
  Gauge,
  CircuitBoard,
  Plug,
  Thermometer
} from 'lucide-react';

// Stats data
const stats = [
  { label: 'Years Experience', value: '12+', icon: Briefcase },
  { label: 'Vehicles Serviced', value: '3k+', icon: Car },
  { label: 'Vehicle Brands', value: '20+', icon: Target },
  { label: 'Service Types', value: '5+', icon: Wrench },
];

// Social links
const socialLinks = [
  { name: 'Phone', href: 'tel:+923188283154', icon: Phone },
  { name: 'WhatsApp', href: 'https://wa.me/923188283154', icon: MessageCircle },
  { name: 'Email', href: 'mailto:abubakaraleem1122@gmail.com', icon: Mail },
];

// Experience data
const experiences = [
  {
    title: 'Auto Electrician',
    company: 'AR Akhtar Ali Workshop',
    companyUrl: '#',
    period: 'October 2023 - Present',
    type: 'Full-time',
    description: 'Hybrid and EV diagnostics and repair, plus gearbox fault diagnosis and AC system work.',
    achievements: [
      'Advanced HEV & EV diagnostics and repair',
      'Gearbox fault diagnosis and repair assessment',
      'Car AC diagnostics and repair',
      'EV battery systems & electric motors',
      'CAN-BUS communication repair',
      'EV accessories installation',
    ],
    skills: ['HEV/EV Repair', 'Gearbox Diagnostics', 'AC Repair', 'Scanner Diagnostics'],
  },
  {
    title: 'Auto Electrician',
    company: 'Allah Hoo Autos',
    companyUrl: '#',
    period: 'Early 2014 - September 2023',
    type: 'Full-time',
    description: 'Hybrid vehicle diagnostics, battery reconditioning, and car AC system repair.',
    achievements: [
      'Hybrid system diagnostics',
      'Battery pack reconditioning',
      'Inverter & ECU repairs',
      'Advanced scanner diagnostics',
      'Car AC diagnostics and repair',
    ],
    skills: ['Hybrid Systems', 'Techstream', 'Honda HDS', 'Autel'],
  },
];

// Skills categories
const skillCategories = [
  {
    title: 'Diagnostic Skills',
    icon: Gauge,
    skills: ['OBD-II Fault Finding', 'Live Data Analysis', 'ECU Diagnosis', 'Scanner Diagnostics'],
  },
  {
    title: 'EV/Hybrid Systems',
    icon: Battery,
    skills: ['EV Battery Inspection', 'DC-DC Converter', 'Electric Motor Repair', 'Inverter Wiring'],
  },
  {
    title: 'Gearbox Systems',
    icon: Wrench,
    skills: ['Gearbox Fault Diagnosis', 'Shift & Selector Checks', 'Transmission Wiring', 'Repair Assessment'],
  },
  {
    title: 'Car AC Systems',
    icon: Thermometer,
    skills: ['AC Fault Diagnosis', 'Leak Testing', 'Compressor Checks', 'AC Repair'],
  },
  {
    title: 'Electrical Testing',
    icon: CircuitBoard,
    skills: ['Short Circuit Testing', 'Open Circuit Testing', 'Multimeter Usage', 'High-Voltage Safety'],
  },
  {
    title: 'Specialized Tools',
    icon: Wrench,
    skills: ['Techstream', 'Honda HDS', 'Autel', 'Launch Scanner', 'Xentry', 'Audi ODIS', 'Tesla Toolbox 3'],
  },
];

// Featured projects/work
const featuredProjects = [
  {
    title: 'Hybrid Vehicle Diagnostics',
    description: 'Comprehensive diagnostics and repair for Toyota, Lexus, and Honda hybrid systems.',
    tags: ['Techstream', 'Honda HDS', 'Battery Testing'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'EV Battery Systems',
    description: 'Battery pack removal, inspection, reconditioning, and installation for electric vehicles.',
    tags: ['High-Voltage', 'Safety', 'Reconditioning'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'CAN-BUS Communication',
    description: 'Troubleshooting and repair of CAN-BUS wiring and communication issues.',
    tags: ['Wiring', 'ECU', 'Programming'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Gearbox Diagnostics & Repair',
    description: 'Gear shifting and transmission faults assessed with fault codes, live data, and wiring checks before repair.',
    tags: ['Gearbox', 'Transmission', 'Diagnostics'],
    color: 'from-slate-500 to-blue-500',
  },
  {
    title: 'Car AC Diagnostics & Repair',
    description: 'AC fault finding, leak testing, compressor checks, and cooling system repair.',
    tags: ['AC Diagnostics', 'Leak Testing', 'Cooling'],
    color: 'from-cyan-500 to-blue-500',
  },
];

// Services
const services = [
  {
    icon: Wrench,
    title: 'Gearbox Diagnostics & Repair',
    description: 'Gear and transmission fault finding, control-system checks, and repair after inspection.',
  },
  {
    icon: Thermometer,
    title: 'Car AC Diagnostics & Repair',
    description: 'AC fault diagnosis, leak testing, compressor checks, and repair for reliable cooling.',
  },
  {
    icon: Battery,
    title: 'EV Battery Service',
    description: 'Complete EV battery system inspection, maintenance, and reconditioning.',
  },
  {
    icon: Gauge,
    title: 'Hybrid Diagnostics',
    description: 'Advanced diagnostics for all hybrid vehicle systems using professional scanners.',
  },
  {
    icon: CircuitBoard,
    title: 'Electrical Repair',
    description: 'Complete auto electrical repair including wiring, ECU, and sensor issues.',
  },
  {
    icon: Plug,
    title: 'Charging Systems',
    description: 'Charging system fault diagnosis and DC-DC converter troubleshooting.',
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
                  Available for service
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-dark-500 dark:text-dark-400 mb-2"
              >
                Assalam o Alaikum, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
              >
                <span className="gradient-text">Muhammad</span>
                <br />
                <span className="text-dark-900 dark:text-white">Abubakar</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark-600 dark:text-dark-300 mb-6 h-10"
              >
                <TypeAnimation
                  sequence={[
                    'Auto Electrician',
                    2000,
                    'Gearbox Specialist',
                    2000,
                    'AC Diagnostics & Repair',
                    2000,
                    'HEV Specialist ⚡',
                    2000,
                    'EV Repair Expert',
                    2000,
                    'Diagnostic Specialist',
                    2000,
                    'Battery Systems Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Electrical, gearbox, and AC diagnostics and repair for{' '}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">traditional petrol cars</span>,{' '}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">hybrid vehicles</span>, and{' '}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">fully electric cars</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                <a href="tel:+923188283154" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/923188283154" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
                    className="p-3 rounded-xl glass hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5 text-dark-600 dark:text-dark-300" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Image src="/images/profile.png" alt="Muhammad Abubakar" fill priority sizes="320px" className="object-cover object-top" />
                </div>
                {/* Wrench icon */}
                <div className="absolute -top-4 -right-4 group cursor-pointer">
                  <div className="absolute -inset-2 rounded-2xl border-2 border-primary-500/50 group-hover:scale-110 group-hover:border-primary-500 transition-all duration-300 ease-out" />
                  <div className="p-4 glass-card rounded-2xl relative z-10">
                    <Wrench className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-4 glass-card"
                >
                  <Battery className="w-8 h-8 text-accent-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 text-dark-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary-500/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Users className="w-4 h-4" />
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              My <span className="gradient-text">Introduction</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-card p-8"
            >
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
                I&apos;m an <strong className="text-primary-600 dark:text-primary-400">automotive diagnostics and repair specialist</strong> with 12+ years of hands-on experience.
              </p>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
                I specialize in <strong className="text-primary-600 dark:text-primary-400">electrical diagnostics</strong>, <strong className="text-primary-600 dark:text-primary-400">gearbox diagnostics and repair</strong>, and <strong className="text-primary-600 dark:text-primary-400">car AC diagnostics and repair</strong> for traditional, hybrid, and electric vehicles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-4"
            >
              {[
                { icon: Car, title: 'Traditional Cars', desc: 'Complete electrical system service' },
                { icon: Zap, title: 'Hybrid Vehicles', desc: 'HEV diagnostics & battery reconditioning' },
                { icon: Battery, title: 'Electric Vehicles', desc: 'EV battery systems & motor repair' },
                { icon: Gauge, title: 'Advanced Diagnostics', desc: 'Scanner-based fault finding & repair' },
                { icon: Wrench, title: 'Gearbox Diagnostics & Repair', desc: 'Gear and transmission fault finding & repair' },
                { icon: Thermometer, title: 'Car AC Diagnostics & Repair', desc: 'Leak testing, compressor checks & cooling repair' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 dark:text-white">{item.title}</h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Briefcase className="w-4 h-4" />
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Work <span className="gradient-text">History</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400">Work history spanning 12+ years of hands-on automotive service.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center p-4 shadow-xl">
                      <Car className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white">{exp.title}</h3>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-dark-600 dark:text-dark-300 mb-4">{exp.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/experience" className="btn-secondary">
              View Full Experience <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Zap className="w-4 h-4" />
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/skills" className="btn-secondary">
              View All Skills <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects/Work Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Wrench className="w-4 h-4" />
              Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:border-primary-500/50 transition-all"
              >
                <div className={`h-24 bg-gradient-to-br ${project.color} p-4 relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <h3 className="relative z-10 text-lg font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4">{project.description}</p>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/specializations" className="btn-secondary">
              View All Work <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Star className="w-4 h-4" />
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/services" className="btn-secondary">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 relative">
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

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <MessageCircle className="w-4 h-4" />
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Need Vehicle Diagnostics or Repair? <span className="gradient-text">Contact Me!</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto mb-8">
              Contact me for hybrid or EV service, gearbox diagnostics and repair, car AC diagnostics and repair, or auto electrical work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+923188283154" className="btn-primary">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/923188283154"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a href="mailto:abubakaraleem1122@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
