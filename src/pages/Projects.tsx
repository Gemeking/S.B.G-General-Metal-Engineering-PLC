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
      category: "Crusher Plants",
      types: [
        {
          typeName: "Primary With Secondary",
          products: [
            {
              name: "28 T/h Compact Series",
              description: "Compact and efficient crushing solution for small-scale operations, delivering consistent performance with minimal maintenance requirements.",
              features: ["28 Tons/Hour Capacity", "Low Power Consumption", "Compact Design", "Easy Installation", "Reliable Performance"],
              images: [
                "28th/photo_2026-03-02_18-11-58.jpg",
                "28th/photo_2026-03-02_18-12-08.jpg",
                "28th/photo_2026-02-23_17-48-01.jpg",
              ],
            },
            {
              name: "60 T/h Standard Line",
              description: "Medium-capacity crushing plant ideal for construction projects and aggregate production with balanced efficiency.",
              features: ["60 Tons/Hour Capacity", "Optimized Fuel Efficiency", "Modular Design", "Quick Setup", "Low Operating Costs"],
              images: [
                "P-and-S-60th/photo_2026-02-23_17-50-59.jpg",
                "P-and-S-60th/photo_2026-02-23_17-51-08.jpg",
                "P-and-S-60th/photo_2026-02-23_17-51-12.jpg",
              ],
            },
            {
              name: "80 T/h Performance Plus",
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
              name: "150 T/h Industrial Series",
              description: "High-capacity industrial crushing plant engineered for continuous operation in demanding environments.",
              features: ["150 Tons/Hour Capacity", "Automated Operations", "Heavy-Duty Construction", "Energy Efficient", "Minimal Downtime"],
              images: [
                "P-and-S-150th/photo_2026-03-02_18-14-44.jpg",
                "P-and-S-150th/photo_2026-03-02_18-14-34.jpg",
                "P-and-S-150th/photo_2026-03-02_18-09-58.jpg",
                "P-and-S-150th/photo_1_2026-02-23_17-46-01.jpg",
                "P-and-S-150th/photo_2_2026-02-23_17-46-01.jpg",
              ],
            },
            {
              name: "250 T/h Heavy Duty",
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
              name: "150 T/h Eco Series",
              description: "Next-generation crushing technology delivering exceptional performance with reduced environmental impact.",
              features: ["150 Tons/Hour Capacity", "Eco-Friendly Design", "Smart Controls", "Reduced Emissions", "Optimized Power Usage"],
              images: [
                "High-Efficiency-150th/photo_2026-02-23_17-50-16.jpg",
                "High-Efficiency-150th/photo_2026-02-23_17-50-26.jpg",
                "High-Efficiency-150th/photo_2026-02-23_17-50-30.jpg",
              ],
            },
            {
              name: "250 T/h Premium Line",
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
      category: "Equipment & Accessories",
      types: [
        {
          typeName: "Crushing Equipment",
          products: [
            {
              name: "Jaw Crusher Series",
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
              name: "Impact Crusher Series",
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
  // STATE MANAGEMENT
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
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Get all products for search
  const allProducts = projectData.flatMap(category => 
    category.types.flatMap(type => 
      type.products.map(product => ({
        ...product,
        category: category.category,
        type: type.typeName
      }))
    )
  );

  // Filter products based on search
  const filteredProducts = searchQuery.trim() === "" 
    ? selectedType.products 
    : allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  // Type guard to check if product has specifications
  const hasSpecifications = (product: Product): product is ProductWithSpecs => {
    return 'specifications' in product;
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImageViewerOpen) {
        setIsImageViewerOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen  to-black text-white"
      >
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 -left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
          />
          {/* Simple dot pattern instead of complex SVG */}
          <div className="absolute inset-0 bg-black opacity-20" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,215,0,0.15) 1px, transparent 0)',
                 backgroundSize: '40px 40px'
               }}>
          </div>
        </div>

        {/* Main Content */}
        <div ref={galleryRef} className="relative z-10 max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-7xl md:text-8xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                PROJECT
              </span>
              
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explore our comprehensive collection of industrial crushing solutions, 
              each engineered for peak performance in the most demanding environments.
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, features, or specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-white/5 backdrop-blur-xl border border-yellow-400/30 
                         rounded-2xl text-white placeholder-gray-400 focus:outline-none 
                         focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 
                         transition-all duration-300"
              />
              <svg 
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {projectData.map((cat, index) => (
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
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 
                         backdrop-blur-xl border-2 relative overflow-hidden group
                         ${selectedCategory.category === cat.category
                           ? "border-yellow-400 text-yellow-400 shadow-lg shadow-yellow-400/30"
                           : "border-yellow-400/30 text-gray-300 hover:border-yellow-400/60"
                         }`}
              >
                <span className="relative z-10">{cat.category}</span>
                {selectedCategory.category === cat.category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-yellow-400/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Type Selector */}
          {!searchQuery && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
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
                  className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden
                           ${selectedType.typeName === type.typeName
                             ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-lg"
                             : "bg-white/5 border border-yellow-400/30 hover:bg-yellow-500/20 text-gray-400"
                           }`}
                >
                  {type.typeName}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Gallery Grid */}
          <motion.div
            layout
            className={`grid gap-8 ${
              isGridView 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProduct(product.name)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveImage(product.images[0]);
                    setIsGridView(false);
                    setTimeout(() => {
                      document.getElementById('product-detail')?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }, 100);
                  }}
                  className="group cursor-pointer bg-white/5 backdrop-blur-xl rounded-2xl 
                           overflow-hidden border border-yellow-400/20 hover:border-yellow-400/60 
                           transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.3)]"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video">
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Image Overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProduct === product.name ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    />
                    
                    {/* Category Tags */}
                    {'category' in product && (
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-yellow-400/90 text-black text-xs font-semibold 
                                       rounded-full backdrop-blur-sm">
                          {(product as any).category}
                        </span>
                        <span className="px-3 py-1 bg-black/50 text-yellow-400 text-xs font-semibold 
                                       rounded-full backdrop-blur-sm border border-yellow-400/30">
                          {(product as any).type}
                        </span>
                      </div>
                    )}
                    
                    {/* Image Count */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-yellow-400 
                                  text-xs font-semibold rounded-full backdrop-blur-sm 
                                  border border-yellow-400/30 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {product.images.length}
                    </div>
                    
                    {/* Quick View Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredProduct === product.name ? 1 : 0,
                        y: hoveredProduct === product.name ? 0 : 20
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                               bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold 
                               text-sm shadow-lg flex items-center gap-2"
                    >
                      <span>Quick View</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-400 
                                   transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-xs text-gray-300 
                                                 rounded-full border border-yellow-400/20">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="px-2 py-1 text-xs text-yellow-400">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Explore Link */}
                    <motion.div 
                      className="flex items-center text-yellow-400 text-sm font-semibold group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span>Explore Project</span>
                      <motion.svg 
                        className="w-4 h-4 ml-1"
                        animate={{ x: hoveredProduct === product.name ? 5 : 0 }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Product Detail View */}
          {!isGridView && (
            <motion.div
              id="product-detail"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="mt-20 relative"
            >
              {/* Back Button */}
              <motion.button
                whileHover={{ x: -5 }}
                onClick={() => setIsGridView(true)}
                className="mb-8 flex items-center text-yellow-400 hover:text-yellow-300 
                         transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Gallery
              </motion.button>

              {/* Detail Card */}
              <motion.div
                layoutId={selectedProduct.name}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl 
                         border border-yellow-400/20 rounded-3xl overflow-hidden"
              >
                {/* Header */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src={activeImage}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h2 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl font-bold text-white mb-2"
                    >
                      {selectedProduct.name}
                    </motion.h2>
                    <motion.div 
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-2"
                    >
                      <span className="px-4 py-2 bg-yellow-400 text-black rounded-full 
                                     text-sm font-semibold">
                        {selectedCategory.category}
                      </span>
                      <span className="px-4 py-2 bg-white/10 text-yellow-400 rounded-full 
                                     text-sm font-semibold border border-yellow-400/30">
                        {selectedType.typeName}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Thumbnail Strip */}
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-thin 
                             scrollbar-thumb-yellow-400/30"
                  >
                    {selectedProduct.images.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setActiveImage(img);
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-24 h-24 object-cover rounded-xl cursor-pointer 
                                  transition-all duration-300 flex-shrink-0
                                  ${activeImage === img 
                                    ? 'border-4 border-yellow-400 shadow-lg shadow-yellow-400/30 scale-110' 
                                    : 'border-2 border-yellow-400/20 hover:border-yellow-400/60'}`}
                      />
                    ))}
                    
                    {/* View All Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openImageViewer(0)}
                      className="w-24 h-24 rounded-xl bg-gradient-to-br from-yellow-400/20 
                               to-amber-500/20 border-2 border-yellow-400/30 flex-shrink-0
                               flex flex-col items-center justify-center gap-1 
                               hover:border-yellow-400/60 transition-colors group"
                    >
                      <svg className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span className="text-xs text-yellow-400 font-semibold">
                        View All
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-yellow-400"></span>
                      Description
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg pl-10">
                      {selectedProduct.description}
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-yellow-400"></span>
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pl-10">
                      {selectedProduct.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                          className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg 
                                   border border-yellow-400/20 hover:border-yellow-400/40 
                                   hover:bg-white/10 transition-all duration-300 group"
                        >
                          <span className="text-yellow-400 text-xl group-hover:scale-110 
                                         transition-transform">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Specifications */}
                  {hasSpecifications(selectedProduct) && (
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-yellow-400"></span>
                        Technical Specifications
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 pl-10">
                        {selectedProduct.specifications.map((spec: Specification, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + idx * 0.05 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="bg-gradient-to-r from-white/5 to-white/10 p-4 
                                     rounded-lg border border-yellow-400/20 
                                     hover:border-yellow-400/40 transition-all duration-300"
                          >
                            <div className="text-yellow-300 font-semibold text-lg">
                              {spec.model}
                            </div>
                            <div className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                              Capacity: {spec.capacity}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {isImageViewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{
                background: 'rgba(0, 0, 0, 0.98)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsImageViewerOpen(false)}
                  className="absolute top-8 right-8 text-white hover:text-yellow-400 
                           transition-colors z-50 bg-black/50 rounded-full p-3 
                           backdrop-blur-sm border border-white/20 hover:border-yellow-400/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Main Image */}
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-7xl mx-auto px-4"
                >
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={`${selectedProduct.name} - View ${currentImageIndex + 1}`}
                    className="max-h-[85vh] max-w-full object-contain rounded-lg 
                             shadow-2xl shadow-yellow-500/10"
                  />
                </motion.div>

                {/* Navigation */}
                {selectedProduct.images.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-8 top-1/2 transform -translate-y-1/2 
                               bg-black/50 hover:bg-yellow-500 text-white rounded-full p-4 
                               transition-all duration-300 backdrop-blur-sm border border-white/20
                               hover:border-yellow-400/50 group"
                    >
                      <svg className="w-6 h-6 group-hover:text-black transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-8 top-1/2 transform -translate-y-1/2 
                               bg-black/50 hover:bg-yellow-500 text-white rounded-full p-4 
                               transition-all duration-300 backdrop-blur-sm border border-white/20
                               hover:border-yellow-400/50 group"
                    >
                      <svg className="w-6 h-6 group-hover:text-black transition-colors" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}

                {/* Image Info */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                            bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm
                            border border-white/20 font-semibold flex items-center gap-4"
                >
                  <span className="text-yellow-400">
                    {currentImageIndex + 1} / {selectedProduct.images.length}
                  </span>
                  <span className="w-px h-4 bg-white/20"></span>
                  <span className="text-gray-300">{selectedProduct.name}</span>
                </motion.div>

                {/* Thumbnail Strip */}
                {selectedProduct.images.length > 1 && (
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-28 left-1/2 transform -translate-x-1/2 
                              flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl
                              border border-white/10"
                  >
                    {selectedProduct.images.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer 
                                  transition-all duration-300 border-2
                                  ${currentImageIndex === idx 
                                    ? 'border-yellow-400 scale-110 shadow-lg shadow-yellow-400/30' 
                                    : 'border-transparent hover:border-yellow-400/50'}`}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Layout>
  );
}