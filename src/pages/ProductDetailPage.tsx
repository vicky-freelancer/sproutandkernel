import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  Star, 
  MessageCircle, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Flame, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  Sparkles,
  Package,
  Share2,
  Copy,
  Check
} from "lucide-react";
import { PRODUCTS, REVIEWS } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { generateWhatsAppOrderUrl, trackWhatsAppClick, getAbsoluteImageUrl } from "../utils/whatsapp";
import { SITE_CONFIG } from "../config/siteConfig";
import { updatePageTitleAndMeta, generateProductSchema } from "../utils/seo";

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product?.weight || "");
  const [activeImage, setActiveImage] = useState(product?.image || "");
  const [copiedLink, setCopiedLink] = useState(false);
  const [customNote, setCustomNote] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedWeight(product.weight);
      setActiveImage(product.image);
      setQuantity(1);
      updatePageTitleAndMeta(
        `${product.name} - Buy Online on WhatsApp`,
        product.shortDescription
      );
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="py-20 bg-amber-50/50 min-h-[70vh] flex items-center justify-center text-center px-4">
        <div className="max-w-md bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl space-y-4">
          <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <h2 className="text-2xl font-bold font-serif text-slate-900">Product Not Found</h2>
          <p className="text-xs text-slate-600">
            The requested herbal soup product does not exist or may have been updated.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shop Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  // Calculate pricing
  const currentOption = product.availableWeights?.find((opt) => opt.weight === selectedWeight);
  const price = currentOption ? currentOption.price : product.price;
  const originalPrice = currentOption ? currentOption.originalPrice : product.originalPrice;
  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const totalPrice = price * quantity;

  // WhatsApp click handler
  const handleBuyNow = () => {
    trackWhatsAppClick(product.name, totalPrice, quantity);

    const url = generateWhatsAppOrderUrl({
      product,
      quantity,
      selectedWeight,
      unitPrice: price,
      customNote
    });

    window.open(url, "_blank");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 4);

  // Product specific reviews
  const productReviews = REVIEWS.filter((r) => r.productSlug === product.slug);

  const absoluteImgUrl = getAbsoluteImageUrl(product.image);

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateProductSchema(product) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/shop" className="hover:text-emerald-800 transition-colors">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-emerald-800 transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-emerald-950 font-bold truncate">{product.name}</span>
        </nav>

        {/* Main Product Grid: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 sm:aspect-square bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-xl group">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isBestSeller && (
                  <span className="bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Best Seller
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="bg-rose-600 text-white font-bold text-xs px-3 py-1 rounded-lg shadow-md">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Share link button */}
              <button
                onClick={handleCopyLink}
                className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-slate-700 rounded-xl shadow-md transition-all backdrop-blur-xs"
                title="Copy Product Link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Thumbnail selector */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === imgUrl ? "border-emerald-700 scale-102 shadow-md" : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-center">
              <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-2xs space-y-1">
                <ShieldCheck className="w-5 h-5 text-emerald-700 mx-auto" />
                <p className="text-[11px] font-bold text-slate-800">100% Pure</p>
                <p className="text-[10px] text-slate-500">No Preservatives</p>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-2xs space-y-1">
                <Truck className="w-5 h-5 text-emerald-700 mx-auto" />
                <p className="text-[11px] font-bold text-slate-800">Fast Shipping</p>
                <p className="text-[10px] text-slate-500">Pan-India Courier</p>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-emerald-100 shadow-2xs space-y-1">
                <MessageCircle className="w-5 h-5 text-emerald-700 mx-auto" />
                <p className="text-[11px] font-bold text-slate-800">Direct Chat</p>
                <p className="text-[10px] text-slate-500">WhatsApp Order</p>
              </div>
            </div>

          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-xl space-y-6">
            
            {/* Header Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-md">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal">({product.reviewCount} customer reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-medium block">Price for {selectedWeight}:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-serif text-emerald-950">
                    {SITE_CONFIG.currencySymbol}{price}
                  </span>
                  {originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {SITE_CONFIG.currencySymbol}{originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  {product.stockStatus}
                </span>
                <p className="text-[10px] text-slate-500 mt-1">Dispatched in 24 hours</p>
              </div>
            </div>

            {/* Weight Pack Selector */}
            {product.availableWeights && product.availableWeights.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Select Pack Size:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.availableWeights.map((opt) => (
                    <button
                      key={opt.weight}
                      onClick={() => setSelectedWeight(opt.weight)}
                      className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
                        selectedWeight === opt.weight
                          ? "bg-emerald-800 text-white border-emerald-800 shadow-md scale-102"
                          : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300"
                      }`}
                    >
                      {opt.weight} • {SITE_CONFIG.currencySymbol}{opt.price}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Quantity:
              </label>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-800 hover:bg-slate-100 shadow-2xs font-bold"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-bold text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-slate-800 hover:bg-slate-100 shadow-2xs font-bold"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-sm text-slate-600 font-medium">
                  Total Amount: <span className="text-xl font-bold font-serif text-emerald-950">{SITE_CONFIG.currencySymbol}{totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Custom Notes */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-500 block">
                Delivery Note / Customization (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Please send mild spicy option / delivery prefer morning..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            {/* Prominent Buy Now on WhatsApp CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleBuyNow}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-base shadow-xl shadow-emerald-600/25 active:scale-98 transition-all flex items-center justify-center gap-3 group border border-emerald-500"
              >
                <MessageCircle className="w-6 h-6 fill-emerald-100 text-emerald-600 group-hover:rotate-12 transition-transform" />
                <span>Buy Now on WhatsApp ({SITE_CONFIG.currencySymbol}{totalPrice})</span>
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                Order directly through WhatsApp • No login or credit card required
              </p>
            </div>

            {/* Live Message Preview Box */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1 text-slate-600 font-mono">
              <p className="text-[10px] font-bold text-emerald-800 uppercase font-sans tracking-wider mb-1">
                💬 WhatsApp Pre-filled Order Message Preview:
              </p>
              <p className="whitespace-pre-line text-[11px] text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/80">
                Hello {SITE_CONFIG.brandName}, I would like to order:{"\n"}
                Product: {product.name}{"\n"}
                Weight: {selectedWeight}{"\n"}
                Quantity: {quantity}{"\n"}
                Total Price: {SITE_CONFIG.currencySymbol}{totalPrice}{"\n"}
                Image Ref: {absoluteImgUrl}
              </p>
            </div>

          </div>

        </div>

        {/* Extended Product Tabs / Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          
          {/* Key Benefits */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold font-serif text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Health Benefits</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingredients & Prep */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold font-serif text-lg">
              <Flame className="w-5 h-5 text-emerald-700" />
              <h3>Ingredients & Prep</h3>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">Ingredients:</p>
              <p className="text-slate-600 leading-relaxed">{product.ingredients.join(", ")}.</p>
              <div className="pt-2">
                <p className="font-semibold text-slate-900">Preparation:</p>
                <p className="text-slate-600 leading-relaxed">{product.preparation}</p>
              </div>
            </div>
          </div>

          {/* Storage & Shelf Life */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold font-serif text-lg">
              <Package className="w-5 h-5 text-emerald-700" />
              <h3>Storage & Quality</h3>
            </div>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p><strong className="text-slate-900">Storage:</strong> {product.storage}</p>
              <p><strong className="text-slate-900">Shelf Life:</strong> 9 Months from date of manufacture.</p>
              <p><strong className="text-slate-900">Quality Guarantee:</strong> 100% natural herbs, solar dried, hygienically packed.</p>
            </div>
          </div>

        </div>

        {/* Customer Reviews for this product */}
        {productReviews.length > 0 && (
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 space-y-6">
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Customer Reviews for {product.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productReviews.map((rev) => (
                <div key={rev.id} className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{rev.userName} ({rev.userLocation})</span>
                    <div className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-bold font-serif text-slate-900">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
