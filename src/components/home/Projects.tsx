export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Heavy Machinery Plant",
      category: "STEEL FABRICATION",
      location: "Addis Ababa, Ethiopia",
      description: "Complete fabrication and installation of heavy machinery components for industrial plant operations.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      features: ["Structural Steel", "Custom Machinery", "Precision Welding", "Quality Assurance"],
      year: "2023"
    },
    {
      id: 2,
      title: "Industrial Warehouse Complex",
      category: "CONSTRUCTION",
      location: "Hawassa Industrial Park",
      description: "Design and construction of a 15,000 sqm warehouse facility with advanced structural engineering.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w-800",
      features: ["Steel Framing", "Roof Systems", "Foundation Work", "Safety Compliance"],
      year: "2022"
    },
    {
      id: 3,
      title: "Crusher Plant Installation",
      category: "MACHINERY",
      location: "Oromia Region",
      description: "Full installation of crushing equipment with custom conveyor systems and safety mechanisms.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      features: ["Equipment Setup", "System Integration", "Maintenance Systems", "Operator Training"],
      year: "2023"
    },
    {
      id: 4,
      title: "Steel Processing Facility",
      category: "MANUFACTURING",
      location: "Dire Dawa",
      description: "Advanced steel processing plant with automated systems for cutting, bending, and finishing.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      features: ["Automation", "Precision Cutting", "Quality Control", "Efficient Workflow"],
      year: "2022"
    },
    {
      id: 5,
      title: "Industrial Structural Framework",
      category: "ENGINEERING",
      location: "Bahir Dar",
      description: "Complex structural steel framework for multi-story industrial facility with seismic considerations.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      features: ["Seismic Design", "Load Analysis", "Connection Design", "Site Coordination"],
      year: "2023"
    },
    {
      id: 6,
      title: "Material Handling Systems",
      category: "INSTALLATION",
      location: "Adama",
      description: "Complete material handling system installation including conveyors, cranes, and automated transfers.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      features: ["System Design", "Equipment Integration", "Safety Systems", "Efficiency Optimization"],
      year: "2022"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-20 lg:py-28 overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_24px,_rgba(59,130,246,0.1)_24px,_rgba(59,130,246,0.1)_25px,_transparent_25px)] bg-[length:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24px,_rgba(59,130,246,0.1)_24px,_rgba(59,130,246,0.1)_25px,_transparent_25px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Diagonal corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-blue-500/20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-blue-500/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="h-1 w-12 bg-blue-500"></div>
            <span className="mx-4 text-sm tracking-widest uppercase text-blue-400 font-bold">OUR PORTFOLIO</span>
            <div className="h-1 w-12 bg-blue-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">RECENT</span>
            <span className="text-blue-400 ml-3">PROJECTS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Factories, warehouses, steel frames, and industrial buildings engineered 
            with precision and built to withstand demanding conditions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300">
            ALL PROJECTS
          </button>
          <button className="px-6 py-3 bg-gray-800 text-gray-300 font-bold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
            STEEL FABRICATION
          </button>
          <button className="px-6 py-3 bg-gray-800 text-gray-300 font-bold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
            CONSTRUCTION
          </button>
          <button className="px-6 py-3 bg-gray-800 text-gray-300 font-bold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
            MACHINERY
          </button>
          <button className="px-6 py-3 bg-gray-800 text-gray-300 font-bold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
            INSTALLATION
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 z-20 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {project.year}
              </div>
              
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-gray-900 group-hover:scale-110 transition-transform duration-700">
                  {/* Simulated project image with industrial pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/80 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <span className="text-white font-bold">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs tracking-widest uppercase text-blue-400 font-bold">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Project Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs font-medium border border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* View Project Button */}
                <button className="w-full group/btn flex items-center justify-between bg-gray-800/50 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500">
                  <span>VIEW PROJECT DETAILS</span>
                  <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-blue-600/10 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg border-2 border-gray-700 hover:border-blue-500 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <div className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          {/* Stats Counter */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">Expert Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}