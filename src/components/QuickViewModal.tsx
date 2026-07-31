import React, { useState } from "react";
import { X, Star, MessageCircle, Check, Minus, Plus, Shield, Sparkles } from "lucide-react";
import { Product } from "../types";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppOrderUrl, trackWhatsAppClick } from "../utils/whatsapp";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [activeImg, setActiveImg] = useState(product.image);

  const currentOption = product.availableWeights?.find(opt => opt.weight === selectedWeight);
  const price = currentOption ? currentOption.price : product.price;
  const originalPrice = currentOption ? currentOption.originalPrice : product.originalPrice;
  const totalPrice = price * quantity;

  const handleBuyNow = () => {
    trackWhatsAppClick(product.name, totalPrice, quantity);

    const url = generateWhatsAppOrderUrl({
      product,
      quantity,
      selectedWeight,
      unitPrice: price
    });

    window.open(url, "_blank");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 rounded-full shadow-md backdrop-blur-xs transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-emerald-50/60 p-6 flex flex-col justify-between">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner bg-white mb-4">
            <img
              src={activeImg}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.isBestSeller && (
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Best Seller
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === img ? "border-emerald-600 scale-105" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-red-900 font-serif leading-tight">
              {product.name}
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Pack Size Option */}
            {product.availableWeights && product.availableWeights.length > 1 && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-semibold text-slate-700 block">Select Weight / Pack Size:</label>
                <div className="flex gap-2">
                  {product.availableWeights.map((opt) => (
                    <button
                      key={opt.weight}
                      onClick={() => setSelectedWeight(opt.weight)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
                        selectedWeight === opt.weight
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300"
                      }`}
                    >
                      {opt.weight} ({SITE_CONFIG.currencySymbol}{opt.price})
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-slate-700 block">Select Quantity:</label>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-700 hover:bg-slate-100 shadow-2xs font-bold"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-slate-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-slate-700 hover:bg-slate-100 shadow-2xs font-bold"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-xs text-emerald-800 font-medium">
                  Total: <span className="text-lg font-bold font-serif">{SITE_CONFIG.currencySymbol}{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Order Action */}
          <div className="pt-6 border-t border-slate-100 space-y-2 mt-6">
            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-700/20 active:scale-98 transition-all flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600 group-hover:rotate-12 transition-transform" />
              <span>Buy Now on WhatsApp ({SITE_CONFIG.currencySymbol}{totalPrice})</span>
            </button>
            <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              Direct business chat • Instant availability check
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
