export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background with local manufacturing images */}
      <div className="absolute inset-0">
        {/* Primary background image - choose one from your assets */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url("/manufacturing-bg.jpg")'
          }}
        />
        
        {/* Fallback if primary image doesn't exist */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
          {/* Pattern overlay for manufacturing feel */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
          </div>
          
          {/* Optional: Multiple background images blended together */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: 'url("/industrial-pattern.jpg")',
              backgroundSize: '400px',
              backgroundBlendMode: 'overlay'
            }}
          />
        </div>
        
        {/* Geometric accents */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-gray-300/30 rounded-lg rotate-45"></div>
      </div>

      {/* Content container - centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        
        {/* Logo/Company Name with icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-blue-600"></div>
            <span className="text-sm tracking-widest uppercase text-blue-600 font-bold">
              PRECISION ENGINEERING
            </span>
            <div className="h-0.5 w-8 bg-blue-600"></div>
          </div>
          
          <div className="flex flex-col items-center mb-6">
            {/* Company Logo */}
            <div className="mb-4">
              <img 
                src="/assets/images/company-logo.png" 
                alt="S.B.G Metal Engineering" 
                className="h-16 w-auto"
              />
              <div className="hidden">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
                  <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">G</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-gray-900">S.B.G</span>
              <span className="block text-blue-700 mt-2">METAL ENGINEERING</span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto my-6 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Industrial Manufacturing & Construction Solutions
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-700 font-bold text-2xl">15+</div>
              <div className="text-sm text-gray-700 font-semibold">Years</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-700 font-bold text-2xl">500+</div>
              <div className="text-sm text-gray-700 font-semibold">Projects</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-700 font-bold text-2xl">ISO</div>
              <div className="text-sm text-gray-700 font-semibold">Certified</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-blue-700 font-bold text-2xl">24/7</div>
              <div className="text-sm text-gray-700 font-semibold">Support</div>
            </div>
          </div>
          
          {/* Services */}
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-gray-300 shadow-xl max-w-3xl mx-auto mb-10">
            <h3 className="text-gray-900 font-bold text-lg mb-4 uppercase tracking-wider">OUR SPECIALIZATIONS</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                Steel Fabrication
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                Heavy Machinery
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                Industrial Construction
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                Metal Works
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-4 rounded-xl font-bold text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[220px] transform">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              GET QUOTE NOW
            </span>
          </button>
          
          <button className="group relative border-2 border-blue-600 bg-white/80 px-10 py-4 rounded-xl font-bold text-blue-700 hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-[220px] transform">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              VIEW PORTFOLIO
            </span>
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16">
          <p className="text-gray-700 text-sm mb-4">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-600/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-blue-600/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-gray-700 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient for better text contrast */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
    </section>
  );
}