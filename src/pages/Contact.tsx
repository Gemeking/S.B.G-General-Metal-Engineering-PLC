import Layout from "../components/layout/Layout";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Steel Structure Fabrication',
    'Industrial Construction',
    'Metal Works & Welding',
    'Factory & Warehouse Installation',
    'Crusher Plant Manufacturing',
    'Machinery Maintenance',
    'Structural Engineering',
    'Other Industrial Service'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <Layout>
      {/* Add global styles */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          
          .contact-form-select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 0.5rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            padding-right: 2.5rem;
          }
        `}
      </style>

      <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_49%,_rgba(59,130,246,0.1)_49%,_rgba(59,130,246,0.1)_51%,_transparent_51%)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6">
              <div className="h-1 w-8 bg-blue-500"></div>
              <span className="mx-4 text-sm tracking-widest uppercase text-blue-400 font-bold">GET IN TOUCH</span>
              <div className="h-1 w-8 bg-blue-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">CONTACT</span>
              <span className="text-blue-400 ml-3">OUR TEAM</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert consultation for your industrial projects. Our engineering team is ready to discuss 
              your requirements and provide tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
                  CONTACT INFORMATION
                </h3>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Phone Numbers</h4>
                      <p className="text-gray-300">+251 964 386 821</p>
                      <p className="text-gray-400 text-sm">Main Office Line</p>
                      <p className="text-gray-300 mt-1">+251 11 123 4567</p>
                      <p className="text-gray-400 text-sm">Factory Line</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Email Addresses</h4>
                      <p className="text-gray-300">info@sbgengineering.com</p>
                      <p className="text-gray-400 text-sm">General Inquiries</p>
                      <p className="text-gray-300 mt-1">sales@sbgengineering.com</p>
                      <p className="text-gray-400 text-sm">Sales Department</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Office Locations</h4>
                      <p className="text-gray-300">Addis Ababa, Ethiopia</p>
                      <p className="text-gray-400 text-sm">Bole Sub-City, Woreda 03</p>
                      <p className="text-gray-300 mt-1">Industrial Zone, Akaki</p>
                      <p className="text-gray-400 text-sm">Factory & Production Facility</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
                  BUSINESS HOURS
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-blue-400 font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-blue-400 font-bold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-300">Emergency Support</span>
                    <span className="text-green-400 font-bold">24/7 Available</span>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">24/7 EMERGENCY</h4>
                        <p className="text-gray-300 text-sm">+251 91 123 4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
                  SEND US A MESSAGE
                </h3>
                
                {submitSuccess ? (
                  <div className="bg-green-900/20 border border-green-800 rounded-xl p-6 text-center mb-6" style={{
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300">Our team will contact you within 24 hours.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+251 ___ ___ ___"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors contact-form-select"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg transition-all duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-blue-800 hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING MESSAGE...
                      </span>
                    ) : (
                      'SEND MESSAGE'
                    )}
                  </button>
                  
                  <p className="text-gray-500 text-sm text-center">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8">
                <h4 className="text-white font-bold text-lg mb-4">OUR LOCATION</h4>
                <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Map integration available</p>
                    <p className="text-gray-500 text-xs">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}