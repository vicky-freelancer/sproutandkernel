import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sparkles, Filter } from "lucide-react";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { HowToPrepareSection } from "../components/HowToPrepareSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { QuickViewModal } from "../components/QuickViewModal";
import { PRODUCTS } from "../data/products";
import { Product, ProductCategory } from "../types";
import { updatePageTitleAndMeta, generateOrganizationSchema } from "../utils/seo";

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    updatePageTitleAndMeta(
      "SPROUT & KERNEL - 100% Natural Traditional Herbal Soup Powders",
      "Shop 100% natural, sun-dried Tamil herbal soup powders like Moringa, Valaithandu, Mudakathan, Pirandai, Vallarai, Mudavattukkal, Avarampoo, Thuthuvalai & Adathodai online."
    );
  }, []);

  const categories: ProductCategory[] = [
    "All",
    "Leaf-Based",
    "Traditional Mix",
    "Spices & Immunity"
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="space-y-0">
      
      {/* Inject Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateOrganizationSchema() }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Featured Product Grid Section */}
      <section id="shop" className="py-16 bg-white border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Handcrafted Herbal Range
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight mt-2">
                Explore Our Herbal Soup Mixes
              </h2>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-800/20 scale-102"
                    : "bg-slate-100 text-slate-600 hover:bg-emerald-100/60 hover:text-emerald-900"
                }`}
              >
                {cat === "All" ? "All Soups" : cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>

        </div>
      </section>

      {/* How To Prepare Section */}
      <HowToPrepareSection />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Quick View Modal */}
      <QuickViewModal 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />

    </div>
  );
};
