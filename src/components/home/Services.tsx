export default function Services() {
  const services = [
    { id: 1, title: "Stone Crusher Plant", description: "High-performance crushing solutions for stone and aggregate processing, designed for durability and efficiency in demanding environments." },
    { id: 2, title: "Coal Crusher Plant", description: "Specialized coal handling and crushing systems engineered for optimal output and minimal downtime in mining operations." },
    { id: 3, title: "Crusher Portable", description: "Mobile crushing units that offer flexibility and rapid deployment for on-site material processing." },
    { id: 4, title: "Conveyor System", description: "Advanced material handling conveyor solutions for seamless transportation in industrial settings." },
    { id: 5, title: "Iron Sand Processing Plant", description: "Comprehensive processing plants for iron sand extraction and refinement with cutting-edge technology." },
    { id: 6, title: "Fertilizer Plant", description: "State-of-the-art facilities for fertilizer production, ensuring high-quality output for agricultural needs." },
    { id: 7, title: "Other Factory Machinery", description: "Custom-engineered machinery solutions tailored to various factory requirements and specifications." },
    { id: 8, title: "Maintenance", description: "Professional maintenance services to ensure longevity and peak performance of all industrial equipment." },
  ];

  return (
    <section className=" py-20 text-white
   backdrop-blur-lg
">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse"></div>

      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-6 
                       bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                       bg-clip-text text-transparent">
          OUR SERVICES
        </h1>

        <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mb-6 animate-pulse" />

        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Precision-engineered industrial solutions built with strength,
          reliability and real-world experience.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {services.map((service) => (
          <div
            key={service.id}
            className="group relative h-[320px]"
            style={{ perspective: "1000px" }}
          >
            {/* Card Inner */}
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* FRONT */}
              <div
                className="absolute w-full h-full 
                           bg-white/10 backdrop-blur-xl 
                           border border-yellow-400/30
                           rounded-2xl p-8 shadow-2xl
                           flex flex-col justify-center
                           transition-transform duration-700
                           group-hover:rotate-y-180"
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="text-4xl font-extrabold 
                                bg-gradient-to-r from-yellow-300 to-amber-500
                                bg-clip-text text-transparent mb-4">
                  {service.id}
                </div>

                <h2 className="text-xl font-bold text-white uppercase">
                  {service.title}
                </h2>
              </div>

              {/* BACK */}
              <div
                className="absolute w-full h-full 
                           bg-gradient-to-br from-yellow-500 to-amber-600
                           rounded-2xl p-8 text-black shadow-2xl
                           flex flex-col justify-center
                           transition-transform duration-700"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h2 className="text-lg font-bold mb-4 uppercase">
                  {service.title}
                </h2>

                <p className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Rotate Effect */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:rotate-y-180"
                style={{
                  transformStyle: "preserve-3d",
                }}
              ></div>

            </div>

            {/* Real Flip Rotation Applied Here */}
            <style>
              {`
                .group:hover > div {
                  transform: rotateY(180deg);
                }
              `}
            </style>

          </div>
        ))}
      </div>
    </section>
  );
}