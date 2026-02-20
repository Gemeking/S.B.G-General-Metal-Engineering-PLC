// REMOVE THIS LINE - it's not being used
// import { Link } from "react-router-dom";

// Define TypeScript interfaces
interface Service {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  keywords: string[];
  icon: string;
  benefits: string[];
}

interface ServiceCardProps {
  service: Service;
}

export default function Services() {
  const services: Service[] = [
    { 
      id: 1, 
      title: "Stone Crusher Plant", 
      shortDescription: "High-performance crushing solutions for stone and aggregate processing",
      description: "High-performance crushing solutions for stone and aggregate processing, designed for durability and efficiency in demanding environments. Our stone crusher plants feature advanced crushing technology, low maintenance requirements, and maximum throughput for quarry operations, mining sites, and construction projects.",
      keywords: ["rock crushing", "aggregate processing", "quarry equipment", "jaw crusher", "cone crusher"],
      icon: "🪨",
      benefits: ["High throughput", "Low maintenance", "Energy efficient", "Durable construction"]
    },
    { 
      id: 2, 
      title: "Coal Crusher Plant", 
      shortDescription: "Specialized coal handling and crushing systems engineered for optimal output",
      description: "Specialized coal handling and crushing systems engineered for optimal output and minimal downtime in mining operations. Our coal crusher plants are built to handle the toughest coal processing requirements with features like dust suppression, automated controls, and wear-resistant components.",
      keywords: ["coal handling", "mining equipment", "coal processing", "crusher system", "bulk material handling"],
      icon: "⚫",
      benefits: ["Dust suppression", "High capacity", "24/7 operation", "Low operating costs"]
    },
    { 
      id: 3, 
      title: "Crusher Portable", 
      shortDescription: "Mobile crushing units that offer flexibility and rapid deployment",
      description: "Mobile crushing units that offer flexibility and rapid deployment for on-site material processing. Our portable crushers are designed for quick setup, easy transportation, and versatile application across multiple job sites, eliminating the need for material hauling.",
      keywords: ["mobile crusher", "portable rock crusher", "on-site crushing", "rental equipment", "contract crushing"],
      icon: "🚛",
      benefits: ["Quick deployment", "Fuel efficient", "Easy transport", "Versatile applications"]
    },
    { 
      id: 4, 
      title: "Conveyor System", 
      shortDescription: "Advanced material handling conveyor solutions for seamless transportation",
      description: "Advanced material handling conveyor solutions for seamless transportation in industrial settings. Our conveyor systems feature modular designs, heavy-duty components, and customizable configurations to efficiently move bulk materials across various distances and elevations.",
      keywords: ["industrial conveyor", "material handling", "belt conveyor", "bulk transport", "automated conveyor"],
      icon: "⚙️",
      benefits: ["Continuous operation", "Low labor costs", "Custom lengths", "Weather resistant"]
    },
    { 
      id: 5, 
      title: "Iron Sand Processing Plant", 
      shortDescription: "Comprehensive processing plants for iron sand extraction and refinement",
      description: "Comprehensive processing plants for iron sand extraction and refinement with cutting-edge technology. Our iron sand processing solutions include magnetic separation, washing, classification, and concentration systems to maximize recovery rates and product purity.",
      keywords: ["iron sand", "mineral processing", "magnetic separation", "sand mining", "ore beneficiation"],
      icon: "⚡",
      benefits: ["High recovery rate", "Pure output", "Automated controls", "Environmentally responsible"]
    },
    { 
      id: 6, 
      title: "Fertilizer Plant", 
      shortDescription: "State-of-the-art facilities for fertilizer production",
      description: "State-of-the-art facilities for fertilizer production, ensuring high-quality output for agricultural needs. Our fertilizer plants incorporate mixing, granulation, drying, and coating processes to produce consistent, high-nutrient fertilizers for modern agriculture.",
      keywords: ["fertilizer production", "agricultural equipment", "granulation plant", "NPK production", "soil nutrients"],
      icon: "🌱",
      benefits: ["Consistent quality", "High efficiency", "Low emissions", "Scalable production"]
    },
    { 
      id: 7, 
      title: "Other Factory Machinery", 
      shortDescription: "Custom-engineered machinery solutions tailored to various factory requirements",
      description: "Custom-engineered machinery solutions tailored to various factory requirements and specifications. From custom fabrication to specialized processing equipment, our team designs and builds machinery to meet your unique operational challenges and production goals.",
      keywords: ["custom machinery", "industrial equipment", "fabrication", "specialized equipment", "OEM manufacturing"],
      icon: "🔧",
      benefits: ["Tailored solutions", "Innovation focused", "Quality assured", "Ongoing support"]
    },
    { 
      id: 8, 
      title: "Maintenance", 
      shortDescription: "Professional maintenance services to ensure longevity and peak performance",
      description: "Professional maintenance services to ensure longevity and peak performance of all industrial equipment. Our comprehensive maintenance programs include preventive maintenance, emergency repairs, parts replacement, and performance optimization for all types of industrial machinery.",
      keywords: ["equipment maintenance", "industrial repair", "preventive maintenance", "machine service", "parts replacement"],
      icon: "🛠️",
      benefits: ["24/7 support", "Certified technicians", "Genuine parts", "Extended equipment life"]
    },
  ];

  // Structured data for services (ServiceCollection)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service: Service, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
          "@type": "Organization",
          "name": "S.B.G Manufacturing"
        },
        "areaServed": "Worldwide",
        "category": "Industrial Machinery",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <>
      {/* Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section 
        className="py-20 text-white backdrop-blur-lg" 
        aria-label="Industrial Manufacturing Services"
        itemScope 
        itemType="https://schema.org/Service"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-500/20 blur-[120px] rounded-full -translate-x-1/2 animate-pulse" aria-hidden="true"></div>

        {/* Header */}
        <div className="container mx-auto px-6 text-center mb-20 relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-6 
                         bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                         bg-clip-text text-transparent">
            OUR SERVICES
          </h2>

          <div className="w-40 h-[3px] bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 mx-auto mb-6 animate-pulse" role="presentation" />

          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Precision-engineered industrial solutions built with strength,
            reliability and real-world experience.
          </p>
        </div>

        {/* Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {services.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Categories Footer */}
        <div className="container mx-auto px-6 mt-16 text-center relative z-10">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-yellow-400">Service Categories:</span>{" "}
            {services.map((s: Service) => s.title).join(" • ")}
          </p>
        </div>
      </section>
    </>
  );
}

// ServiceCard component with proper typing
function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div 
      className="group h-[350px]"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <div 
        className="relative w-full h-full transition-transform duration-700"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full 
                     bg-white/10 backdrop-blur-xl 
                     border border-yellow-400/30
                     rounded-2xl p-8 shadow-2xl
                     flex flex-col justify-start
                     transition-transform duration-700
                     group-hover:rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Service Icon/Number */}
          <div className="text-5xl mb-4" aria-hidden="true">
            {service.icon}
          </div>
          
          {/* Service ID - visually hidden for SEO but present */}
          <meta itemProp="serviceId" content={`service-${service.id}`} />
          
          <h3 className="text-xl font-bold text-white uppercase mb-3" itemProp="name">
            {service.title}
          </h3>
          
          {/* Hidden full description for SEO */}
          <div className="hidden" itemProp="description">
            {service.description}
          </div>
          
          {/* Visible short description */}
          <p className="text-sm text-gray-300 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Keywords as hidden meta tags */}
          <div className="hidden">
            {service.keywords.map((keyword: string, idx: number) => (
              <meta key={idx} itemProp="keywords" content={keyword} />
            ))}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full 
                     bg-gradient-to-br from-yellow-500 to-amber-600
                     rounded-2xl p-8 text-black shadow-2xl
                     flex flex-col justify-center
                     transition-transform duration-700"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-lg font-bold mb-3 uppercase">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Benefits list */}
          {service.benefits && (
            <ul className="text-xs space-y-2">
              {service.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-black font-bold">✓</span> 
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Hidden full description for SEO */}
          <div className="hidden" itemProp="description">
            {service.description}
          </div>
        </div>
      </div>
    </div>
  );
}