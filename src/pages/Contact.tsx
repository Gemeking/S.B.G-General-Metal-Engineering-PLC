import Layout from "../components/layout/Layout";

export default function Contact() {
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
              CONTACT US
            </h1>

            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-4 md:mt-6 animate-pulse" />

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Let's build strong solutions together.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">

            {/* LEFT — CONTACT INFO */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-4 md:space-y-6
                            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500 order-1 md:order-none">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-medium">
                We are crusher's solution! Contact us for industrial machinery, installation, and maintenance services.
              </p>

              <div className="space-y-3 md:space-y-4 font-bold text-base sm:text-lg text-yellow-300 break-words">
                <p className="flex items-start gap-2">
                  <span className="text-xl">📞</span>
                  <span>+251 911 225990</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-xl">📞</span>
                  <span>+251 911 610852</span>
                </p>
                <p className="flex items-start gap-2 break-all">
                  <span className="text-xl">✉</span>
                  <span>ksmon369@gmail.com</span>
                </p>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mt-4 md:mt-6" />

              <a
                href="mailto:ksmon369@gmail.com?subject=SBG GENERAL METAL ENGINEERING PLC.&body=We are crusher's solution!!"
                className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 md:px-10 py-3 md:py-4
                           bg-gradient-to-r from-yellow-500 to-amber-600
                           text-black font-extrabold uppercase tracking-wider text-sm sm:text-base
                           border-2 border-black
                           shadow-[0_0_10px_rgba(255,215,0,0.7)]
                           transition-all duration-300
                           hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]
                           active:scale-95"
              >
                SEND EMAIL
              </a>
            </div>

            {/* RIGHT — FORM */}
            <form className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-4 md:space-y-6
                             hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500 order-2 md:order-none">

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent">
                Get a Quote
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 md:py-4
                           bg-gradient-to-r from-yellow-500 to-amber-600
                           text-black font-extrabold uppercase tracking-wider text-sm sm:text-base
                           border-2 border-black
                           shadow-[0_0_10px_rgba(255,215,0,0.7)]
                           transition-all duration-300
                           hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]
                           active:scale-95"
              >
                SUBMIT MESSAGE
              </button>

            </form>

          </div>

          {/* MAP SECTION */}
          <div className="mt-12 md:mt-20">
            <div className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl
                            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500">
              <iframe
                src="https://www.google.com/maps?q=8.964464705960772,38.764144553539566&z=15&output=embed"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              />
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}