export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ===== Background ===== */}
      <div className="absolute inset-0">

        {/* Metal factory image without overlay for full view */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/wer.png')",
          }}
        />

        {/* Subtle grid pattern for industrial feel */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">

        {/* Top Label */}
        

        {/* Logo */}
        <img
          src="/assets/images/company-logo.png"
          alt="S.B.G"
          className="h-20 mx-auto mb-8 opacity-95"
        />

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="block text-gray-300" style={{ background: 'linear-gradient(to bottom, #d9d9d9, #4d4d4d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>S.B.G</span>
          <span className="block text-gray-300 mt-3" style={{ background: 'linear-gradient(to bottom, #d9d9d9, #4d4d4d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            METAL ENGINEERING
          </span>
        </h1>

        {/* Divider */}
        <div className="h-1 w-48 bg-gray-400 mx-auto mb-10 rounded-full"></div>

        {/* Subtitle */}
        <p className="text-2xl text-gray-400 mb-14 max-w-3xl mx-auto font-light" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.2)' }}>
          Robotic Manufacturing • Precision Fabrication • Industrial Innovation
        </p>

        {/* ===== Glass Stats ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {[
            ["15+", "Years Experience"],
            ["500+", "Projects"],
            ["ISO", "Certified"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl"
            >
              <div className="text-gray-300 text-4xl font-bold" style={{ background: 'linear-gradient(to bottom, #d9d9d9, #4d4d4d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{num}</div>
              <div className="text-gray-400 text-base mt-2" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.1)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ===== Specializations ===== */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl mb-14">
          <h3 className="text-gray-300 font-semibold mb-6 tracking-widest text-lg" style={{ background: 'linear-gradient(to bottom, #d9d9d9, #4d4d4d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            CORE SPECIALIZATIONS
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              "Steel Fabrication",
              "Heavy Machinery",
              "Industrial Construction",
              "Metal Works",
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-3 bg-gray-700/20 border border-gray-400/30 text-gray-300 rounded-full text-base font-medium"
                style={{ textShadow: '0 1px 1px rgba(255,255,255,0.2)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ===== Buttons ===== */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center">

          <button className="bg-gray-700 hover:bg-gray-600 px-12 py-5 rounded-2xl font-semibold text-lg text-gray-200 shadow-2xl hover:scale-105 transition-transform duration-300" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            GET QUOTE
          </button>

          <button className="border border-gray-400/50 bg-white/5 backdrop-blur-md px-12 py-5 rounded-2xl font-semibold text-lg text-gray-300 hover:bg-white/10 transition-colors duration-300" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            VIEW PROJECTS
          </button>

        </div>

        {/* ===== Scroll Indicator ===== */}
        <div className="mt-20 animate-bounce">
          <div className="w-8 h-12 border border-gray-400/50 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-4 bg-gray-400 rounded-full mt-3"></div>
          </div>
        </div>

      </div>

    </section>
  );
}