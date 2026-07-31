import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Leaf, 
  Menu, 
  X, 
  Search, 
  MessageCircle, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "How To Prepare", path: "/#prepare" },
    { name: "Contact", path: "/contact" },
  ];

  const generalWhatsAppUrl = generateWhatsAppGeneralInquiryUrl("வணக்கம் SPROUT & KERNEL, நான் பாரம்பரிய மூலிகை சூப் பொடிகள் ஆர்டர் செய்ய விரும்புகிறேன்.");

  return (
    <>
      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 bg-amber-50/95 backdrop-blur-md border-b ${
          isScrolled 
            ? "shadow-md py-2.5 border-emerald-200/80" 
            : "py-4 border-amber-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <img 
                src="/SK Logo.png" 
                alt="SPROUT & KERNEL Logo" 
                className="w-10 h-10 rounded-xl shadow-md group-hover:scale-105 transition-transform object-cover"
              />
              <div>
                <span className="text-xl font-bold font-serif text-emerald-950 tracking-tight block leading-none">
                  SPROUT &amp; KERNEL
                </span>
                <span className="text-[10px] uppercase font-semibold text-emerald-700 tracking-wider">
                  Traditional Herbal Soups
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path && !location.hash;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition-colors py-1 hover:text-emerald-700 ${
                      isActive ? "text-emerald-800 font-semibold border-b-2 border-emerald-600" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-100/50 transition-colors"
                title="Search products"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Direct WhatsApp CTA Button */}
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium text-xs sm:text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-700/20 active:scale-95 group"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600 group-hover:rotate-12 transition-transform" />
                <span>WhatsApp Order</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-emerald-100/50"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-emerald-950/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-emerald-100 p-4 animate-fadeIn">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <span className="text-sm font-semibold text-emerald-900 flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-600" /> Search Herbal Soup Powders
              </span>
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Search by leaf, ingredient or health benefit (e.g., Moringa, Joint, Garlic)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-700 text-white font-medium text-xs rounded-xl hover:bg-emerald-800 transition-colors flex items-center gap-1.5"
              >
                <span>Search</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-emerald-950/40 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-xs bg-amber-50 h-full shadow-2xl p-6 flex flex-col justify-between border-l border-emerald-200 animate-slideLeft">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emerald-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-emerald-950 font-serif text-lg">Arogya Soups</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Nav Items */}
              <nav className="mt-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-100/60 rounded-xl transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-6 border-t border-emerald-200/60 space-y-3">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl font-semibold text-sm shadow-md hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
                <span>Order on WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-500">
                Support: {SITE_CONFIG.whatsappFormatted}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
