export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = [
    {
      title: "HEAD OFFICE",
      details: [
        "Addis Ababa, Ethiopia",
        "Bole Sub-City, Woreda 03",
        "Near Ethiopian Airlines HQ",
        "P.O. Box 1234"
      ]
    },
    {
      title: "FACTORY LOCATION",
      details: [
        "Industrial Zone, Akaki",
        "Plot No. 45, Block C",
        "Addis Ababa, Ethiopia",
        "24/7 Operations"
      ]
    },
    {
      title: "CONTACT",
      details: [
        "+251 11 123 4567",
        "+251 91 123 4567",
        "info@sbgenergymetal.com",
        "sales@sbgenergymetal.com"
      ]
    },
    {
      title: "WORKING HOURS",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Emergency Support: 24/7",
        "On-site Services"
      ]
    }
  ];

  const services = [
    "Steel Structure Fabrication",
    "Industrial Construction",
    "Metal Works & Welding",
    "Factory Installation",
    "Crusher Plant Manufacturing",
    "Machinery Maintenance",
    "Warehouse Construction",
    "Structural Engineering"
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Ethiopian Construction Works Authority",
    "Member - Ethiopian Chamber of Commerce",
    "OSHA Safety Standards Compliant",
    "AWS Certified Welders",
    "Heavy Machinery License"
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z", color: "hover:text-blue-400" },
    { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "hover:text-blue-500" },
    { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "hover:text-cyan-400" },
    { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.98l5.75 3.02-5.75 3.02z", color: "hover:text-red-500" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#careers" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-16 pb-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24px,_rgba(59,130,246,0.1)_24px,_rgba(59,130,246,0.1)_25px,_transparent_25px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
      
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 pb-8 border-b border-gray-800">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">S.B.G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  S.B.G GENERAL METAL ENGINEERING PLC
                </h2>
                <p className="text-sm text-gray-400">Building Industrial Foundations Since 2008</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Leading provider of industrial steel fabrication, construction services, 
              and heavy machinery manufacturing in Ethiopia and East Africa.
            </p>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800 w-full lg:w-auto">
            <h3 className="text-white font-bold text-lg mb-3">STAY UPDATED</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our industrial insights</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-r-lg text-white font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-3 border-b border-gray-800">CONTACT INFORMATION</h3>
            {contactInfo.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h4 className="text-blue-400 text-sm font-bold mb-2">{section.title}</h4>
                <ul className="space-y-2">
                  {section.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-3 border-b border-gray-800">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <svg className="w-3 h-3 mr-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-white text-sm font-bold mb-4">CONNECT WITH US</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-700`}
                    title={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-3 border-b border-gray-800">OUR SERVICES</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-3 border-b border-gray-800">CERTIFICATIONS</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="flex items-center bg-gray-900/50 rounded-lg p-3 border border-gray-800 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} S.B.G General Metal Engineering PLC. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Registered in Ethiopia | Business License No: 123456/2024 | TIN: 000123456789
              </p>
            </div>
            
            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Quality Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Health & Safety
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
          
          {/* Emergency contact bar */}
          <div className="mt-8 bg-gradient-to-r from-red-900/20 via-gray-900 to-red-900/20 rounded-lg border border-gray-800 p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-3 sm:mb-0">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">24/7 EMERGENCY SERVICE</h4>
                  <p className="text-gray-300 text-sm">For urgent industrial breakdowns and emergencies</p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-2xl font-bold text-white">+251 91 123 4567</div>
                <p className="text-gray-400 text-sm">Available 24 hours, 7 days a week</p>
              </div>
            </div>
          </div>
          
          {/* Back to top */}
          <div className="mt-8 text-center">
            <a 
              href="#top"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}