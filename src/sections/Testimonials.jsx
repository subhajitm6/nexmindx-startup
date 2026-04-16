import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, DataFlow Systems',
    text: "Nexmind's engineering excellence completely transformed our infrastructure. Their AI-native approach gave us a significant competitive edge.",
    avatar: 'SC',
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, CloudScale',
    text: 'The most refined development process we have encountered. They delivered a complex SaaS platform with zero friction and elite quality.',
    avatar: 'MT',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Engineering, Fintech Go',
    text: 'Sub-second latency was a requirement, not a goal. Nexmind achieved it while maintaining the highest security standards.',
    avatar: 'ER',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Industry <span className="text-gradient">Leaders Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 rounded-3xl relative group hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-primary/10 transition-colors">
                <Quote size={60} />
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
