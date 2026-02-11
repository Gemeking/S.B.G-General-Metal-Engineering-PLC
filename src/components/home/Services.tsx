

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
    <section className="min-h-screen bg-[#e8e3d9] text-gray-900 py-20">

      {/* OLD MAGAZINE STYLE OVERLAY */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* HEADER */}
      <div className="container mx-auto px-6 text-center mb-16 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-4 text-gray-800">
          OUR SERVICES
        </h1>

        <div className="w-40 h-[3px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 mx-auto mb-6" />

        <p className="text-xl max-w-3xl mx-auto text-gray-700 font-medium">
          Precision-engineered industrial solutions built with strength,
          reliability and real-world experience.
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

        {services.map((service) => (
          <div
            key={service.id}
            className="
              relative p-8 
              bg-gradient-to-b from-gray-300 to-gray-100
              border-2 border-gray-700
              shadow-[6px_6px_0px_rgba(0,0,0,0.4)]
              hover:shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
              transition-all duration-300
              hover:-translate-y-1
            "
          >

            {/* METAL NUMBER PLATE */}
            <div className="
              absolute -top-4 -left-4 
              w-12 h-12
              bg-gradient-to-br from-gray-600 to-gray-900
              text-white font-bold text-lg
              flex items-center justify-center
              border border-black
              shadow-md
            ">
              {service.id}
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-extrabold mb-4 mt-4 uppercase tracking-wide text-gray-800">
              {service.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed text-[15px]">
              {service.description}
            </p>

            {/* METAL STRIP */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 text-center mt-20 relative">
        <button
          className="
            px-12 py-4
            bg-gradient-to-b from-gray-700 to-black
            text-white font-bold uppercase tracking-wider
            border-2 border-black
            shadow-[5px_5px_0px_rgba(0,0,0,0.5)]
            hover:shadow-[8px_8px_0px_rgba(0,0,0,0.6)]
            hover:-translate-y-1
            transition-all
          "
        >
          GET A QUOTE TODAY
        </button>
      </div>

    </section>
  );
}
