import Layout from "../components/layout/Layout";
import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Steel Fabrication",
      category: "MANUFACTURING",
      description: "Precision engineering and fabrication of industrial steel structures including beams, columns, trusses, and frames for factories, warehouses, and commercial buildings.",
      detailedDescription: "Our steel fabrication services include custom design, precision cutting, quality welding, and galvanizing for industrial applications. We work with various steel grades and thicknesses to meet specific structural requirements.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: [
        "Structural Steel Fabrication",
        "Custom Steel Components",
        "Precision Cutting & Welding",
        "Galvanizing & Surface Treatment",
        "Quality Control & Testing",
        "Assembly & Installation"
      ],
      applications: [
        "Factory Buildings",
        "Warehouse Structures",
        "Commercial Buildings",
        "Industrial Platforms",
        "Bridge Components",
        "Transmission Towers"
      ],
      gradient: "from-blue-600 to-blue-800",
      color: "blue"
    },
    {
      id: 2,
      title: "Industrial Construction",
      category: "CONSTRUCTION",
      description: "Complete industrial construction solutions from ground-up factory buildings to warehouse expansions and industrial facility renovations.",
      detailedDescription: "We provide end-to-end industrial construction services including site preparation, foundation work, structural erection, and finishing. Our team manages projects from concept to completion.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      features: [
        "Project Management",
        "Structural Engineering",
        "Foundation Construction",
        "Building Erection",
        "Roof & Wall Systems",
        "Quality Assurance"
      ],
      applications: [
        "Factory Construction",
        "Warehouse Development",
        "Industrial Parks",
        "Manufacturing Facilities",
        "Processing Plants",
        "Industrial Complexes"
      ],
      gradient: "from-green-600 to-green-800",
      color: "green"
    },
    {
      id: 3,
      title: "Custom Metal Works",
      category: "FABRICATION",
      description: "Professional metal fabrication and welding services including custom metal parts, machinery components, and structural welding with certified welders.",
      detailedDescription: "Our custom metal works division specializes in creating bespoke metal solutions for industrial applications. We utilize advanced CNC machinery and traditional craftsmanship.",
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      features: [
        "MIG/TIG Welding",
        "Metal Cutting & Shaping",
        "Bending & Forming",
        "Custom Machinery Parts",
        "Precision Fabrication",
        "Surface Finishing"
      ],
      applications: [
        "Machine Components",
        "Custom Fixtures",
        "Industrial Equipment",
        "Safety Guards",
        "Conveyor Systems",
        "Specialized Tools"
      ],
      gradient: "from-orange-600 to-orange-800",
      color: "orange"
    },
    {
      id: 4,
      title: "Maintenance & Installation",
      category: "SERVICES",
      description: "Comprehensive maintenance programs, repair services, and technical support for industrial equipment and structural systems.",
      detailedDescription: "We offer preventive and corrective maintenance services, equipment installation, and system integration to ensure optimal performance of industrial facilities.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      features: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "Equipment Installation",
        "System Integration",
        "Parts Supply",
        "24/7 Support"
      ],
      applications: [
        "Machinery Maintenance",
        "Equipment Installation",
        "System Upgrades",
        "Troubleshooting",
        "Spare Parts Supply",
        "Technical Support"
      ],
      gradient: "from-purple-600 to-purple-800",
      color: "purple"
    },
    {
      id: 5,
      title: "Crusher Plant Manufacturing",
      category: "HEAVY MACHINERY",
      description: "Design and manufacturing of heavy-duty crusher plants, screening systems, and material processing equipment for mining and construction.",
      detailedDescription: "We specialize in designing and building custom crusher plants for various materials including aggregate, ore, and recycled materials with optimal efficiency and durability.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      features: [
        "Custom Design & Engineering",
        "Heavy-Duty Construction",
        "Efficiency Optimization",
        "Automation Integration",
        "Safety Systems",
        "Maintenance Support"
      ],
      applications: [
        "Aggregate Crushing",
        "Mining Operations",
        "Recycling Plants",
        "Construction Sites",
        "Quarry Operations",
        "Material Processing"
      ],
      gradient: "from-red-600 to-red-800",
      color: "red"
    },
    {
      id: 6,
      title: "Structural Engineering",
      category: "DESIGN",
      description: "Professional structural engineering services including design, analysis, and consulting for industrial and commercial construction projects.",
      detailedDescription: "Our structural engineering team provides comprehensive design solutions, load analysis, seismic considerations, and construction supervision for complex industrial projects.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      features: [
        "Structural Design",
        "Load Analysis",
        "Seismic Engineering",
        "Foundation Design",
        "Construction Supervision",
        "Code Compliance"
      ],
      applications: [
        "Industrial Buildings",
        "Commercial Structures",
        "Bridge Design",
        "Retrofit Projects",
        "Structural Assessment",
        "Construction Consulting"
      ],
      gradient: "from-cyan-600 to-cyan-800",
      color: "cyan"
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <Layout>
      {/* Add CSS animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          .animate-slide-in {
            animation: slideInRight 0.4s ease-out forwards;
          }
          
          .service-card:hover .service-icon {
            transform: scale(1.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(59,130,246,0.2)_49%,_rgba(59,130,246,0.2)_51%,_transparent_52%)] bg-[length:60px_60px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,_transparent_48%,_rgba(62,157,38,0.1)_49%,_rgba(62,157,38,0.1)_51%,_transparent_52%)] bg-[length:60px_60px]"></div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-48 h-48 border-t-4 border-l-4 border-blue-500/30 hidden lg:block"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-b-4 border-r-4 border-blue-500/30 hidden lg:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center mb-6">
              <div className="h-1 w-12 bg-blue-500"></div>
              <span className="mx-4 text-sm tracking-widest uppercase text-blue-400 font-bold">OUR EXPERTISE</span>
              <div className="h-1 w-12 bg-blue-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">INDUSTRIAL</span>
              <span className="text-blue-400 ml-3">SERVICES</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive metal engineering solutions for industrial, commercial, 
              and construction sectors across Ethiopia and East Africa.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`service-card bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  activeService === service.id ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Service Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs tracking-widest uppercase font-bold text-gray-400">
                        {service.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{service.title}</h3>
                    </div>
                    
                    <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center transition-all duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8">
                    {service.description}
                  </p>
                  
                  {/* Quick Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Expandable Details */}
                {activeService === service.id && (
                  <div className="animate-slide-in px-8 pb-8">
                    <div className="pt-6 border-t border-gray-800">
                      <h4 className="text-white font-bold text-lg mb-4">Detailed Description</h4>
                      <p className="text-gray-400 mb-6">
                        {service.detailedDescription}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-white font-bold mb-3">Key Features</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <svg className={`w-4 h-4 text-${service.color}-500 mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-bold mb-3">Applications</h5>
                          <ul className="space-y-2">
                            {service.applications.map((application, index) => (
                              <li key={index} className="flex items-center">
                                <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
                                <span className="text-gray-300 text-sm">{application}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-800">
                        <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                          REQUEST {service.title.toUpperCase()} QUOTE
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* View Details Button */}
                <div className={`border-t border-gray-800 ${activeService === service.id ? 'hidden' : ''}`}>
                  <button className="w-full py-4 text-center text-blue-400 font-bold hover:bg-gray-800/30 transition-colors duration-300 flex items-center justify-center">
                    <span>VIEW SERVICE DETAILS</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={activeService === service.id ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 p-8 md:p-12 mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-white">OUR</span>
                <span className="text-blue-400 ml-3">PROCESS</span>
              </h3>
              <p className="text-gray-400">From concept to completion - our systematic approach ensures quality and efficiency</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "Understanding project requirements and technical specifications",
                  icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating detailed plans, 3D models, and structural calculations",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  step: "03",
                  title: "Fabrication",
                  description: "Precision manufacturing with quality control at every stage",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                },
                {
                  step: "04",
                  title: "Installation",
                  description: "Professional installation, testing, and handover",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-white">WHY CHOOSE</span>
                <span className="text-blue-400 ml-3">S.B.G</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-3">Quality Assurance</h4>
                <p className="text-gray-400">ISO 9001 certified processes with strict quality control at every stage of production and installation.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-3">Timely Delivery</h4>
                <p className="text-gray-400">Efficient project management ensures on-time delivery without compromising on quality or safety standards.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-3">Expert Team</h4>
                <p className="text-gray-400">50+ certified engineers and technicians with 15+ years of experience in industrial engineering projects.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900/30 via-gray-900 to-blue-900/30 rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-white">READY TO DISCUSS YOUR</span>
              <span className="text-blue-400 ml-3">PROJECT?</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our engineering team for a detailed consultation and custom quote tailored to your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                SCHEDULE A CONSULTATION
              </button>
              
              <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                DOWNLOAD SERVICE CATALOG
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}