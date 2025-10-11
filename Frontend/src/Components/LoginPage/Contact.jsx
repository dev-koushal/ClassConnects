import React, { useState } from 'react';
import { motion } from "motion/react"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div id='contact' className="min-h-screen md:mt-0 -mt-60 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Purple and Blue Gradient Flare */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/25 to-blue-500/25 rounded-full blur-2xl"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <motion.div initial={{y:-10,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} viewport={{once:true}} className="text-center mb-8 mt-20">
          <p className="bg-[var(--primary)]/70 bg-clip-text text-transparent text-sm font-medium mb-2 tracking-wide uppercase">
            For any Help
          </p>
          <h1 className="text-4xl font-bold bg-[var(--primary)]/70 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-900/60 text-sm">
            Drop the issue with Login or Register
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1}} viewport={{once:true}}  className="bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <div className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <div className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>
            
            {/* Message Field */}
            <div>
              <div className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us more about your message..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
              <button
                type="button"
                className="flex-1 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Connect Later
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-xs">
            This software can be used by techie 0's !!
          </p>
        </div>
      </div>
    </div>
  );
}