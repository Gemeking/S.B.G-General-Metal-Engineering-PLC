import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "S.B.G General Metal Engineering PLC",
    "alternateName": "SBG Crusher Ethiopia",
    "description": "We are crusher's solution!! - Industrial manufacturing and precision fabrication",
    "url": "https://sbgmanufacturing.com",
    "logo": "https://sbgmanufacturing.com/iconic.png",
    "email": "ksmon369@gmail.com",
    "telephone": "+251-911-225990",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+251-911-225990",
        "contactType": "customer service",
        "areaServed": "ET",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+251-911-610852",
        "contactType": "sales",
        "areaServed": "ET",
        "availableLanguage": "English"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ethiopia"
    },
    "sameAs": [
      "https://www.youtube.com/@sbgcrusher-Ethiopia"
    ]
  };

  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <footer 
        className="relative bg-white/20 backdrop-blur-xl border-t border-gray-200 text-gray-900"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* TOP */}
          <div className="grid md:grid-cols-3 gap-10 items-start">

            {/* LOGO + COMPANY INFO */}
            <div className="space-y-4">
              <Link 
                to="/" 
                className="inline-block focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-lg"
                aria-label="S.B.G General Metal Engineering PLC - Return to homepage"
              >
                <img
                  src="iconic.png"
                  alt="S.B.G General Metal Engineering PLC - Industrial Manufacturing Company Logo"
                  className="h-20 w-auto"
                />
              </Link>

              <h2 className="font-extrabold text-lg tracking-widest uppercase">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-gray-700 font-medium">
                We are crusher's solution!! 
                <span className="sr-only">Industrial manufacturing, precision fabrication, and crushing solutions in Ethiopia</span>
              </p>
            </div>

            {/* QUICK LINKS - Only 3 pages as requested */}
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-lg">
                Quick Links
              </h3>

              <div className="flex flex-col gap-2 font-semibold">
                <Link 
                  to="/" 
                  className="hover:text-blue-600 hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Return to homepage"
                >
                  Home
                </Link>
                <Link 
                  to="/aboutus" 
                  className="hover:text-blue-600 hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Learn about S.B.G General Metal Engineering PLC"
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="hover:text-blue-600 hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Contact our team for industrial solutions"
                >
                  Contact
                </Link>
              </div>

              {/* Hidden keywords for SEO (doesn't affect visible links) */}
              <div className="hidden">
                <span>Stone Crusher</span>
                <span>Coal Crusher</span>
                <span>Conveyor Systems</span>
                <span>Industrial Machinery</span>
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-lg">
                Contact
              </h3>

              <div className="font-semibold space-y-2">
                {/* Phone 1 */}
                <div className="flex items-center gap-2">
                  <span aria-hidden="true">📞</span>
                  <a 
                    href="tel:+251911225990" 
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded px-1"
                    aria-label="Call us at +251 911 225990"
                  >
                    +251 911 225990
                  </a>
                </div>
                
                {/* Phone 2 */}
                <div className="flex items-center gap-2">
                  <span aria-hidden="true">📞</span>
                  <a 
                    href="tel:+251911610852" 
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded px-1"
                    aria-label="Call us at +251 911 610852"
                  >
                    +251 911 610852
                  </a>
                </div>
              </div>

              {/* EMAIL BUTTON */}
              <a
                href={`mailto:ksmon369@gmail.com?subject=Inquiry%20for%20S.B.G%20General%20Metal%20Engineering%20PLC%20-%20Industrial%20Solutions&body=I%20am%20interested%20in%20your%20industrial%20manufacturing%20services.%20Please%20provide%20more%20information.%0A%0A---%0AWe%20are%20crusher's%20solution!!%0A%0AMy%20Inquiry%3A`}
                className="
                  inline-block mt-2
                  px-6 py-3
                  bg-blue-600 text-white
                  font-bold uppercase tracking-wider
                  rounded-full
                  hover:bg-blue-700 hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
                  transition-all duration-300
                "
                aria-label="Send email inquiry to S.B.G General Metal Engineering PLC"
              >
                Email Us
              </a>

              {/* Business hours (hidden on mobile, visible on desktop) */}
              <div className="text-sm text-gray-600 mt-4 hidden md:block">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 8:00 AM - 12:00 PM</p>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-12 pt-6 border-t border-gray-300">
            <div className="text-center text-gray-700 font-medium">
              <p>
                © {currentYear} S.B.G General Metal Engineering PLC.  
                All rights reserved.
              </p>
              <p className="text-sm mt-2 text-gray-600">
                <span className="sr-only">Manufacturing </span>
                Precision Fabrication • Industrial Machinery • Crushing Solutions
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}