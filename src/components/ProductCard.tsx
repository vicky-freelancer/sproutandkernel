import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MessageCircle, 
  Eye, 
  Tag, 
  Check, 
  Sparkles,
  ShoppingBag
} from "lucide-react";
import { Product } from "../types";
import { generateWhatsAppOrderUrl, trackWhatsAppClick } from "../utils/whatsapp";
import { SITE_CONFIG } from "../config/siteConfig";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [imageError, setImageError] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);

  // Find current price based on weight selection
  const currentOption = product.availableWeights?.find(opt => opt.weight === selectedWeight);
  const price = currentOption ? currentOption.price : product.price;
  const originalPrice = currentOption ? currentOption.originalPrice : product.originalPrice;

  const discountPercent = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  const handleBuyNowWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // 1. Track Analytics
    trackWhatsAppClick(product.name, price, 1);

    // 2. Generate WhatsApp URL
    const url = generateWhatsAppOrderUrl({
      product,
      quantity: 1,
      selectedWeight: selectedWeight,
      unitPrice: price
    });

    // 3. Open in new tab
    window.open(url, "_blank");
  };

  const fallbackImage = "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group bg-white rounded-2xl border-4 border-emerald-700 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden relative">
      
      {/* Card Header & Image */}
      <div>
        <div className="relative aspect-4/3 bg-emerald-50/50 overflow-hidden">
          {/* Image */}
          <img
            src={imageError ? fallbackImage : product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 items-start">
            {product.isBestSeller && (
              <span className="bg-amber-500 text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Best Seller
              </span>
            )}
            {product.isCombo && (
              <span className="bg-emerald-800 text-emerald-100 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-xs">
                Value Combo
              </span>
            )}
            {discountPercent > 0 && (
              <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Quick View Button Overlay */}
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-700 hover:text-emerald-800 p-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              title="Quick View Details"
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-2.5">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-medium text-[11px] border border-emerald-100">
              {product.category}
            </span>
            <div className="flex items-center gap-1 font-semibold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/product/${product.slug}`} className="block group-hover:text-emerald-700 transition-colors">
            <h3 className="font-bold text-red-900 text-base leading-snug line-clamp-1 font-serif">
              {product.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Ingredients Preview */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {product.ingredients.slice(0, 3).map((ing, i) => (
                <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                  {ing.replace(/\(.*?\)/g, '')}
                </span>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-[10px] text-slate-400">+{product.ingredients.length - 3} more</span>
              )}
            </div>
          )}

          {/* Weight Variant Selector if available */}
          {product.availableWeights && product.availableWeights.length > 1 && (
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[11px] text-slate-400 font-medium">Pack:</span>
              <div className="flex gap-1">
                {product.availableWeights.map((opt) => (
                  <button
                    key={opt.weight}
                    onClick={() => setSelectedWeight(opt.weight)}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded-md border transition-all ${
                      selectedWeight === opt.weight
                        ? "bg-emerald-700 text-white border-emerald-700 shadow-2xs"
                        : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    {opt.weight}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Price & Buy Button */}
      <div className="p-4 pt-2 border-t border-slate-100 space-y-3 bg-slate-50/50">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Price ({selectedWeight})</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-emerald-950 font-serif">
                {SITE_CONFIG.currencySymbol}{price}
              </span>
              {originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {SITE_CONFIG.currencySymbol}{originalPrice}
                </span>
              )}
            </div>
          </div>

          <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Check className="w-3 h-3" /> In Stock
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-5 gap-2">
          {/* Detail Link */}
          <Link
            to={`/product/${product.slug}`}
            className="col-span-2 py-2.5 px-2 bg-white text-emerald-800 border border-emerald-300 rounded-xl font-medium text-xs text-center hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </Link>

          {/* Buy Now on WhatsApp Primary CTA */}
          <button
            onClick={handleBuyNowWhatsApp}
            className="col-span-3 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs transition-all shadow-md shadow-emerald-700/20 active:scale-95 flex items-center justify-center gap-1.5 group/btn"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600 group-hover/btn:rotate-12 transition-transform" />
            <span>Buy on WhatsApp</span>
          </button>
        </div>
      </div>

    </div>
  );
};
