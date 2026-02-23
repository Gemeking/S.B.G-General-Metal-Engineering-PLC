import { useState, useEffect, useRef } from "react";
import Layout from "../components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";

// Define TypeScript interfaces
interface Specification {
  model: string;
  capacity: string;
}

interface BaseProduct {
  name: string;
  description: string;
  features: string[];
  images: string[];
}

interface ProductWithSpecs extends BaseProduct {
  specifications: Specification[];
}

type Product = BaseProduct | ProductWithSpecs;

interface Type {
  typeName: string;
  products: Product[];
}

interface Category {
  category: string;
  types: Type[];
}

export default function Projects() {
  // ================================
  // PROJECT DATA (YOU EDIT THIS ONLY)
  // ================================
  const projectData: Category[] = [
    {
      category: "Crusher Plants Category",
      types: [
        {
          typeName: "Primary With Secondary",
          products: [
            {
              name: "28 T/h",
              description: "Compact and efficient crushing solution for small-scale operations, delivering consistent performance with minimal maintenance requirements.",
              features: ["28 Tons/Hour Capacity", "Low Power Consumption", "Compact Design", "Easy Installation", "Reliable Performance"],
              images: [
                "28th/photo_2026-02-23_17-48-01.jpg",
              ],
            },
            {
              name: "60 T/h",
              description: "Medium-capacity crushing plant ideal for construction projects and aggregate production with balanced efficiency.",
              features: ["60 Tons/Hour Capacity", "Optimized Fuel Efficiency", "Modular Design", "Quick Setup", "Low Operating Costs"],
              images: [
                "P-and-S-60th/photo_2026-02-23_17-50-59.jpg",
                "P-and-S-60th/photo_2026-02-23_17-51-08.jpg",
                "P-and-S-60th/photo_2026-02-23_17-51-12.jpg",
              ],
            },
            {
              name: "80 T/h",
              description: "Versatile crushing system designed for medium to large projects, offering enhanced productivity and superior output quality.",
              features: ["80 Tons/Hour Capacity", "Advanced Control System", "Durable Components", "High Reduction Ratio", "Consistent Output"],
              images: [
                "P-and-S-80th/photo_2026-02-23_17-48-35.jpg",
                "P-and-S-80th/photo_2026-02-23_17-48-44.jpg",
                "P-and-S-80th/photo_2026-02-23_17-48-49.jpg",
                "P-and-S-80th/photo_2026-02-23_17-48-52.jpg",
              ],
            },
            {
              name: "150 T/h",
              description: "High-capacity industrial crushing plant engineered for continuous operation in demanding environments.",
              features: ["150 Tons/Hour Capacity", "Automated Operations", "Heavy-Duty Construction", "Energy Efficient", "Minimal Downtime"],
              images: [
                "P-and-S-150th/photo_1_2026-02-23_17-46-01.jpg",
                "P-and-S-150th/photo_2_2026-02-23_17-46-01.jpg",
              ],
            },
            {
              name: "250 T/h",
              description: "Large-scale crushing solution for major infrastructure projects, featuring advanced technology and maximum throughput.",
              features: ["250 Tons/Hour Capacity", "Smart Monitoring", "Premium Components", "Maximum Efficiency", "Long Service Life"],
              images: [
                "P-and-S-250th/photo_1_2026-02-23_17-44-29.jpg",
                "P-and-S-250th/photo_2_2026-02-23_17-44-29.jpg",
                "P-and-S-250th/photo_3_2026-02-23_17-44-29.jpg",
                "P-and-S-250th/photo_4_2026-02-23_17-44-29.jpg",
                "P-and-S-250th/photo_5_2026-02-23_17-44-29.jpg",
                "P-and-S-250th/photo_2026-02-23_17-43-53.jpg",
              ],
            },
          ],
        },
        {
          typeName: "High Efficiency",
          products: [
            {
              name: "150 T/h",
              description: "Next-generation crushing technology delivering exceptional performance with reduced environmental impact.",
              features: ["150 Tons/Hour Capacity", "Eco-Friendly Design", "Smart Controls", "Reduced Emissions", "Optimized Power Usage"],
              images: [
                "High-Efficiency-150th/photo_2026-02-23_17-50-16.jpg",
                "High-Efficiency-150th/photo_2026-02-23_17-50-26.jpg",
                "High-Efficiency-150th/photo_2026-02-23_17-50-30.jpg",
              ],
            },
            {
              name: "250 T/h",
              description: "Premium efficiency crushing system with state-of-the-art technology for maximum productivity.",
              features: ["250 Tons/Hour Capacity", "AI-Optimized Operations", "Predictive Maintenance", "Real-Time Analytics", "Industry 4.0 Ready"],
              images: [
                "High-Efficiency-250th/photo_2026-02-23_17-49-10.jpg",
                "High-Efficiency-250th/photo_2026-02-23_17-49-21.jpg",
                "High-Efficiency-250th/photo_2026-02-23_17-49-26.jpg",
                "High-Efficiency-250th/photo_2026-02-23_17-49-29.jpg",
                "High-Efficiency-250th/photo_2026-02-23_17-49-33.jpg",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Crusher Plant Accessories",
      types: [
        {
          typeName: "Crushing Equipment",
          products: [
            {
              name: "Jaw Crusher",
              description: "Heavy-duty primary crushing machine designed for breaking large rocks and hard materials into smaller sizes. Ideal for mining, quarrying, and aggregate production.",
              features: [
                "Primary Crushing",
                "High Efficiency",
                "Strong Steel Frame",
                "Low Maintenance",
                "Suitable for Hard Rock"
              ],
              specifications: [
                { model: "PE-400 x 600", capacity: "16–60 t/h" },
                { model: "PE-500 x 750", capacity: "40–110 t/h" },
                { model: "PE-600 x 900", capacity: "50–180 t/h" },
                { model: "PE-750 x 1060", capacity: "110–320 t/h" },
                { model: "PEX-250 x 1000", capacity: "16–52 t/h" },
                { model: "PEX-250 x 1200", capacity: "20–61 t/h" }
              ],
              images: [
                "/jaw/jaw-crusher.jpg",
              ]
            },
            {
              name: "Impact Crusher",
              description: "High-performance secondary and tertiary crushing equipment designed for processing medium to hard materials with high reduction ratios and excellent particle shape.",
              features: [
                "Secondary & Tertiary Crushing",
                "High Reduction Ratio",
                "Uniform Product Shape",
                "Adjustable Output Size",
                "Energy Efficient"
              ],
              specifications: [
                { model: "PF-1007", capacity: "30–70 t/h" },
                { model: "PF-1010", capacity: "50–90 t/h" },
                { model: "PF-1210", capacity: "70–130 t/h" },
                { model: "PF-1214", capacity: "100–180 t/h" },
                { model: "PF-1315", capacity: "130–250 t/h" }
              ],
              images: [
                "/impact/IMPACT-CRUSHER-1.jpg",
              ]
            }
          ],
        },
      ],
    },
  ];

  // ================================
  // STATE WITH PROPER TYPING
  // ================================
  const [selectedCategory, setSelectedCategory] = useState<Category>(projectData[0]);
  const [selectedType, setSelectedType] = useState<Type>(projectData[0].types[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    projectData[0].types[0].products[0]
  );
  const [activeImage, setActiveImage] = useState<string>(
    projectData[0].types[0].products[0].images[0]
  );
  const [isImageViewerOpen, setIsImageViewerOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Type guard to check if product has specifications
  const hasSpecifications = (product: Product): product is ProductWithSpecs => {
    return 'specifications' in product;
  };

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const element = sectionRef.current;
        const totalScroll = element.scrollHeight - element.clientHeight;
        const currentProgress = (element.scrollTop / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    const currentRef = sectionRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageViewerOpen) {
        setIsImageViewerOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Prevent body scroll when modal is open
    if (isImageViewerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isImageViewerOpen]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsImageViewerOpen(false);
      }
    };

    if (isImageViewerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isImageViewerOpen]);

  // Image viewer navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageViewerOpen(true);
  };

  return (
    <Layout>
      <motion.section 
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen text-white relative overflow-y-auto scroll-smooth"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
        }}
      >
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-full blur-[150px]"></div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 z-50 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* HEADER with Animation */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-wider
                           bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                           bg-clip-text text-transparent mb-4">
              OUR PROJECTS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of industrial crushing solutions, 
              engineered for maximum efficiency and reliability in the most demanding environments.
            </p>
          </motion.div>

          {/* CATEGORY SELECTOR with Floating Animation */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectData.map((cat) => (
              <motion.button
                key={cat.category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedType(cat.types[0]);
                  setSelectedProduct(cat.types[0].products[0]);
                  setActiveImage(cat.types[0].products[0].images[0]);
                }}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 
                shadow-lg backdrop-blur-sm
                ${
                  selectedCategory.category === cat.category
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-yellow-500/50"
                    : "bg-white/5 border border-yellow-400/30 hover:bg-yellow-500/20 text-gray-300"
                }`}
              >
                {cat.category}
              </motion.button>
            ))}
          </motion.div>

          {/* TYPE SELECTOR with Stagger Animation */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {selectedCategory.types.map((type, index) => (
              <motion.button
                key={type.typeName}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedType(type);
                  setSelectedProduct(type.products[0]);
                  setActiveImage(type.products[0].images[0]);
                }}
                className={`px-6 py-3 rounded-full transition-all duration-300
                ${
                  selectedType.typeName === type.typeName
                    ? "bg-yellow-400 text-black font-semibold shadow-lg shadow-yellow-400/30"
                    : "bg-white/5 border border-yellow-400/30 hover:bg-yellow-500/20 text-gray-400"
                }`}
              >
                {type.typeName || "All Equipment"}
              </motion.button>
            ))}
          </motion.div>

          {/* PRODUCT CARDS with Grid Animation */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            <AnimatePresence mode="wait">
              {selectedType.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveImage(product.images[0]);
                    // Smooth scroll to detail view
                    setTimeout(() => {
                      document.getElementById('product-detail')?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }, 100);
                  }}
                  className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-yellow-400/20 
                           rounded-2xl p-8 hover:border-yellow-400/60 transition-all duration-500
                           hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.5)]"
                >
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <motion.img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-3 group-hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <motion.div 
                    className="mt-4 flex items-center text-yellow-400 text-sm font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    View Details →
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* PRODUCT DETAIL VIEW with Parallax Effect */}
          <motion.div 
            id="product-detail"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 
                     shadow-2xl hover:border-yellow-400/40 transition-all duration-500
                     relative overflow-hidden group"
          >
            {/* Background Glow Effect */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] 
                          group-hover:bg-yellow-500/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              {/* Title with Badge */}
              <div className="flex items-center justify-between mb-8">
                <motion.h2 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 
                           bg-clip-text text-transparent"
                >
                  {selectedProduct.name}
                </motion.h2>
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full"
                >
                  <span className="text-yellow-400 font-semibold">
                    {selectedProduct.images.length} {selectedProduct.images.length === 1 ? 'Image' : 'Images'}
                  </span>
                </motion.div>
              </div>

              {/* MAIN IMAGE with Zoom Effect */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative mb-8 rounded-2xl overflow-hidden group/image cursor-pointer"
                onClick={() => openImageViewer(selectedProduct.images.indexOf(activeImage))}
              >
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={selectedProduct.name}
                  className="w-full h-[500px] object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transform 
                                scale-90 group-hover/image:scale-100 transition-transform duration-300">
                    🔍 Click to Zoom
                  </div>
                </div>
              </motion.div>

              {/* THUMBNAILS with Carousel Effect */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-yellow-400/30"
              >
                {selectedProduct.images.map((img, index) => (
                  <motion.img
                    key={img}
                    src={img}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(img)}
                    className={`w-28 h-28 object-cover rounded-xl cursor-pointer transition-all duration-300
                              ${activeImage === img 
                                ? 'border-4 border-yellow-400 shadow-lg shadow-yellow-400/30' 
                                : 'border-2 border-yellow-400/20 hover:border-yellow-400/60'}`}
                  />
                ))}
              </motion.div>

              {/* DESCRIPTION with Typing Animation */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProduct.description}
                </p>
              </motion.div>

              {/* FEATURES Grid */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProduct.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg 
                               border border-yellow-400/20 hover:border-yellow-400/40 
                               hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-yellow-400 text-xl">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SPECIFICATIONS if available */}
              {hasSpecifications(selectedProduct) && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProduct.specifications.map((spec: Specification, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 p-4 rounded-lg border border-yellow-400/20"
                      >
                        <div className="text-yellow-300 font-semibold">{spec.model}</div>
                        <div className="text-gray-400 text-sm mt-1">Capacity: {spec.capacity}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Fullscreen Image Viewer Modal */}
        <AnimatePresence>
          {isImageViewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Modal Content */}
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-7xl w-full mx-4"
              >
                {/* Close Button - X */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsImageViewerOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-400 
                           transition-colors z-50 bg-black/50 rounded-full p-2 
                           backdrop-blur-sm border border-white/20 hover:border-yellow-400/50"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Main Image */}
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={`${selectedProduct.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-[80vh] object-contain rounded-lg"
                  />
                </motion.div>

                {/* Navigation Arrows */}
                {selectedProduct.images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 
                               bg-black/50 hover:bg-yellow-500 text-white rounded-full p-4 
                               transition-all duration-300 backdrop-blur-sm border border-white/20
                               hover:border-yellow-400/50 group"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 
                               bg-black/50 hover:bg-yellow-500 text-white rounded-full p-4 
                               transition-all duration-300 backdrop-blur-sm border border-white/20
                               hover:border-yellow-400/50 group"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                            bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm
                            border border-white/20 font-semibold"
                >
                  {currentImageIndex + 1} / {selectedProduct.images.length}
                </motion.div>

                {/* Thumbnail Strip */}
                {selectedProduct.images.length > 1 && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 
                              flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl
                              border border-white/10"
                  >
                    {selectedProduct.images.map((img, index) => (
                      <motion.img
                        key={img}
                        src={img}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer 
                                  transition-all duration-300 border-2
                                  ${currentImageIndex === index 
                                    ? 'border-yellow-400 scale-110' 
                                    : 'border-transparent hover:border-yellow-400/50'}`}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>

              {/* Click anywhere outside to close (handled by the modal's container click) */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </Layout>
  );
}