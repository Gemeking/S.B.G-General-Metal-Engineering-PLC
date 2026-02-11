import React, { useEffect, useState } from "react";


export default function Projects() {
  const projects = [
    { title: "Stone Crusher Plant", img: "src/assets/images/1.jpg" },
    { title: "Coal Crusher Plant", img: "src/assets/images/4.jpg" },
    { title: "Crusher Portable", img: "src/assets/images/3.jpg" },
    { title: "Conveyor System", img: "src/assets/images/2.jpg" },
    { title: "Iron Sand Processing Plant", img: "src/assets/images/5.jpg" },
    { title: "Fertilizer Plant", img: "src/assets/images/4.jpg" },
    { title: "Other Factory Machinery", img: "src/assets/images/3.jpg" },
    { title: "Maintenance", img: "src/assets/images/2.jpg" },
  ];

  const videos = [
    { title: "Video 1", url: "https://www.youtube.com/embed/C6bhKMwZRXw" },
    { title: "Video 2", url: "https://www.youtube.com/embed/TRXTORS-iII" },
    { title: "Video 3", url: "https://www.youtube.com/embed/rc-a-VGm4KM" },
    { title: "Video 4", url: "https://www.youtube.com/embed/s8b1W1h-fX4" },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen bg-[#e8e3d9] py-16 text-gray-900 relative">
      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* HEADER */}
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl font-extrabold uppercase tracking-widest text-gray-800">
          PROJECTS & VIDEOS
        </h1>
        <div className="w-40 h-[3px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 mx-auto mt-4" />
      </div>

      {/* YOUTUBE VIDEOS */}
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Watch Our Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, index) => (
            <div key={index} className="relative group">
              <iframe
                className="w-full h-60 rounded shadow-lg"
                src={v.url}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="mt-2 text-center font-semibold">{v.title}</p>
            </div>
          ))}
        </div>

        {/* SUBSCRIBE BUTTON */}
        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/@sbgcrusher-Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-red-700 transition"
          >
            Subscribe to Our Channel
          </a>
        </div>
      </div>

      {/* MAIN PROJECTS SLIDER */}
      <div className="container mx-auto px-6 relative">
        <div
          className="
            relative
            border-4 border-gray-800
            shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
            bg-gradient-to-b from-gray-300 to-gray-100
            p-4
          "
        >
          <img
            src={projects[currentProject].img}
            alt=""
            className="w-full h-[450px] object-cover border-2 border-gray-700"
          />

          {/* METAL TITLE BAR */}
          <div className="absolute bottom-4 left-4 bg-black/80 text-white px-6 py-2 uppercase font-bold tracking-wider border border-gray-500">
            {projects[currentProject].title}
          </div>

          {/* BUTTONS */}
          <button
            onClick={prevSlide}
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              bg-gradient-to-b from-gray-700 to-black
              text-white px-4 py-3
              border border-black
              shadow-md
              hover:scale-110
            "
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              bg-gradient-to-b from-gray-700 to-black
              text-white px-4 py-3
              border border-black
              shadow-md
              hover:scale-110
            "
          >
            ▶
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
          {projects.map((p, index) => (
            <img
              key={index}
              src={p.img}
              onClick={() => setCurrentProject(index)}
              className={`
                w-40 h-24 object-cover cursor-pointer
                border-4
                ${currentProject === index
                  ? "border-gray-900 scale-110"
                  : "border-gray-500 opacity-70"}
                shadow-md
                hover:opacity-100
                transition-all
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
