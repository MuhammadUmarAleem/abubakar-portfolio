'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Clock,
  Send,
  Phone,
  Sparkles,
  Car,
  ArrowRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+92 318 8283154',
    href: 'tel:+923188283154',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+92 318 8283154',
    href: 'https://wa.me/923188283154',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'abubakaraleem1122@gmail.com',
    href: 'mailto:abubakaraleem1122@gmail.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon-Sat, 9AM-8PM',
    href: null,
  },
];

const services = [
  'Hybrid Vehicle Diagnostics',
  'EV Battery Service',
  'Traditional Car Electrical',
  'Scanner Diagnostics',
  'Gearbox Diagnostics & Repair',
  'Remote Diagnostic Assistance',
  'CAN-BUS Repair',
  'Car AC Diagnostics & Repair',
  'Sound & Security Installation',
  'Other',
];

const brands = ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'BYD', 'Kia', 'Nissan', 'Ford', 'MG', 'Hyundai', 'Honda', 'Other'];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleBrand: '',
    vehicleModel: '',
    service: '',
    message: '',
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const details = [
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      formData.email.trim() && `Email: ${formData.email.trim()}`,
      formData.vehicleBrand && `Vehicle brand: ${formData.vehicleBrand}`,
      formData.vehicleModel.trim() && `Vehicle model: ${formData.vehicleModel.trim()}`,
      formData.service && `Service: ${formData.service}`,
      `Issue: ${formData.message.trim()}`,
    ].filter(Boolean).join('\n');

    window.location.assign(`https://wa.me/923188283154?text=${encodeURIComponent(details)}`);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Muhammad Abubakar</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              Ask about electrical, hybrid, EV, gearbox, or car AC diagnostics and repair, including remote assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="tel:+923188283154"
              className="btn-primary text-lg px-8 py-4"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </a>
            <a
              href="https://wa.me/923188283154"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href="mailto:abubakaraleem1122@gmail.com"
              className="btn-secondary text-lg px-8 py-4"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 dark:text-white mb-1">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-500 dark:text-dark-400 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Prepare a WhatsApp Message
              </h2>
              <p className="text-dark-500 dark:text-dark-400 mb-6">
                Fill in the details below. WhatsApp will open with your message ready to review and send.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Vehicle Brand
                      </label>
                      <select
                        value={formData.vehicleBrand}
                        onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      >
                        <option value="">Select brand</option>
                        {brands.map((brand) => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="e.g., Prius 2020"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    >
                      <option value="">Select service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Describe Your Issue *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      placeholder="Please describe the issue with your vehicle..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center"
                  >
                    <Send className="w-5 h-5" />
                    Continue to WhatsApp
                  </button>
                </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Why Contact Me?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: '⚡', text: '12+ Years of Experience' },
                    { icon: '🔧', text: 'Electrical, Gearbox, Car AC, HEV & EV Work' },
                    { icon: '🔋', text: 'Battery System Specialist' },
                    { icon: '📊', text: 'Professional Diagnostics' },
                    { icon: '✅', text: 'Quality Guaranteed' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-dark-700 dark:text-dark-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Remote Diagnostic Support</h2>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  Hands-on diagnostics and repair are available by appointment. I also offer remote diagnostic assistance to drivers and workshops.
                </p>
                <p className="text-dark-500 dark:text-dark-400 text-sm">
                  Send your vehicle model, symptoms, fault codes, and scan results by WhatsApp to discuss the next steps.
                </p>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Brands I Service
                </h2>
                <div className="flex flex-wrap gap-2">
                  {brands.slice(0, -1).map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 rounded-full text-sm bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    ...
                  </span>
                </div>
              </div>

              <div className="glass-card p-8 text-center">
                <Car className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-dark-500 dark:text-dark-400 mb-4">
                  I&apos;m available Mon-Sat, 9AM-8PM
                </p>
                <a
                  href="tel:+923188283154"
                  className="btn-primary justify-center w-full"
                >
                  <Phone className="w-5 h-5" />
                  +92 318 8283154
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
