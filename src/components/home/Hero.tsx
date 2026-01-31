export default function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-sm tracking-widest text-accent font-semibold">
            INDUSTRIAL • CONSTRUCTION • MANUFACTURING
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Building Strong <br />
            <span className="text-accent">Metal & Steel</span> Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            S.B.G General Metal Engineering PLC delivers high-quality steel
            fabrication, industrial construction, and durable metal solutions
            for factories, warehouses, and infrastructure projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-accent text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Get a Quote
            </button>

            <button className="border border-white/60 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Decorative bottom shape */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-100 clip-path-polygon"></div>
    </section>
  );
}
