import { useEffect, useState } from "react";

export default function Projects() {
  // Enhanced project data with descriptive information
  const projects = [
    { 
      img: "1.jpg", 
      alt: "S.B.G Manufacturing stone crusher plant installation at quarry site in Ethiopia",
      title: "Stone Crusher Plant Installation",
      location: "Addis Ababa, Ethiopia",
      description: "Complete stone crushing plant with 200 TPH capacity for aggregate production"
    },
    { 
      img: "4.jpg", 
      alt: "Industrial conveyor system installation for coal handling at mining facility",
      title: "Coal Handling Conveyor System",
      location: "Oromia, Ethiopia",
      description: "Heavy-duty belt conveyor system for coal processing plant"
    },
    { 
      img: "3.jpg", 
      alt: "Portable crusher unit deployed at construction site for on-site crushing",
      title: "Mobile Crushing Unit Deployment",
      location: "Dire Dawa, Ethiopia",
      description: "Flexible portable crusher for construction aggregate production"
    },
    { 
      img: "5.jpg", 
      alt: "Iron sand processing plant with magnetic separation equipment",
      title: "Iron Sand Processing Facility",
      location: "Tigray, Ethiopia",
      description: "Complete iron sand beneficiation plant with magnetic separators"
    },
    { 
      img: "4.jpg", 
      alt: "Fertilizer production plant with mixing and granulation equipment",
      title: "Fertilizer Manufacturing Plant",
      location: "Amhara, Ethiopia",
      description: "State-of-the-art NPK fertilizer production facility"
    },
    { 
      img: "3.jpg", 
      alt: "Industrial maintenance team servicing heavy machinery at factory",
      title: "Preventive Maintenance Service",
      location: "Various Locations",
      description: "Professional equipment maintenance and repair services"
    },
  ];

  // Enhanced video data with descriptive information
  const videos = [
    { 
      url: "https://www.youtube.com/embed/C6bhKMwZRXw",
      title: "Stone Crusher Plant Operation - S.B.G Manufacturing",
      description: "Watch our stone crusher plant in action at a quarry site in Ethiopia"
    },
    { 
      url: "https://www.youtube.com/embed/TRXTORS-iII",
      title: "Conveyor System Installation Time-lapse",
      description: "See how we install industrial conveyor systems for material handling"
    },
    { 
      url: "https://www.youtube.com/embed/rc-a-VGm4KM",
      title: "Portable Crusher Deployment and Operation",
      description: "Mobile crushing unit setup and operation at construction site"
    },
    { 
      url: "https://www.youtube.com/embed/s8b1W1h-fX4",
      title: "Iron Sand Processing Plant Tour",
      description: "Complete tour of our iron sand processing facility with magnetic separation"
    },
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

  // Structured data for projects (creative work)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "name": "S.B.G Manufacturing Projects",
        "description": "Industrial manufacturing and installation projects completed in Ethiopia",
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Project",
            "name": project.title,
            "description": project.description,
            "location": {
              "@type": "Place",
              "name": project.location
            }
          }
        }))
      },
      {
        "@type": "ItemList",
        "name": "S.B.G Manufacturing Video Library",
        "description": "Industrial machinery and plant operation videos",
        "itemListElement": videos.map((video, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description,
            "embedUrl": video.url,
            "thumbnailUrl": `https://img.youtube.com/vi/${video.url.split('/').pop()}/maxresdefault.jpg`
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section 
        className="py-20 text-white " 
        aria-label="Industrial Projects and Video Portfolio"
      >
{/* Glow Background */}
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>
        {/* HEADER */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest
                         bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                         bg-clip-text text-transparent">
            PROJECTS & VIDEOS
          </h2>
          <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-6 animate-pulse" role="presentation" />
          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
            Explore our successful installations and see our industrial solutions in action across Ethiopia
          </p>
        </div>

        {/* ================= VIDEOS ================= */}
        <div className="container mx-auto px-6 mb-24 relative z-10">
          <div className="text-center mb-12">
            <a
              href="https://www.youtube.com/@sbgcrusher-Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 
                         hover:scale-110 transition duration-300 
                         rounded-xl font-bold shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Subscribe to our YouTube channel for industrial machinery videos"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((v, i) => (
              <div 
                key={i} 
                className="overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition duration-500 group"
                itemScope 
                itemType="https://schema.org/VideoObject"
              >
                <div className="relative">
                  <iframe
                    className="w-full h-60"
                    src={v.url}
                    title={v.title}
                    loading="lazy"
                    allowFullScreen
                    itemProp="embedUrl"
                  />
                  {/* Video metadata for SEO */}
                  <meta itemProp="name" content={v.title} />
                  <meta itemProp="description" content={v.description} />
                  <meta itemProp="thumbnailUrl" content={`https://img.youtube.com/vi/${v.url.split('/').pop()}/maxresdefault.jpg`} />
                  <meta itemProp="uploadDate" content="2024-01-01" />
                  
                  {/* Play button overlay for better UX */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                {/* Hidden video description for SEO */}
                <div className="hidden">
                  <p itemProp="description">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PROJECT SLIDER ================= */}
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">Featured Projects</h3>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.3)]">
            {/* IMAGE with SEO improvements */}
            <img
              src={projects[currentProject].img}
              alt={projects[currentProject].alt}
              title={projects[currentProject].title}
              className="w-full h-[500px] object-cover transition-all duration-700 scale-100 hover:scale-105"
              loading="lazy"
              width="1200"
              height="500"
            />

            
            {/* Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden="true" />

            {/* Navigation Buttons with ARIA labels */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 
                         px-5 py-3 rounded-full
                         bg-gradient-to-r from-yellow-500 to-amber-600
                         text-black font-bold shadow-lg
                         hover:scale-110 transition duration-300
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="View previous project"
            >
              <span aria-hidden="true">◀</span>
              <span className="sr-only">Previous</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 
                         px-5 py-3 rounded-full
                         bg-gradient-to-r from-yellow-500 to-amber-600
                         text-black font-bold shadow-lg
                         hover:scale-110 transition duration-300
                         focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="View next project"
            >
              <span aria-hidden="true">▶</span>
              <span className="sr-only">Next</span>
            </button>
          </div>

          {/* THUMBNAILS with descriptive alt text */}
          <div className="mt-12 flex gap-6 overflow-x-auto pb-4" role="tablist" aria-label="Project thumbnails">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setCurrentProject(i)}
                className={`flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-xl overflow-hidden
                  transition-all duration-500 
                  ${currentProject === i ? "ring-4 ring-yellow-500" : "opacity-60 hover:opacity-100"}`}
                aria-label={`View ${p.title}`}
                aria-selected={currentProject === i}
                role="tab"
              >
                <img
                  src={p.img}
                  alt={`Thumbnail: ${p.title}`}
                  className="w-44 h-28 object-cover"
                  loading="lazy"
                  width="176"
                  height="112"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= SOCIAL MEDIA LINKS ================= */}
        <div className="container mx-auto px-6 mt-24 text-center relative z-10">
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Follow Us</h3>
          
          <div className="flex justify-center gap-10">
            <a 
              href="https://www.instagram.com/sbg.generalmetalengineeringplc?igsh=MTh0NXR2bDhrbnZvMQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-125 hover:rotate-6 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
              aria-label="Follow us on Instagram for project updates"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-14"
                loading="lazy"
                width="56"
                height="56"
              />
            </a>
            
            <a 
              href="https://www.facebook.com/sbgcrusher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-125 hover:rotate-6 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
              aria-label="Follow us on Facebook for company news"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="Facebook"
                className="w-14"
                loading="lazy"
                width="56"
                height="56"
              />
            </a>
            
            <a 
              href="https://www.tiktok.com/@sbg.general.metal?_r=1&_t=ZS-94CpR4NkyHw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-125 hover:rotate-6 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full"
              aria-label="Follow us on TikTok for machinery videos"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                alt="TikTok"
                className="w-14"
                loading="lazy"
                width="56"
                height="56"
              />
            </a>
          </div>

          {/* Social media structured data */}
          <div className="hidden" itemScope itemType="https://schema.org/Organization">
            <link itemProp="sameAs" href="https://www.instagram.com/sbgcrusher" />
            <link itemProp="sameAs" href="https://www.facebook.com/sbgcrusher" />
            <link itemProp="sameAs" href="https://www.tiktok.com/@sbgcrusher" />
            <link itemProp="sameAs" href="https://www.youtube.com/@sbgcrusher-Ethiopia" />
          </div>
        </div>
      </section>
    </>
  );
}