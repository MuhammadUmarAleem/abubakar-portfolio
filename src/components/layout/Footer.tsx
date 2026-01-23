'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Mail, 
  Heart,
  MessageCircle,
  Phone,
  MapPin
} from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Specializations', href: '/specializations' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Hybrid Vehicle Diagnostics', href: '/services' },
    { name: 'EV Battery Service', href: '/services' },
    { name: 'CAN-BUS Repair', href: '/services' },
    { name: 'Traditional Car Electrical', href: '/services' },
    { name: 'Scanner Diagnostics', href: '/services' },
    { name: 'AC & Cooling Service', href: '/services' },
  ],
  brands: ['Toyota', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'BYD', 'Kia', 'Nissan', 'Ford', 'MG', 'Hyundai', 'Honda'],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Muhamamd Abubakar</span>
            </Link>
            <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
              Auto Electrician specializing in Hybrid & Electric Vehicles. Expert diagnostics and repair for modern automotive electrical systems.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="tel:+923188283154"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://wa.me/923188283154"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-green-100 dark:hover:bg-green-900/30 text-dark-600 dark:text-dark-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:abubakaraleem1122@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+923188283154"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +92 318 8283154
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923188283154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:abubakaraleem1122@gmail.com"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  abubakaraleem1122@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-dark-500 dark:text-dark-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>A.R Akhtar Ali Autos Near Netsol Technologies, Lahore, Pakistan</span>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contact Now
              </Link>
            </div>
          </div>
        </div>

        {/* Brands Strip */}
        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-800">
          <p className="text-dark-500 dark:text-dark-400 text-sm text-center mb-4">Brands I Service</p>
          <div className="flex flex-wrap justify-center gap-2">
            {footerLinks.brands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1 rounded-full text-xs bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-dark-500 dark:text-dark-400 text-sm text-center md:text-center">
              © {currentYear} Muhamamd Abubakar. All rights reserved.
            </p>
            {/* <p className="text-dark-500 dark:text-dark-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Excellence
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
