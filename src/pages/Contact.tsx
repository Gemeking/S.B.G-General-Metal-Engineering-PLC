import React from "react";
import Layout from "../components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
    <section className="min-h-screen bg-[#e8e3d9] py-20 text-gray-900 relative">

      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-gray-800">
            CONTACT US
          </h1>

          <div className="w-40 h-[3px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 mx-auto mt-6" />

          <p className="mt-6 text-xl text-gray-700 font-medium">
            Let’s build strong solutions together.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT INFO */}
          <div className="
            border-4 border-gray-800
            bg-gradient-to-b from-gray-300 to-gray-100
            p-10
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            space-y-6
          ">
            <h2 className="text-3xl font-extrabold uppercase">
              S.B.G General Metal Engineering PLC
            </h2>

            <p className="font-medium text-gray-800">
              We are crusher’s solution!!  
              Contact us for industrial machinery, installation,
              and maintenance services.
            </p>

            <div className="space-y-4 font-bold text-lg">

              <p>📞 +251 911 225990</p>
              <p>📞 +251 911 128814</p>

              <p>✉ ksmon369@gmail.com</p>

            </div>

            {/* METAL BAR */}
            <div className="w-full h-2 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800" />

            {/* EMAIL BUTTON */}
            <a
              href="mailto:ksmon369@gmail.com?subject=SBG GENERAL METAL ENGINEERING PLC.&body=We are crusher's solution!!"
              className="
                inline-block
                px-10 py-4
                bg-gradient-to-b from-gray-700 to-black
                text-white
                font-extrabold uppercase tracking-wider
                border-2 border-black
                shadow-[5px_5px_0px_rgba(0,0,0,0.6)]
                hover:-translate-y-1
                transition
              "
            >
              SEND EMAIL
            </a>
          </div>

          {/* RIGHT — FORM */}
          <form className="
            border-4 border-gray-800
            bg-gradient-to-b from-gray-300 to-gray-100
            p-10
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            space-y-6
          ">

            <h2 className="text-3xl font-extrabold uppercase">
              Get a Quote
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-2 border-gray-700 bg-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-2 border-gray-700 bg-white outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border-2 border-gray-700 bg-white outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 border-2 border-gray-700 bg-white outline-none"
            />

            <button
              type="submit"
              className="
                px-12 py-4
                bg-gradient-to-b from-gray-700 to-black
                text-white
                font-extrabold uppercase tracking-wider
                border-2 border-black
                shadow-[5px_5px_0px_rgba(0,0,0,0.6)]
                hover:-translate-y-1
                transition
              "
            >
              SUBMIT MESSAGE
            </button>

          </form>

        </div>

        {/* MAP SECTION */}
        <div className="mt-20">

          <div className="
            border-4 border-gray-800
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            bg-gradient-to-b from-gray-300 to-gray-100
            p-4
          ">
            <div className="w-full h-[350px] bg-gray-400 flex items-center justify-center font-bold text-xl">
              GOOGLE MAP LOCATION HERE
            </div>
          </div>

        </div>

      </div>
    </section>
    </Layout>
  );
}
