import { Link } from "react-router";

export default function Hero() {
  return (
    <section className=" py-20 text-white
  
">

     {/* Glow Background */}
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>

      <div className="relative z-10 container mx-auto text-center max-w-5xl">

        {/* Logo */}
        <img
          src="/iconic.png"
          alt="S.B.G"
          className="mx-auto w-120 h-110 object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.8)] animate-float"
        />

        {/* Divider */}
        <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 mx-auto my-8 rounded-full animate-pulse"></div>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl font-semibold mb-16 tracking-wide 
                      bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                      bg-clip-text text-transparent animate-fadeInUp">
          Manufacturing • Precision Fabrication • Industrial Innovation
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[
            ["20+", "Years Experience"],
            ["200+", "Projects"],
            ["24/7", "Support"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="flex flex-col items-center p-8 
                         bg-white/10 backdrop-blur-xl 
                         rounded-2xl shadow-2xl
                         border border-yellow-400/30
                         hover:scale-110 hover:shadow-yellow-500/50
                         transition-all duration-500"
            >
              <div className="text-5xl font-extrabold 
                              bg-gradient-to-r from-yellow-300 to-amber-500
                              bg-clip-text text-transparent mb-3">
                {num}
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-300">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link to="/contact">
          <button className="px-12 py-4 
                             bg-gradient-to-r from-yellow-500 to-amber-600
                             hover:from-yellow-400 hover:to-amber-500
                             text-black font-bold uppercase rounded-xl
                             shadow-[0_0_30px_rgba(255,215,0,0.8)]
                             hover:scale-110 transition-all duration-300">
            GET QUOTE
          </button>
        </Link>
      </div>
    </section>
  );
}