import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    { title: "Stone Crusher Plant", img: "1.jpg" },
    { title: "Coal Crusher Plant", img: "4.jpg" },
    { title: "Crusher Portable", img: "3.jpg" },
    { title: "Iron Sand Processing Plant", img: "5.jpg" },
    { title: "Fertilizer Plant", img: "4.jpg" },
    { title: "Other Factory Machinery", img: "3.jpg" },
    
  ];

  const videos = [
    { title: "Video 1", url: "https://www.youtube.com/embed/C6bhKMwZRXw" },
    { title: "Video 2", url: "https://www.youtube.com/embed/TRXTORS-iII" },
    { title: "Video 3", url: "https://www.youtube.com/embed/rc-a-VGm4KM" },
    { title: "Video 4", url: "https://www.youtube.com/embed/s8b1W1h-fX4" },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
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

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold uppercase tracking-widest">
          PROJECTS & VIDEOS
        </h1>
      </div>

      {/* ================= YOUTUBE ================= */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Watch Our Videos
        </h2>

        {/* Subscribe */}
        <div className="text-center mb-8">
          <a
            href="https://www.youtube.com/@sbgcrusher-Ethiopia"
            target="_blank"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700"
          >
            Subscribe on YouTube
          </a>
        </div>

        {/* Embedded Videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <iframe
              key={i}
              className="w-full h-60 rounded shadow-lg"
              src={v.url}
              title={v.title}
              allowFullScreen
            />
          ))}
        </div>
      </div>

      {/* ================= SOCIAL MEDIA ================= */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us on Social Media</h2>

        <div className="flex justify-center gap-8">

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              className="w-12 hover:scale-110 transition"
            />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/251XXXXXXXXX" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              className="w-12 hover:scale-110 transition"
            />
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@sbg2341" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
              className="w-12 hover:scale-110 transition"
            />
          </a>

        </div>
      </div>

      {/* ================= PROJECT SLIDER ================= */}
      <div className="container mx-auto px-6">
        <div className="relative border-4 border-gray-800 p-4 bg-gray-200 shadow-xl">
          <img
            src={projects[currentProject].img}
            className="w-full h-[450px] object-cover"
          />

          <div className="absolute bottom-4 left-4 bg-black text-white px-6 py-2">
            {projects[currentProject].title}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 bg-black text-white px-4 py-2"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 bg-black text-white px-4 py-2"
          >
            ▶
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-10 flex gap-4 overflow-x-auto">
          {projects.map((p, i) => (
            <img
              key={i}
              src={p.img}
              onClick={() => setCurrentProject(i)}
              className={`w-40 h-24 object-cover cursor-pointer border-4 ${
                currentProject === i
                  ? "border-black scale-110"
                  : "border-gray-400 opacity-70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
