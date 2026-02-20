import { Link } from "react-router-dom";

export default function Hero() {
  // Structured data for manufacturing company
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ManufacturingOrganization",
    "name": "S.B.G Manufacturing",
    "description": "Professional manufacturing, precision fabrication and industrial innovation services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Precision Fabrication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Innovation"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-20 text-white backdrop-blur-lg" aria-label="Hero Section - Manufacturing Company Introduction">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>

        <div className="relative z-10 container mx-auto text-center max-w-5xl">

          {/* Logo with SEO improvements */}
          <div itemScope itemType="https://schema.org/Organization">
            <img
              src="/iconic.png"
              alt="S.B.G Manufacturing - Precision Engineering and Fabrication Company Logo"
              title="S.B.G Manufacturing - Industry Leaders in Precision Fabrication"
              className="mx-auto w-120 h-110 object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.8)] animate-float"
              width="480"
              height="440"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Divider */}
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 mx-auto my-8 rounded-full animate-pulse" role="presentation" aria-hidden="true"></div>

          {/* Main Heading - CRITICAL for SEO */}
          <h1 className="sr-only">
            S.B.G Manufacturing - Precision Fabrication and Industrial Innovation Experts Since 2004
          </h1>
          
          {/* Subtitle as H2 for better hierarchy */}
          <h2 className="text-xl md:text-3xl font-semibold mb-16 tracking-wide 
                        bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                        bg-clip-text text-transparent animate-fadeInUp">
            Manufacturing • Precision Fabrication • Industrial Innovation
          </h2>

          {/* Stats with semantic HTML */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "20+", label: "Years Experience", description: "Two decades of manufacturing excellence" },
              { number: "200+", label: "Projects", description: "Successful industrial projects completed" },
              { number: "24/7", label: "Support", description: "Round-the-clock customer assistance" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-8 
                           bg-white/10 backdrop-blur-xl 
                           rounded-2xl shadow-2xl
                           border border-yellow-400/30
                           hover:scale-110 hover:shadow-yellow-500/50
                           transition-all duration-500"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <div className="text-5xl font-extrabold 
                                bg-gradient-to-r from-yellow-300 to-amber-500
                                bg-clip-text text-transparent mb-3"
                     itemProp="value">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-300"
                     itemProp="unitText">
                  {stat.label}
                </div>
                {/* Hidden description for SEO */}
                <meta itemProp="description" content={stat.description} />
              </div>
            ))}
          </div>

          {/* CTA Button with SEO-friendly link text */}
          <Link 
            to="/contact" 
            className="inline-block"
            aria-label="Request a manufacturing quote - Get pricing for precision fabrication services"
          >
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
    </>
  );
}