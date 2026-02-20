import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Structured data for website navigation
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "description": "Main menu navigation for S.B.G Manufacturing website",
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Home",
        "url": "https://sbgmanufacturing.com/",
        "description": "Return to homepage - S.B.G Manufacturing industrial solutions"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "About",
        "url": "https://sbgmanufacturing.com/about",
        "description": "Learn about S.B.G Manufacturing company history and expertise"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://sbgmanufacturing.com/contact",
        "description": "Get in touch with our industrial manufacturing team"
      }
    ]
  };

  return (
    <>
      {/* Structured Data for Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header 
        className="fixed top-0 w-full z-[100] bg-transparent text-gray-900"
        role="banner"
        itemScope 
        itemType="https://schema.org/WPHeader"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with Organization Schema */}
            <Link 
              to="/" 
              className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg"
              aria-label="S.B.G Manufacturing - Return to homepage"
              itemScope 
              itemType="https://schema.org/Organization"
            >
              <img
                src="iconic.png"
                alt="S.B.G Manufacturing - Industrial Equipment and Machinery Company Logo"
                title="S.B.G Manufacturing - Leaders in Industrial Solutions"
                className="h-16 md:h-24 w-auto animate-pulse"
                width="96"
                height="64"
                loading="eager"
                fetchPriority="high"
                itemProp="logo"
              />
              {/* Hidden organization name for SEO */}
              <span className="sr-only" itemProp="name">S.B.G Manufacturing</span>
              <meta itemProp="url" content="https://sbgmanufacturing.com" />
            </Link>

            {/* Desktop Menu */}
            <nav 
              className="hidden md:flex items-center gap-4" 
              aria-label="Main navigation"
              role="navigation"
              itemScope 
              itemType="https://schema.org/SiteNavigationElement"
            >
              {[
                { name: "Home", path: "/", title: "Return to homepage" },
                { name: "About Us", path: "/aboutus", title: "Learn about our company and expertise" },
                { name: "Contact", path: "/contact", title: "Get in touch with our team" }
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-6 py-3 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-gray-300/40 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent ${
                      isActive
                        ? "bg-gray-600 text-white shadow-lg font-extrabold" // Active state
                        : "bg-white/15 text-gray-800 hover:text-gray-900"
                    }`
                  }
                  aria-label={item.title}
                  title={item.title}
                  itemProp="url"
                >
                  <span itemProp="name">{item.name}</span>
                </NavLink>
              ))}

              {/* Hidden navigation items for SEO */}
              <div className="hidden">
                {["Services", "Projects", "Videos"].map((item) => (
                  <span key={item} itemProp="name">{item}</span>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setOpen(!open)} 
              className="md:hidden text-blue-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg p-2"
              aria-expanded={open}
              aria-label={open ? "Close mobile menu" : "Open mobile menu"}
              aria-controls="mobile-navigation"
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div 
            id="mobile-navigation"
            className="md:hidden absolute top-20 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 p-6 space-y-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {[
              { name: "Home", path: "/", description: "Return to homepage" },
              { name: "About", path: "/aboutus", description: "Learn about our company" },
              { name: "Contact", path: "/contact", description: "Contact our team" }
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-bold tracking-wide py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    isActive
                      ? "bg-gray-600 text-white" // Active mobile state
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
                onClick={() => setOpen(false)}
                aria-label={item.description}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Additional SEO-friendly text in mobile menu */}
            <div className="pt-4 mt-4 border-t border-gray-200 text-sm text-gray-600">
              <p className="font-semibold text-gray-800 mb-2">S.B.G Manufacturing</p>
              <p>Industrial Solutions • Precision Fabrication • Since 2004</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}