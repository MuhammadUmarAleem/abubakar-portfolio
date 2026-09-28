'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Gauge,
  Battery,
  CircuitBoard,
  Wrench,
  Car,
  Zap,
  CheckCircle2,
  Sparkles,
  Shield,
  Settings,
  Thermometer,
  Radio
} from 'lucide-react';

const skillCategories = [
  {
    id: 'diagnostics',
    name: 'Diagnostic Skills',
    icon: Gauge,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'OBD-II Fault Finding', level: 95 },
      { name: 'Live Data Analysis', level: 90 },
      { name: 'Short Circuit Testing', level: 95 },
      { name: 'Open Circuit Testing', level: 95 },
      { name: 'High-Resistance Testing', level: 90 },
      { name: 'Multimeter & Electric Testing Tools', level: 95 },
      { name: 'ECU & Sensor Communication Diagnosis', level: 85 },
    ],
  },
  {
    id: 'ev-hybrid',
    name: 'EV & Hybrid Systems',
    icon: Battery,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'EV Battery System Inspection & Safety', level: 90 },
      { name: 'DC-DC Converter Troubleshooting', level: 85 },
      { name: 'Electric Motor & Inverter Wiring Repair', level: 90 },
      { name: 'Charging System Fault Diagnosis', level: 85 },
      { name: 'Hybrid Battery Removal & Reconditioning', level: 90 },
      { name: 'High-Voltage Safety Procedures', level: 95 },
      { name: 'Inverter, Converter, ECU Diagnostics', level: 85 },
      { name: 'Hybrid Cooling System Inspection', level: 80 },
    ],
  },
  {
    id: 'gearbox',
    name: 'Gearbox Diagnostics & Repair',
    icon: Wrench,
    color: 'from-slate-500 to-blue-500',
    skills: [
      { name: 'Gearbox Fault Diagnosis', level: null },
      { name: 'Shift & Selector Fault Checks', level: null },
      { name: 'Transmission Wiring Diagnosis', level: null },
      { name: 'Control-System Testing', level: null },
      { name: 'Repair Assessment', level: null },
    ],
  },
  {
    id: 'can-bus',
    name: 'CAN-BUS & Communication',
    icon: CircuitBoard,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'CAN-BUS Wiring Troubleshooting', level: 90 },
      { name: 'Communication Diagnostics', level: 85 },
      { name: 'Module Programming', level: 80 },
      { name: 'ABS Wiring Repairs', level: 90 },
      { name: 'Airbag System Repairs', level: 85 },
      { name: 'Immobilizer Repairs', level: 85 },
      { name: 'ECM Wiring Repairs', level: 90 },
    ],
  },
  {
    id: 'scanners',
    name: 'Scanner Diagnostics',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Toyota Techstream', level: 95 },
      { name: 'Honda HDS', level: 90 },
      { name: 'Autel Scanner', level: 90 },
      { name: 'Launch Scanner', level: 90 },
      { name: 'Fault Code Reading', level: 95 },
      { name: 'Live Data Monitoring', level: 90 },
    ],
  },
  {
    id: 'traditional',
    name: 'Traditional Car Systems',
    icon: Car,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Sound System Installation', level: 95 },
      { name: 'Security System Installation', level: 90 },
      { name: 'Reverse Camera Installation', level: 95 },
      { name: 'Lighting Upgrades', level: 95 },
      { name: 'Battery & Alternator Service', level: 95 },
      { name: 'Starter Motor Repair', level: 90 },
    ],
  },
  {
    id: 'ac',
    name: 'Car AC Diagnostics & Repair',
    icon: Thermometer,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'AC Fault Diagnosis', level: null },
      { name: 'AC System Repair', level: 95 },
      { name: 'Gas Refilling', level: 95 },
      { name: 'Compressor Checks', level: 90 },
      { name: 'Leakage Testing', level: 90 },
      { name: 'EV Cooling System Maintenance', level: 85 },
    ],
  },
];

const coreCompetencies = [
  { icon: CheckCircle2, text: 'Hybrid & Electric Vehicle Diagnostics' },
  { icon: Battery, text: 'EV Battery System Inspection & Repair' },
  { icon: Gauge, text: 'Advanced Scanner Diagnostics' },
  { icon: CircuitBoard, text: 'CAN-BUS Communication Repair' },
  { icon: Zap, text: 'High-Voltage Safety Procedures' },
  { icon: Settings, text: 'ECU & Module Programming' },
  { icon: Car, text: 'Complete Auto Electrical Service' },
  { icon: Wrench, text: 'Gearbox Diagnostics & Repair' },
  { icon: Thermometer, text: 'Car AC Diagnostics & Repair' },
  { icon: Shield, text: '12+ Years Professional Experience' },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('diagnostics');

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Technical Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              Automotive electrical, hybrid, EV, gearbox, and car AC diagnostics and repair skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-dark-900 dark:text-white">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreCompetencies.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-dark-50 dark:bg-dark-800"
                >
                  <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-dark-700 dark:text-dark-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'glass text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            {activeSkills && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeSkills.color} flex items-center justify-center`}>
                    <activeSkills.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white">{activeSkills.name}</h2>
                    <p className="text-dark-500 dark:text-dark-400">{activeSkills.skills.length} skills</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {activeSkills.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-dark-700 dark:text-dark-300">{skill.name}</span>
                        {skill.level !== null && <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>}
                      </div>
                      {skill.level !== null && (
                        <div className="h-2 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className={`h-full rounded-full bg-gradient-to-r ${activeSkills.color}`}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* All Skills Overview */}
      <section className="py-12 bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Skills <span className="gradient-text">Overview</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-dark-900 dark:text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 5 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      +{category.skills.length - 5} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Hands-On Training & Experience
            </h2>
            <p className="text-dark-500 dark:text-dark-400 mb-6 max-w-2xl mx-auto">
              12+ years of practical experience working on vehicles from all major brands.
              Experienced with professional diagnostic equipment including Toyota Techstream, Honda HDS, Autel, Launch, Xentry, Audi ODIS, and Tesla Toolbox 3.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Toyota Techstream', 'Honda HDS', 'Autel Scanner', 'Launch Scanner', 'Mercedes-Benz Xentry', 'Audi ODIS', 'Tesla Toolbox 3', 'OBD-II Systems'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full glass text-dark-600 dark:text-dark-300 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
