import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Nexmind Logo" className="h-8 w-auto object-contain mix-blend-screen" />
            </div>
            <p className="text-gray-500 mb-8 max-w-xs">
              Architecting the next generation of SaaS and AI applications with precision engineering and elite talent.
            </p>
            <div className="flex gap-4">
              {[Instagram, Github, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#3B82F6' }}
                  className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-gray-500 hover:border-primary/50 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Solutions</h4>
            <ul className="space-y-4">
              {['Custom Software', 'SaaS Platforms', 'AI Integration', 'Cloud Native'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Company</h4>
            <ul className="space-y-4">
              {['Our Process', 'Portfolio', 'Careers', 'Privacy Policy', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Digital Signal</h4>
            <p className="text-gray-500 text-sm mb-6">Receive architectural updates and tech stack insights.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-all"
              />
              <button className="absolute right-2 top-2 w-8 h-8 glass flex items-center justify-center rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {currentYear} Nexmind Engineering Corp. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
