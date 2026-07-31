import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";
import { PolicyModal } from "./PolicyModal";

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const generalWhatsAppUrl = generateWhatsAppGeneralInquiryUrl("வணக்கம் SPROUT & KERNEL, உங்கள் தயாரிப்புகள் பற்றிய தகவல்களை அறிய விரும்புகிறேன்.");

  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-emerald-900/80 text-emerald-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 flex items-center justify-center text-emerald-300 shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-white">100% Pure & Natural</p>
              <p className="text-[11px] text-emerald-300/80">No chemical preservatives</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 flex items-center justify-center text-emerald-300 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-white">Direct WhatsApp Support</p>
              <p className="text-[11px] text-emerald-300/80">Instant order assistance</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/80 flex items-center justify-center text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-xs sm:text-sm text-white">Traditional Recipes</p>
              <p className="text-[11px] text-emerald-300/80">Siddha & Ayurvedic balance</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-emerald-900/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/SK Logo.png" 
                alt="SPROUT & KERNEL Logo" 
                className="w-9 h-9 rounded-xl object-cover shadow-md"
              />
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                {SITE_CONFIG.brandName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              பாரம்பரிய முறையில் தயாரிக்கப்பட்ட 100% இயற்கை மூலிகை சூப் பொடிகள். Marketed by SK AGRO TECH • Manufactured by Vedha Food Products. FSSAI Lic No: 22422593000438 / 22425592000266.
            </p>
            <div className="pt-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
                <span>WhatsApp ஆர்டர் ({SITE_CONFIG.whatsappFormatted})</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-300">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><Link to="/" className="hover:text-amber-300 transition-colors">Home Page</Link></li>
              <li><Link to="/shop" className="hover:text-amber-300 transition-colors">Shop All Soup Powders</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">Our Brand Story</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-300">Soup Categories</h4>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><Link to="/shop?category=Leaf-Based" className="hover:text-amber-300 transition-colors">Leaf-Based Soups</Link></li>
              <li><Link to="/shop?category=Traditional Mix" className="hover:text-amber-300 transition-colors">Traditional Siddha Mixes</Link></li>
              <li><Link to="/shop?category=Spices %26 Immunity" className="hover:text-amber-300 transition-colors">Immunity & Spices</Link></li>
            </ul>
          </div>

          {/* Customer Care & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-300">Contact & Support</h4>
            <div className="space-y-2 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.whatsappNumber}`} className="hover:text-white">{SITE_CONFIG.whatsappFormatted}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">{SITE_CONFIG.email}</a>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                <button onClick={() => setActivePolicy("privacy")} className="hover:underline text-emerald-300">Privacy Policy</button> | 
                <button onClick={() => setActivePolicy("terms")} className="hover:underline text-emerald-300">Terms</button> | 
                <button onClick={() => setActivePolicy("shipping")} className="hover:underline text-emerald-300">Shipping</button> | 
                <button onClick={() => setActivePolicy("refund")} className="hover:underline text-emerald-300">Refunds</button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <p className="text-[11px] text-emerald-300/60 text-center sm:text-right">
            Disclaimers: Our herbal soup powders are food supplements designed for regular wellness. Not intended to replace professional medical treatment.
          </p>
        </div>
      </div>

      {/* Policy Modal */}
      <PolicyModal policyKey={activePolicy} onClose={() => setActivePolicy(null)} />
    </footer>
  );
};
