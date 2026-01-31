import Layout from "../components/layout/Layout";
import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Heavy Machinery Manufacturing Plant",
      category: "steel-fabrication",
      location: "Addis Ababa, Ethiopia",
      description: "Complete steel fabrication and installation of heavy machinery components for industrial plant operations with precision engineering.",
      year: "2023",
      duration: "8 Months",
      size: "5,000 sqm",
      features: ["Structural Steel", "Custom Machinery", "Precision Welding", "Quality Control"],
      imageColor: "from-blue-900/30 to-blue-700/20"
    },
    {
      id: 2,
      title: "Industrial Warehouse Complex",
      category: "construction",
      location: "Hawassa Industrial Park",
      description: "Design and construction of a 15,000 sqm warehouse facility with advanced structural engineering and seismic considerations.",
      year: "2022",
      duration: "12 Months",
      size: "15,000 sqm",
      features: ["Steel Framing", "Roof Systems", "Foundation Work", "Safety Standards"],
      imageColor: "from-gray-900/30 to-gray-700/20"
    },
    {
      id: 3,
      title: "Crusher Plant Installation",
      category: "machinery",
      location: "Oromia Region",
      description: "Full installation of crushing equipment with custom conveyor systems and advanced safety mechanisms for mining operations.",
      year: "2023",
      duration: "6 Months",
      size: "3,500 sqm",
      features: ["Equipment Setup", "System Integration", "Maintenance Systems", "Operator Training"],
      imageColor: "from-orange-900/30 to-orange-700/20"
    },
    {
      id: 4,
      title: "Steel Processing Facility",
      category: "manufacturing",
      location: "Dire Dawa",
      description: "Advanced steel processing plant with automated systems for cutting, bending, and finishing operations.",
      year: "2022",
      duration: "10 Months",
      size: "4,200 sqm",
      features: ["Automation", "Precision Cutting", "Quality Control", "Efficient Workflow"],
      imageColor: "from-cyan-900/30 to-cyan-700/20"
    },
    {
      id: 5,
      title: "Multi-Story Industrial Framework",
      category: "engineering",
      location: "Bahir Dar",
      description: "Complex structural steel framework for multi-story industrial facility with advanced seismic considerations.",
      year: "2023",
      duration: "14 Months",
      size: "8,000 sqm",
      features: ["Seismic Design", "Load Analysis", "Connection Design", "Site Coordination"],
      imageColor: "from-purple-900/30 to-purple-700/20"
    },
    {
      id: 6,
      title: "Material Handling Systems",
      category: "installation",
      location: "Adama",
      description: "Complete material handling system installation including conveyors, cranes, and automated transfer systems.",
      year: "2022",
      duration: "7 Months",
      size: "6,500 sqm",
      features: ["System Design", "Equipment Integration", "Safety Systems", "Efficiency Optimization"],
      imageColor: "from-green-900/30 to-green-700/20"
    },
    {
      id: 7,
      title: "Food Processing Factory",
      category: "construction",
      location: "Addis Ababa",
      description: "Complete construction of food processing facility with specialized stainless steel installations and hygiene compliance.",
      year: "2023",
      duration: "11 Months",
      size: "7,200 sqm",
      features: ["Hygiene Compliance", "Stainless Steel", "Temperature Control", "Sanitation Systems"],
      imageColor: "from-blue-900/30 to-cyan-900/20"
    },
    {
      id: 8,
      title: "Power Plant Steel Structure",
      category: "steel-fabrication",
      location: "Awash",
      description: "Steel structure fabrication for power plant installation with high-temperature resistance and durability requirements.",
      year: "2022",
      duration: "9 Months",
      size: "4,800 sqm",
      features: ["Heat Resistance", "Structural Integrity", "Corrosion Protection", "Precision Engineering"],
      imageColor: "from-red-900/30 to-red-700/20"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'steel-fabrication', name: 'Steel Fabrication', count: projects.filter(p => p.category === 'steel-fabrication').length },
    { id: 'construction', name: 'Construction', count: projects.filter(p => p.category === 'construction').length },
    { id: 'machinery', name: 'Machinery', count: projects.filter(p => p.category === 'machinery').length },
    { id: 'manufacturing', name: 'Manufacturing', count: projects.filter(p => p.category === 'manufacturing').length },
    { id: 'engineering', name: 'Engineering', count: projects.filter(p => p.category === 'engineering').length },
    { id: 'installation', name: 'Installation', count: projects.filter(p => p.category === 'installation').length }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Add CSS animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          .project-card:hover .project-image-overlay {
            opacity: 1;
            transform: scale(1.05);
          }
          
          .project-card:hover .project-title {
            color: #3B82F6;
          }
        `}
      </style>

      <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(60deg,_transparent_65%,_rgba(59,130,246,0.05)_65%,_rgba(59,130,246,0.05)_70%,_transparent_70%)] bg-[length:60px_60px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-60deg,_transparent_65%,_rgba(59,130,246,0.05)_65%,_rgba(59,130,246,0.05)_70%,_transparent_70%)] bg-[length:60px_60px]"></div>
        </div>

        {/* Diagonal corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 border-t-4 border-r-4 border-blue-500/20 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 border-b-4 border-l-4 border-blue-500/20 hidden lg:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center mb-6">
              <div className="h-1 w-12 bg-blue-500"></div>
              <span className="mx-4 text-sm tracking-widest uppercase text-blue-400 font-bold">OUR PORTFOLIO</span>
              <div className="h-1 w-12 bg-blue-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">INDUSTRIAL</span>
              <span className="text-blue-400 ml-3">PROJECTS</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Factories, warehouses, steel frames, and industrial buildings engineered 
              with precision and built to withstand demanding conditions across Ethiopia.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300 text-sm">Cities Across Ethiopia</div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">FILTER BY CATEGORY</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.name}
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    activeCategory === category.id
                      ? 'bg-blue-800'
                      : 'bg-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group"
              >
                {/* Project Image/Placeholder */}
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} transition-transform duration-700 group-hover:scale-110`}>
                    {/* Industrial Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 flex items-center justify-center">
                        {project.category === 'steel-fabrication' && (
                          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        )}
                        {project.category === 'construction' && (
                          <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          </svg>
                        )}
                        {project.category === 'machinery' && (
                          <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        )}
                        {project.category === 'manufacturing' && (
                          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                          </svg>
                        )}
                        {project.category === 'engineering' && (
                          <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        )}
                        {project.category === 'installation' && (
                          <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {project.year}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs tracking-widest uppercase text-blue-400 font-bold">
                      {project.category.toUpperCase().replace('-', ' ')}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="project-title text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/30 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">DURATION</div>
                      <div className="text-white font-bold">{project.duration}</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">SIZE</div>
                      <div className="text-white font-bold">{project.size}</div>
                    </div>
                  </div>
                  
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
                  <button className="w-full flex items-center justify-between bg-gray-800/50 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500 group/btn">
                    <span>VIEW PROJECT DETAILS</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More / Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">READY TO START YOUR PROJECT?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our engineering team for a detailed consultation and custom quote 
                tailored to your specific industrial requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  CONTACT OUR TEAM
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300">
                  DOWNLOAD PROJECT PORTFOLIO
                </button>
              </div>
            </div>
            
            {/* Client Logos */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-white font-bold text-lg mb-8 text-center">TRUSTED BY INDUSTRY LEADERS</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-16 bg-gray-800/30 rounded-lg flex items-center justify-center border border-gray-700/50">
                    <span className="text-gray-500 text-sm">Client Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}