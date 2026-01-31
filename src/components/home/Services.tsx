const services = [
  {
    title: "Steel Structure Fabrication",
    description: "Precision engineering and fabrication of industrial steel structures including beams, columns, trusses, and frames for factories, warehouses, and commercial buildings.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    features: ["Custom Design", "Precision Cutting", "Quality Welding", "Galvanizing"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "Industrial Construction",
    description: "Complete industrial construction solutions from ground-up factory buildings to warehouse expansions and industrial facility renovations.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    features: ["Project Management", "Structural Engineering", "Foundation Work", "Safety Standards"],
    gradient: "from-blue-700 to-blue-500"
  },
  {
    title: "Metal Works & Welding",
    description: "Professional metal fabrication and welding services including custom metal parts, machinery components, and structural welding with certified welders.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    features: ["MIG/TIG Welding", "Metal Cutting", "Bending & Forming", "Quality Inspection"],
    gradient: "from-gray-800 to-blue-800"
  },
  {
    title: "Factory & Warehouse Installation",
    description: "Turnkey installation services for factory equipment, warehouse racking systems, conveyor systems, and industrial machinery setup.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    features: ["Equipment Setup", "System Integration", "Testing & Commissioning", "Operator Training"],
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    title: "Crusher Plant Manufacturing",
    description: "Design and manufacturing of heavy-duty crusher plants, screening systems, and material processing equipment for mining and construction.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    features: ["Custom Design", "Heavy-Duty Construction", "Efficiency Optimization", "Maintenance Support"],
    gradient: "from-orange-600 to-yellow-600"
  },
  {
    title: "Maintenance & Support",
    description: "Comprehensive maintenance programs, repair services, and technical support for industrial equipment and structural systems.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    features: ["Preventive Maintenance", "Emergency Repairs", "Parts Supply", "24/7 Support"],
    gradient: "from-green-600 to-emerald-500"
  }
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 lg:py-28 overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_48%,_rgba(59,130,246,0.2)_49%,_rgba(59,130,246,0.2)_51%,_transparent_52%)] bg-[length:60px_60px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_transparent_48%,_rgba(59,130,246,0.1)_49%,_rgba(59,130,246,0.1)_51%,_transparent_52%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t-4 border-l-4 border-blue-500/30"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-b-4 border-r-4 border-blue-500/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-1 w-8 bg-blue-500"></div>
            <span className="mx-4 text-sm tracking-widest uppercase text-blue-400 font-bold">OUR EXPERTISE</span>
            <div className="h-1 w-8 bg-blue-500"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Service Number */}
              <div className="absolute top-6 left-6 text-6xl font-black text-gray-800/50 group-hover:text-blue-500/20 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className="relative p-6">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex items-center justify-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 pr-20">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6">
                  {service.description}
                </p>
              </div>
              
              {/* Features List */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center bg-gray-800/50 rounded-lg p-3 border border-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
              
              {/* Service Detail Button */}
              <button className="w-full py-4 bg-gray-900/50 text-gray-400 hover:text-white font-bold text-sm uppercase tracking-widest border-t border-gray-800 group-hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center">
                <span>View Service Details</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-800 p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">OUR</span>
              <span className="text-blue-400 ml-3">PROCESS</span>
            </h3>
            <p className="text-gray-400">From concept to completion - our systematic approach ensures quality and efficiency</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation & Analysis", desc: "Understanding project requirements and technical specifications" },
                { step: "02", title: "Design & Engineering", desc: "Creating detailed plans, 3D models, and structural calculations" },
                { step: "03", title: "Fabrication & Production", desc: "Precision manufacturing with quality control at every stage" },
                { step: "04", title: "Installation & Commissioning", desc: "Professional installation, testing, and handover" }
              ].map((item, idx) => (
                <div key={idx} className="relative text-center md:text-left">
                  <div className="flex items-center md:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center border-4 border-gray-900 mr-4 md:mr-0 md:mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <div className="md:text-center">
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-900/30 via-gray-900 to-blue-900/30 rounded-2xl border border-gray-800 p-8 md:p-12 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.3)_0%,_transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-white">READY TO START YOUR</span>
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
                REQUEST A CALLBACK
              </button>
              
              <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                DOWNLOAD BROCHURE
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-300 font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-300 font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-300 font-medium">50+ Expert Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}