import React, { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    { title: "Stone Crusher Plant", img: "/img1.jpg" },
    { title: "Coal Crusher Plant", img: "/img2.jpg" },
    { title: "Crusher Portable", img: "/img3.jpg" },
    { title: "Conveyor System", img: "/img4.jpg" },
    { title: "Iron Sand Processing Plant", img: "/img5.jpg" },
    { title: "Fertilizer Plant", img: "/img6.jpg" },
    { title: "Other Factory Machinery", img: "/img7.jpg" },
    { title: "Maintenance", img: "/img8.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="min-h-screen bg-[#e8e3d9] py-16 text-gray-900">

      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* HEADER */}
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl font-extrabold uppercase tracking-widest text-gray-800">
          PROJECTS
        </h1>
        <div className="w-40 h-[3px] bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 mx-auto mt-4" />
      </div>

      {/* MAIN VIEWER */}
      <div className="container mx-auto px-6 relative">

        <div className="
          relative
          border-4 border-gray-800
          shadow-[10px_10px_0px_rgba(0,0,0,0.5)]
          bg-gradient-to-b from-gray-300 to-gray-100
          p-4
        ">

          <img
            src={projects[current].img}
            alt=""
            className="w-full h-[450px] object-cover border-2 border-gray-700"
          />

          {/* METAL TITLE BAR */}
          <div className="absolute bottom-4 left-4 bg-black/80 text-white px-6 py-2 uppercase font-bold tracking-wider border border-gray-500">
            {projects[current].title}
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
        <div className="
          mt-10
          flex gap-4
          overflow-x-auto
          pb-4
        ">
          {projects.map((p, index) => (
            <img
              key={index}
              src={p.img}
              onClick={() => setCurrent(index)}
              className={`
                w-40 h-24 object-cover cursor-pointer
                border-4
                ${current === index
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
