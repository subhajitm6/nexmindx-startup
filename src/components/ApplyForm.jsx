import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle } from 'lucide-react';

const ApplyForm = ({ jobTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 text-center"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
        <p className="text-gray-400">
          Thank you for applying for the <span className="text-primary font-semibold">{jobTitle}</span> position. 
          Our team will review your profile and get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
      
      <h3 className="text-3xl font-bold text-white mb-2">Apply for this position</h3>
      <p className="text-gray-400 mb-8">Take the first step toward building the future with Nexmind Engineering.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Resume / CV (PDF)</label>
          <div className="relative group/upload">
            <input
              type="file"
              accept=".pdf"
              required
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
            />
            <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-xl py-8 flex flex-col items-center justify-center gap-2 group-hover/upload:border-primary/50 transition-all">
              <Upload className="text-gray-500 group-hover/upload:text-primary transition-colors" />
              <p className="text-sm text-gray-500">
                {formData.resume ? formData.resume.name : "Click or drag your resume to upload"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Cover Letter / Message</label>
          <textarea
            rows="4"
            placeholder="Tell us why you are a great fit..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/20"
        >
          Submit Application
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
