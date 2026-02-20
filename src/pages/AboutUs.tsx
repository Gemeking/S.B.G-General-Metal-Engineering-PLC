import Layout from "../components/layout/Layout";

export default function About() {
  // Structured data for About Page (Organization + AboutPage)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About S.B.G General Metal Engineering PLC",
        "description": "Trusted industrial machinery and crusher solutions manufacturer in Ethiopia",
        "mainEntity": {
          "@type": "Organization",
          "name": "S.B.G General Metal Engineering PLC",
          "description": "We specialize in manufacturing, installation, and maintenance of high-performance crushing and material handling systems.",
          "foundingDate": "2004",
          "foundingLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Ethiopia"
            }
          },
          "areaServed": {
            "@type": "Country",
            "name": "Ethiopia"
          },
          "industry": "Industrial Machinery Manufacturing",
          "slogan": "We are crusher's solution!!",
          "knowsAbout": [
            "Stone Crusher Plants",
            "Coal Crusher Plants",
            "Portable Crushers",
            "Conveyor Systems",
            "Iron Sand Processing",
            "Fertilizer Plants",
            "Industrial Maintenance"
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sbgmanufacturing.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://sbgmanufacturing.com/aboutus"
          }
        ]
      }
    ]
  };

  return (
    <Layout>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* SEO Meta Tags - Traditional meta tags in the document head */}
      {/* These will be picked up by search engines from the HTML head section */}
      
      <section 
        className="py-12 md:py-20 text-white backdrop-blur-lg overflow-x-hidden"
        aria-label="About Us - Company Information"
      >
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest
                           bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                           bg-clip-text text-transparent">
              ABOUT US
            </h1>

            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-4 md:mt-6 animate-pulse" role="presentation" />

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Built on steel, driven by precision, and trusted by industries.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* IMAGE BLOCK */}
            <div className="relative group order-1 md:order-none">
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-xl opacity-50 group-hover:opacity-70 transition duration-500" aria-hidden="true"></div>

              <img
                src="/manufacturing-bg.jpg"
                alt="S.B.G General Metal Engineering PLC industrial manufacturing facility with crusher and conveyor equipment in Ethiopia"
                title="S.B.G Manufacturing facility - State-of-the-art industrial machinery production"
                className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.2)] transition duration-700 group-hover:scale-105"
                width="800"
                height="600"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Image caption for SEO */}
              <div className="sr-only">
                S.B.G Manufacturing facility in Ethiopia producing stone crushers, coal crushers, conveyor systems, and industrial machinery since 2004
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="bg-white/10 backdrop-blur-xl 
                            border border-yellow-400/30 
                            rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 
                            shadow-2xl space-y-4 md:space-y-6 order-2 md:order-none">

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                <span className="font-semibold text-yellow-400">S.B.G General Metal Engineering PLC</span> is a trusted name in
                industrial machinery and crusher solutions since <span className="font-semibold text-yellow-400">2004</span>. We specialize in
                manufacturing, installation, and maintenance of high-performance
                crushing and material handling systems.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                <span className="font-semibold text-yellow-400">20+ years</span> of engineering excellence. Our team combines real-world experience with
                modern technology to deliver durable and efficient machinery
                for mining, construction, and industrial operations across <span className="font-semibold text-yellow-400">Ethiopia</span>.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We don't just build machines — we build long-term
                partnerships with our clients by providing reliable support
                and maintenance for all our equipment including <span className="font-semibold">stone crusher plants, coal crusher plants, portable crushers, conveyor systems, iron sand processing plants, fertilizer plants, and industrial maintenance services</span>.
              </p>

              {/* Hidden keywords for SEO */}
              <div className="hidden">
                <span>Stone Crusher Plant Ethiopia</span>
                <span>Coal Crusher Manufacturer</span>
                <span>Portable Crusher Ethiopia</span>
                <span>Conveyor System Installation</span>
                <span>Iron Sand Processing Plant</span>
                <span>Fertilizer Plant Ethiopia</span>
                <span>Industrial Equipment Maintenance</span>
                <span>Mining Machinery Ethiopia</span>
                <span>Construction Equipment Supplier</span>
                <span>Industrial Engineering Company</span>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mt-4 md:mt-6" role="presentation" />
            </div>

          </div>

          {/* VALUES SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-16 md:mt-28">
            {[
              {
                title: "OUR MISSION",
                text: "To deliver strong, efficient and reliable crusher and industrial solutions that power growth.",
                keywords: ["industrial growth Ethiopia", "reliable machinery", "efficient crusher solutions"]
              },
              {
                title: "OUR VISION",
                text: "To become a leading engineering company known for quality and trust in Africa.",
                keywords: ["leading manufacturer Africa", "quality engineering Ethiopia", "trusted industrial partner"]
              },
              {
                title: "OUR VALUES",
                text: "Strength, honesty, precision and long-term client relationships.",
                keywords: ["precision engineering", "honest business Ethiopia", "client focused manufacturing"]
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl
                           border border-yellow-400/30
                           rounded-2xl md:rounded-3xl p-6 md:p-10
                           shadow-2xl
                           hover:scale-105
                           hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
                           transition duration-500"
              >
                <h3 className="text-lg md:text-xl font-extrabold uppercase mb-4 md:mb-6
                               bg-gradient-to-r from-yellow-300 to-amber-500
                               bg-clip-text text-transparent">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.text}
                </p>

                {/* Hidden keywords for each section */}
                <div className="hidden">
                  {item.keywords.map((keyword, idx) => (
                    <span key={idx}>{keyword}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* TRUST SIGNALS SECTION */}
          <div className="mt-16 md:mt-20 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-300">Why Choose S.B.G?</h3>
            <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ 20+ Years Experience</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ 200+ Projects Completed</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ 24/7 Customer Support</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ Ethiopia-wide Service</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ Certified Engineers</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ Quality Guaranteed</span>
            </div>
          </div>

          {/* BREADCRUMB NAVIGATION (hidden but good for SEO) */}
          <div className="hidden" aria-label="breadcrumb">
            <span>Home</span> › <span>About Us</span>
          </div>

        </div>
      </section>
    </Layout>
  );
}