import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    { img: "1.jpg" },
    { img: "4.jpg" },
    { img: "3.jpg" },
    { img: "5.jpg" },
    { img: "4.jpg" },
    { img: "3.jpg" },
  ];

  const videos = [
    { url: "https://www.youtube.com/embed/C6bhKMwZRXw" },
    { url: "https://www.youtube.com/embed/TRXTORS-iII" },
    { url: "https://www.youtube.com/embed/rc-a-VGm4KM" },
    { url: "https://www.youtube.com/embed/s8b1W1h-fX4" },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  return (
    <section className=" py-20 text-white
   backdrop-blur-lg
">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse"></div>

      {/* HEADER */}
      <div className="text-center mb-20 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest
                       bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                       bg-clip-text text-transparent">
          PROJECTS & VIDEOS
        </h1>
        <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-6 animate-pulse" />
      </div>

      {/* ================= VIDEOS ================= */}
      <div className="container mx-auto px-6 mb-24 relative z-10">

        <div className="text-center mb-8">
          <a
            href="https://www.youtube.com/@sbgcrusher-Ethiopia"
            target="_blank"
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 
                       hover:scale-110 transition duration-300 
                       rounded-xl font-bold shadow-lg"
          >
            Subscribe on YouTube
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
              <iframe
                className="w-full h-60"
                src={v.url}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= PROJECT SLIDER ================= */}
      <div className="container mx-auto px-6 relative z-10">

        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.3)]">

          {/* IMAGE */}
          <img
            src={projects[currentProject].img}
            className="w-full h-[500px] object-cover transition-all duration-700 scale-100 hover:scale-105"
          />

          {/* Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 
                       px-5 py-3 rounded-full
                       bg-gradient-to-r from-yellow-500 to-amber-600
                       text-black font-bold shadow-lg
                       hover:scale-110 transition duration-300"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 
                       px-5 py-3 rounded-full
                       bg-gradient-to-r from-yellow-500 to-amber-600
                       text-black font-bold shadow-lg
                       hover:scale-110 transition duration-300"
          >
            ▶
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
          {projects.map((p, i) => (
            <img
              key={i}
              src={p.img}
              onClick={() => setCurrentProject(i)}
              className={`w-44 h-28 object-cover rounded-xl cursor-pointer 
                transition-all duration-500 
                ${
                  currentProject === i
                    ? "scale-110 ring-4 ring-yellow-500 shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
            />
          ))}
        </div>

      </div>

      {/* ================= SOCIAL ================= */}
      <div className="container mx-auto px-6 mt-24 text-center relative z-10">

        <div className="flex justify-center gap-10">

          {[
            "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            "https://cdn-icons-png.flaticon.com/512/733/733585.png",
            "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
          ].map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="w-14 hover:scale-125 hover:rotate-6 transition duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

    </section>
  );
}