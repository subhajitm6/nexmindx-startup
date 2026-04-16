import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Requirement',
    subtitle: 'Deep dive into your business logic, user needs, and технический stack.',
    id: '01',
  },
  {
    title: 'Design',
    subtitle: 'Crafting premium UI/UX interfaces and robust system architectures.',
    id: '02',
  },
  {
    title: 'Development',
    subtitle: 'Agile sprints using modern tech stacks for high-performance builds.',
    id: '03',
  },
  {
    title: 'Deployment',
    subtitle: 'Automated CI/CD pipelines and cloud infrastructure provisioning.',
    id: '04',
  },
  {
    title: 'Support',
    subtitle: 'Continuous monitoring, optimization, and scaling for growth.',
    id: '05',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Execution <span className="text-gradient">Pipeline</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A precise, transparent roadmap from initial concept to global scale.
          </p>
        </div>

        <div className="relative mt-24">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/5" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group text-center lg:text-left"
              >
                {/* Connector for Mobile/Tablet */}
                <div className="lg:hidden absolute left-1/2 -top-12 w-px h-12 bg-white/5 -translate-x-1/2" />
                
                {/* Indicator Circle */}
                <div className="relative z-10 w-24 h-24 mx-auto lg:mx-0 rounded-3xl glass border border-white/10 flex items-center justify-center mb-8 bg-gradient-to-br from-white/5 to-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                  <span className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {step.id}
                  </span>
                  
                  {/* Status Pulse */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 animate-pulse" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {step.subtitle}
                </p>

                {/* Vertical Step Connector for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-12 w-px h-12 bg-white/5 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
