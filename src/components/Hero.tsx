import React from "react";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";
import heroImg from "../assets/images/herbal_soup_hero_1785443845796.jpg";

export const Hero: React.FC = () => {
  const generalWhatsAppUrl = generateWhatsAppGeneralInquiryUrl("வணக்கம் SPROUT & KERNEL, நான் பாரம்பரிய மூலிகை சூப் பொடிகள் ஆர்டர் செய்ய விரும்புகிறேன்.");

  return (
    <section className="relative bg-gradient-to-b from-amber-50/80 via-amber-50/40 to-emerald-50/30 overflow-hidden py-12 md:py-20 border-b border-emerald-100/60">
      
      {/* Subtle organic background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>SPROUT & KERNEL • 100% Natural • <strong className="text-rose-700">Flat 10% OFF</strong></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-emerald-950 tracking-tight leading-[1.15]">
              பாரம்பரிய <span className="text-emerald-700 underline decoration-amber-400/80 decoration-wavy decoration-2">மூலிகை சூப்</span> வகைகள் மற்றும் அதன் நன்மைகள்
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              முருங்கை, வாழைத்தண்டு, முடக்கத்தான், பிரண்டை, வல்லாரை, முடவாட்டுக்கால், ஆவாரம்பூ, தூதுவளை, ஆடாதொடை போன்ற உயர்தர இயற்கை மூலிகைகளால் தயாரிக்கப்பட்ட ரெடிமேட் சூப் பொடிகள்.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-900/20 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2 group"
              >
                <span>சூப் வகைகளை பார்க்க (Shop All)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-102 active:scale-98 flex items-center justify-center gap-2 group border border-emerald-500"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-100 text-emerald-600 group-hover:rotate-12 transition-transform" />
                <span>WhatsApp-ல் ஆர்டர் செய்ய</span>
              </a>
            </div>

            {/* 4 Trust Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-emerald-200/60 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">100% இயற்கை தயாரிப்பு</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">ரசாயனங்கள் அற்றது</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">2 நிமிடங்களில் தயார்</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">பாரம்பரிய நன்மை</span>
              </div>
            </div>

          </div>

          {/* Right Image Feature Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={heroImg}
                alt="SPROUT & KERNEL Herbal Soups"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    SPROUT & KERNEL
                  </p>
                  <p className="text-lg font-bold font-serif">
                    பாரம்பரிய மூலிகை சூப் பொடிகள்
                  </p>
                  <p className="text-xs text-emerald-100/90">
                    100% Natural • No Chemical • No Preservatives
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                ★ 5.0
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">உயர்தர தரம்</p>
                <p className="text-[11px] text-slate-500">10,000+ வாடிக்கையாளர்களின் தேர்வு</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
