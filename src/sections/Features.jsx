import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-react';
import featuresImg from '../assets/features_img.png';

const points = [
  {
    title: 'Zero-Trust Architecture',
    desc: 'Advanced security protocols ensuring every data transaction is verified and encrypted at rest and in transit.',
    icon: <ShieldCheck className="text-primary" size={24} />,
  },
  {
    title: 'Sub-Second Latency',
    desc: 'Optimized edge-computing and global CDN delivery for blistering performance across all geo-locations.',
    icon: <Zap className="text-accent" size={24} />,
  },
  {
    title: 'Elite Talent Core',
    desc: 'Our engineering team consists of top-tier architects and developers with experience from FAANG and high-growth startups.',
    icon: <Users className="text-secondary" size={24} />,
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Leaders Choose <br />
              <span className="text-gradient">Nexmind Engineering</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              We don't just build software; we architect the digital backbone of your enterprise. Our processes are designed for reliability, scalability, and absolute security.
            </p>

            <div className="space-y-8">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 glass-card rounded-2xl border-l-4 border-primary"
            >
              <div className="flex items-center gap-4 mb-3">
                <CheckCircle2 className="text-primary" />
                <span className="font-bold text-white uppercase tracking-wider text-sm">Deployment Ready</span>
              </div>
              <p className="text-gray-400 italic">
                "Nexmind delivered our core infrastructure 2 weeks ahead of schedule with 99.99% uptime during the critical launch phase."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative glass-card p-2 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={featuresImg}
                  alt="Future Tech Architecture"
                  className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Element */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">System Status</span>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Operational
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>ASYNC_LOAD</span>
                    <span>CORE_STABLE_92%</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
