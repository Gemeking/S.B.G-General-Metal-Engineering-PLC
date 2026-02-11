

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Background Image - Replace with actual manufacturing-themed image */}
        <img
          src="bg.png" // Assume this is a metallic/industrial background image
          alt="Industrial Background"
          className="w-full h-full object-cover filter brightness-100"
        />
        {/* Gradient Overlay for depth and readability - adjusted for light theme with metallic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200/20 to-gray-400/30 opacity-70" />
      </div>

      {/* Content - Moved a little below with added margin-top */}
      <div className="relative z-10 container mx-auto px-6 py-12 text-center max-w-5xl mt-20 md:mt-32">
        {/* Logo - Visible only on mobile with awesome animation */}
        <img
          src="logo.png"
          alt="S.B.G"
          className="mx-auto mb-8 w-32 h-32 object-contain filter drop-shadow-2xl md:hidden animate-fade-in-up"
        />

        {/* Title - Visible only on mobile with awesome animation */}
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest mb-4 md:hidden animate-fade-in-up animation-delay-200 text-shadow-md">
          <span className="block text-blue-800">S.B.G</span>
          <span className="block text-gray-800">METAL ENGINEERING</span>
        </h1>

        {/* Divider - With metallic shine */}
        <div className="w-32 h-1 bg-gradient-to-r from-gray-400 to-blue-700 mx-auto mb-8 rounded-full shadow-md" />

        {/* Subtitle - Enhanced with bold, metallic text */}
        <p className="text-xl md:text-3xl font-semibold mb-16 text-gray-800 tracking-wide drop-shadow-md animate-fade-in-up animation-delay-400">
          Robotic Manufacturing • Precision Fabrication • Industrial Innovation
        </p>

        {/* Stats - Transparent glassmorphism effect for iron-like but see-through */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            ["15+", "Years Experience"],
            ["500+", "Projects"],
            ["ISO", "Certified"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-400/20"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2 drop-shadow">{num}</div>
              <div className="text-sm md:text-base uppercase tracking-widest text-gray-700 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Buttons - Amazing solid iron-themed with glow and hover */}
        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a href="/contact">
  <button className="px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-900 text-white font-bold uppercase rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
    GET QUOTE
  </button>
</a>

          
        </div>
      </div>
    </section>
  );
}