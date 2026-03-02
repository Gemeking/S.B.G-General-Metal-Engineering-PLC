import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // EmailJS configuration - Replace with your actual credentials
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Get from EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Get from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Get from EmailJS dashboard

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        formRef.current.reset(); // Clear the form
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured data for Contact Page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contact S.B.G General Metal Engineering PLC",
        "description": "Get in touch with Ethiopia's leading industrial machinery manufacturer",
        "url": "https://sbgmanufacturing.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "S.B.G General Metal Engineering PLC",
          "description": "Industrial machinery manufacturer specializing in crusher plants and material handling systems",
          "url": "https://sbgmanufacturing.com",
          "logo": "https://sbgmanufacturing.com/iconic.png",
          "email": "sbg.general.metal.engineering.plc@gmail.com",
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
            "addressCountry": "Ethiopia",
            "addressLocality": "Addis Ababa",
            "streetAddress": "Industrial Zone"
          },
          "location": {
            "@type": "Place",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "8.964464705960772",
              "longitude": "38.764144553539566"
            }
          }
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
            "name": "Contact Us",
            "item": "https://sbgmanufacturing.com/contact"
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

      <section 
        className="py-12 md:py-20 text-white overflow-x-hidden"
        aria-label="Contact Us Page"
      >
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-widest
                           bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                           bg-clip-text text-transparent">
              CONTACT US
            </h1>

            <div className="w-32 md:w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mt-4 md:mt-6 animate-pulse" role="presentation" />

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              Let's build strong solutions together. Reach out for industrial machinery, crusher plants, and maintenance services.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">

            {/* LEFT — CONTACT INFO */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-4 md:space-y-6
                            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500 order-1 md:order-none"
                 itemScope 
                 itemType="https://schema.org/Organization">
              
              <meta itemProp="name" content="S.B.G General Metal Engineering PLC" />
              <meta itemProp="url" content="https://sbgmanufacturing.com" />
              <meta itemProp="logo" content="https://sbgmanufacturing.com/iconic.png" />
              <meta itemProp="description" content="Industrial machinery manufacturer specializing in crusher plants, conveyor systems, and material handling solutions in Ethiopia" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent"
                  itemProp="legalName">
                S.B.G General Metal Engineering PLC
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-medium" itemProp="slogan">
                We are crusher's solution! 
                <span className="sr-only"> Leading manufacturer of stone crusher plants, coal crusher plants, portable crushers, conveyor systems, iron sand processing plants, fertilizer plants, and industrial maintenance services in Ethiopia.</span>
              </p>

              <p className="text-sm sm:text-base text-gray-300 font-medium">
                Contact us for industrial machinery, installation, and maintenance services across Ethiopia.
              </p>

              <div className="space-y-3 md:space-y-4 font-bold text-base sm:text-lg text-yellow-300 break-words">
                {/* Phone 1 */}
                <div className="flex items-start gap-2" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                  <span className="text-xl" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+251911225990" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1"
                    aria-label="Call us at +251 911 225990 for industrial machinery inquiries"
                    itemProp="telephone"
                  >
                    +251 911 225990
                  </a>
                  <meta itemProp="contactType" content="customer service" />
                </div>
                
                {/* Phone 2 */}
                <div className="flex items-start gap-2" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                  <span className="text-xl" aria-hidden="true">📞</span>
                  <a 
                    href="tel:+251911610852" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1"
                    aria-label="Call us at +251 911 610852 for sales inquiries"
                    itemProp="telephone"
                  >
                    +251 911 610852
                  </a>
                  <meta itemProp="contactType" content="sales" />
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-2 break-all">
                  <span className="text-xl" aria-hidden="true">✉</span>
                  <a 
                    href="mailto:sbg.general.metal.engineering.plc@gmail.com" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1"
                    aria-label="Email us at sbg.general.metal.engineering.plc@gmail.com"
                    itemProp="email"
                  >
                    sbg.general.metal.engineering.plc@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours (good for local SEO) */}
              <div className="text-sm text-gray-400 mt-2">
                <p className="font-semibold text-yellow-400">Business Hours:</p>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mt-4 md:mt-6" role="presentation" />

              <a
                href="mailto:sbg.general.metal.engineering.plc@gmail.com?subject=Inquiry%20for%20S.B.G%20General%20Metal%20Engineering%20PLC%20-%20Industrial%20Machinery&body=I%20am%20interested%20in%20your%20industrial%20machinery%20and%20crusher%20solutions.%20Please%20provide%20more%20information.%0A%0A---%0AWe%20are%20crusher's%20solution!!%0A%0AMy%20Inquiry%3A"
                className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 md:px-10 py-3 md:py-4
                           bg-gradient-to-r from-yellow-500 to-amber-600
                           text-black font-extrabold uppercase tracking-wider text-sm sm:text-base
                           border-2 border-black
                           shadow-[0_0_10px_rgba(255,215,0,0.7)]
                           transition-all duration-300
                           hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]
                           active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                aria-label="Send email inquiry about our industrial machinery and crusher solutions"
              >
                SEND EMAIL
              </a>
            </div>

            {/* RIGHT — FORM */}
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-4 md:space-y-6
                         hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500 order-2 md:order-none"
              aria-label="Get a quote form"
            >

              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase
                             bg-gradient-to-r from-yellow-300 to-amber-500
                             bg-clip-text text-transparent">
                Get a Quote
              </h2>

              <p className="text-sm text-gray-400">Request information about our crusher plants and industrial machinery</p>

              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === "success" 
                    ? "bg-green-500/20 border border-green-400 text-green-300" 
                    : "bg-red-500/20 border border-red-400 text-red-300"
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Form Fields - Add name attributes for EmailJS */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name *"
                required
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Your full name"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email *"
                required
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Your email address"
              />

              <input
                type="tel"
                name="from_phone"
                placeholder="Your Phone Number"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Your phone number (optional)"
              />

              <select
                name="service_interest"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Select service of interest"
                defaultValue=""
              >
                <option value="" disabled className="bg-gray-800 text-gray-400">Select Service *</option>
                <option value="stone-crusher" className="bg-gray-800 text-white">Stone Crusher Plant</option>
                <option value="coal-crusher" className="bg-gray-800 text-white">Coal Crusher Plant</option>
                <option value="portable-crusher" className="bg-gray-800 text-white">Portable Crusher</option>
                <option value="conveyor" className="bg-gray-800 text-white">Conveyor System</option>
                <option value="iron-sand" className="bg-gray-800 text-white">Iron Sand Processing Plant</option>
                <option value="fertilizer" className="bg-gray-800 text-white">Fertilizer Plant</option>
                <option value="maintenance" className="bg-gray-800 text-white">Maintenance Services</option>
                <option value="other" className="bg-gray-800 text-white">Other Machinery</option>
              </select>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Message subject"
              />

              <textarea
                name="message"
                placeholder="Your Message *"
                required
                rows={4}
                className="w-full p-3 md:p-4 rounded-lg bg-white/20 border border-yellow-400/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                aria-label="Your message"
              />

              {/* Hidden honeypot field for spam prevention */}
              <input
                type="text"
                name="honeypot"
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}  
              />

              {/* Add hidden field for company email recipient */}
              <input
                type="hidden"
                name="company_email"
                value="sbg.general.metal.engineering.plc@gmail.com"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-10 md:px-12 py-3 md:py-4
                           bg-gradient-to-r from-yellow-500 to-amber-600
                           text-black font-extrabold uppercase tracking-wider text-sm sm:text-base
                           border-2 border-black
                           shadow-[0_0_10px_rgba(255,215,0,0.7)]
                           transition-all duration-300
                           hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]
                           active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Submit quote request"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}
              </button>

              <p className="text-xs text-gray-400 mt-2">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>

          </div>

          {/* MAP SECTION */}
          <div className="mt-12 md:mt-20">
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-400">Our Location</h2>
            <div className="relative bg-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-2xl md:rounded-3xl p-2 md:p-4 shadow-2xl
                            hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-500"
                 itemScope 
                 itemType="https://schema.org/Place">
              
              <meta itemProp="name" content="S.B.G General Metal Engineering PLC Headquarters" />
              <meta itemProp="address" content="Industrial Zone, Addis Ababa, Ethiopia" />
              
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content="8.964464705960772" />
                <meta itemProp="longitude" content="38.764144553539566" />
              </div>

              <iframe
                src="https://www.google.com/maps?q=8.964464705960772,38.764144553539566&z=15&output=embed"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S.B.G General Metal Engineering PLC location map - Industrial Zone, Addis Ababa, Ethiopia"
                aria-label="Google Maps showing our company location in Addis Ababa, Ethiopia"
              />
              
              {/* Map caption for SEO */}
              <div className="sr-only">
                Our headquarters is located in the Industrial Zone, Addis Ababa, Ethiopia. 
                Coordinates: 8.964464705960772, 38.764144553539566
              </div>
            </div>
            
            {/* Location address text */}
            <p className="text-center text-gray-300 mt-4">
              <span className="font-semibold">Industrial Zone, Addis Ababa, Ethiopia</span>
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ 24/7 Customer Support</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ Same Day Response</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ Free Consultation</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-yellow-400/30">✓ On-site Assessment</span>
            </div>
          </div>

          {/* Hidden breadcrumb for SEO */}
          <div className="hidden" aria-label="breadcrumb">
            <span>Home</span> › <span>Contact Us</span>
          </div>

        </div>
      </section>
    </Layout>
  );
}