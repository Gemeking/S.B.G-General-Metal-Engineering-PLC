export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0">
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(60deg,_transparent_65%,_rgba(59,130,246,0.05)_65%,_rgba(59,130,246,0.05)_70%,_transparent_70%)] bg-[length:40px_40px]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(-60deg,_transparent_65%,_rgba(59,130,246,0.05)_65%,_rgba(59,130,246,0.05)_70%,_transparent_70%)] bg-[length:40px_40px]"></div>
        </div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_transparent_49%,_rgba(255,255,255,0.03)_49%,_rgba(255,255,255,0.03)_51%,_transparent_51%)] bg-[length:40px_40px] opacity-30"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Industry tag */}
            <div className="inline-flex items-center justify-center lg:justify-start mb-6">
              <div className="h-1 w-8 bg-blue-500 mr-3"></div>
              <span className="text-sm tracking-widest uppercase text-blue-400 font-bold">
                ENGINEERING EXCELLENCE
              </span>
              <div className="h-1 w-8 bg-blue-500 ml-3"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">BUILDING THE</span>
              <span className="block text-blue-400 mt-2">INDUSTRIAL</span>
              <span className="block mt-2">FOUNDATIONS</span>
            </h1>

            {/* Subtitle */}
            <div className="relative mb-8">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2/3 bg-blue-500"></div>
              <p className="text-lg md:text-xl text-gray-300 pl-4 border-l-2 border-blue-500/30">
                S.B.G General Metal Engineering PLC specializes in precision steel fabrication, 
                heavy machinery manufacturing, and industrial construction solutions built to last.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <div className="text-blue-400 font-bold text-lg">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <div className="text-blue-400 font-bold text-lg">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                <div className="text-blue-400 font-bold text-lg">ISO</div>
                <div className="text-sm text-gray-300">Certified Quality</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-lg font-bold text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                <span className="relative z-10">REQUEST A QUOTE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative border-2 border-gray-600 px-8 py-4 rounded-lg font-bold text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                <span className="relative z-10">VIEW OUR WORK</span>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right column - Logo display */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Metallic background panel */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-gray-800 shadow-2xl overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                
                {/* Hexagonal pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.3)_0%,_transparent_50%)]"></div>
                </div>
                
                {/* Logo container */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center">
                    {/* Hexagonal logo icon */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 blur-xl rounded-3xl"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 shadow-lg">
                        {/* Hexagonal geometric shape - S.B.G monogram */}
                        <svg className="w-32 h-32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Outer hexagon */}
                          <path d="M60 10L100 35V85L60 110L20 85V35L60 10Z" stroke="url(#gradient1)" strokeWidth="3"/>
                          
                          {/* Inner geometric pattern forming "S" */}
                          <path d="M45 40L75 40L75 55L45 55L45 70L75 70" stroke="url(#gradient2)" strokeWidth="4" strokeLinecap="round"/>
                          <path d="M75 70L45 80L75 90" stroke="url(#gradient2)" strokeWidth="4" strokeLinecap="round"/>
                          
                          {/* Industrial bolt details */}
                          <circle cx="60" cy="60" r="8" stroke="url(#gradient3)" strokeWidth="2"/>
                          <circle cx="60" cy="60" r="3" fill="url(#gradient3)"/>
                          
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6"/>
                              <stop offset="100%" stopColor="#1E40AF"/>
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#60A5FA"/>
                              <stop offset="100%" stopColor="#3B82F6"/>
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#93C5FD"/>
                              <stop offset="100%" stopColor="#60A5FA"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Logo text */}
                    <div className="text-center">
                      <div className="mb-4">
                        <h2 className="text-4xl font-black tracking-tight text-white">
                          <span className="text-blue-400">S</span>.<span className="text-blue-400">B</span>.<span className="text-blue-400">G</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto my-3"></div>
                        <p className="text-xl font-bold text-gray-300">GENERAL METAL ENGINEERING</p>
                      </div>
                      
                      <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">SPECIALIZING IN</p>
                        <div className="flex flex-wrap justify-center gap-3">
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-bold">STEEL FABRICATION</span>
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-bold">INDUSTRIAL MACHINERY</span>
                          <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-bold">CONSTRUCTION</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom metallic accent */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
              </div>
              
              {/* Floating geometric shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-blue-500/30 rounded-lg transform rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-blue-500/20 rounded-lg transform rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom geometric separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L50 20C100 40 200 80 300 80C400 80 500 40 600 20C700 0 800 40 900 60C1000 80 1100 80 1150 80L1200 80V120H0V0Z" fill="#111827" />
          <path d="M0 20L50 30C100 40 200 60 300 60C400 60 500 40 600 30C700 20 800 40 900 50C1000 60 1100 60 1150 60L1200 60V120H0V20Z" fill="#1E40AF" fillOpacity="0.2" />
        </svg>
      </div>
    </section>
  );
}