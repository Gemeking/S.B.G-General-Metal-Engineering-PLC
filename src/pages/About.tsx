import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
     <section className="py-12 md:py-20 text-white backdrop-blur-lg overflow-x-hidden">
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest
                           bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                           bg-clip-text text-transparent">
              ABOUT US
            </h1>

            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-4 md:mt-6 animate-pulse" />

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Built on steel, driven by precision, and trusted by industries.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* IMAGE BLOCK */}
            <div className="relative group order-1 md:order-none">
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>

              <img
                src="/manufacturing-bg.jpg"
                alt="Factory"
                className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.2)] transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* TEXT BLOCK */}
            <div className="bg-white/10 backdrop-blur-xl 
                            border border-yellow-400/30 
                            rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 
                            shadow-2xl space-y-4 md:space-y-6 order-2 md:order-none">

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                S.B.G General Metal Engineering PLC is a trusted name in
                industrial machinery and crusher solutions. We specialize in
                manufacturing, installation, and maintenance of high-performance
                crushing and material handling systems.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our team combines real-world engineering experience with
                modern technology to deliver durable and efficient machinery
                for mining, construction, and industrial operations.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We don't just build machines — we build long-term
                partnerships with our clients by providing reliable support
                and maintenance.
              </p>

              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mt-4 md:mt-6" />
            </div>

          </div>

          {/* VALUES SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-16 md:mt-28">

            {[
              {
                title: "OUR MISSION",
                text: "To deliver strong, efficient and reliable crusher and industrial solutions that power growth."
              },
              {
                title: "OUR VISION",
                text: "To become a leading engineering company known for quality and trust in Africa."
              },
              {
                title: "OUR VALUES",
                text: "Strength, honesty, precision and long-term client relationships."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl
                           border border-yellow-400/30
                           rounded-2xl md:rounded-3xl p-6 md:p-10
                           shadow-2xl
                           hover:scale-105
                           hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
                           transition duration-500"
              >
                <h3 className="text-lg md:text-xl font-extrabold uppercase mb-4 md:mb-6
                               bg-gradient-to-r from-yellow-300 to-amber-500
                               bg-clip-text text-transparent">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}