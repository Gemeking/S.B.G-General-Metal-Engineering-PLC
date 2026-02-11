import React from "react";
import Layout from "../components/layout/Layout";

export default function About() {
  return (
    <Layout>
    <section className="min-h-screen bg-[#e8e3d9] text-gray-900 py-20 relative">

      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-gray-800">
            ABOUT US
          </h1>

          <div className="w-40 h-[3px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 mx-auto mt-6" />

          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Built on steel, driven by precision, and trusted by industries.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE BLOCK */}
          <div className="
            border-4 border-gray-800
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            bg-gradient-to-b from-gray-300 to-gray-100
            p-4
          ">
            <img
              src="/about.jpg" // 👉 you replace
              alt="Factory"
              className="w-full h-[400px] object-cover border-2 border-gray-700"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="
            border-4 border-gray-800
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            bg-gradient-to-b from-gray-300 to-gray-100
            p-10
            space-y-6
          ">
            <h2 className="text-3xl font-extrabold uppercase tracking-wide">
              S.B.G General Metal Engineering PLC
            </h2>

            <p className="text-gray-800 leading-relaxed font-medium">
              S.B.G General Metal Engineering PLC is a trusted name in
              industrial machinery and crusher solutions. We specialize in
              manufacturing, installation, and maintenance of high-performance
              crushing and material handling systems.
            </p>

            <p className="text-gray-800 leading-relaxed font-medium">
              Our team combines real-world engineering experience with
              modern technology to deliver durable and efficient machinery
              for mining, construction, and industrial operations.
            </p>

            <p className="text-gray-800 leading-relaxed font-medium">
              We don’t just build machines — we build long-term
              partnerships with our clients by providing reliable support
              and maintenance.
            </p>

            {/* METAL STRIP */}
            <div className="w-full h-2 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800" />
          </div>

        </div>

        {/* VALUES SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

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
              className="
                border-4 border-gray-800
                bg-gradient-to-b from-gray-300 to-gray-100
                p-8
                shadow-[8px_8px_0px_rgba(0,0,0,0.5)]
              "
            >
              <h3 className="text-xl font-extrabold uppercase mb-4">
                {item.title}
              </h3>

              <p className="font-medium text-gray-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="
            inline-block
            px-12 py-5
            bg-gradient-to-b from-gray-700 to-black
            text-white
            font-extrabold uppercase tracking-wider
            border-2 border-black
            shadow-[6px_6px_0px_rgba(0,0,0,0.6)]
          ">
            BUILT WITH STEEL. TRUSTED BY INDUSTRY.
          </div>
        </div>

      </div>
    </section>
     </Layout>
  );
}
