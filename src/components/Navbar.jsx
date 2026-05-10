import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/', hash: '#home' },
  { name: 'About', href: '/', hash: '#about' },
  { name: 'Services', href: '/', hash: '#services' },
  { name: 'Portfolio', href: '/', hash: '#portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/', hash: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);
    if (link.hash) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(link.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-primary/5' 
          : 'py-6 bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <img src={logo} alt="Nexmind Logo" className="h-16 md:h-20 w-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div 
          className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            
            return (
              <motion.div
                key={link.name}
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Hover Background Pill */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/10 rounded-full -z-10 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Interactive Nav Wrapper */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {link.hash ? (
                    <button
                      onClick={() => handleNavClick(link)}
                      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors font-display flex items-center relative group tracking-wide"
                    >
                      <motion.span
                        animate={{ letterSpacing: hoveredIndex === index ? "0.05em" : "0.025em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.name}
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors font-display flex items-center relative group tracking-wide ${
                        isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <motion.span
                        animate={{ letterSpacing: hoveredIndex === index ? "0.05em" : "0.025em" }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.name}
                      </motion.span>
                      
                      {/* Active Dot/Line Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold tracking-wide font-display flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            Get Started
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-glass-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                link.hash ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-left text-lg font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.href ? 'text-primary' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
