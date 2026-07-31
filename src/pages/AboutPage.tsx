import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, Heart, Award, ArrowRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";
import { updatePageTitleAndMeta } from "../utils/seo";
import heroImg from "../assets/images/herbal_soup_hero_1785443845796.jpg";

export const AboutPage: React.FC = () => {
  useEffect(() => {
    updatePageTitleAndMeta(
      "About SPROUT & KERNEL - Traditional Herbal Soup Powders",
      "Discover how SPROUT & KERNEL brings traditional organic soup powders made from hand-picked botanical leaves and traditional herbs to modern households."
    );
  }, []);

  const generalWhatsAppUrl = generateWhatsAppGeneralInquiryUrl("வணக்கம் SPROUT & KERNEL, உங்கள் பிராண்ட் மற்றும் தயாரிப்புகள் பற்றி கூடுதல் தகவல் அறிய விரும்புகிறேன்.");

  return (
    <div className="py-12 bg-slate-50/50 min-h-screen space-y-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              Our Brand Story • SPROUT & KERNEL
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
              பாரம்பரிய மூலிகை ஆரோக்கியம்
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              SPROUT & KERNEL (Marketed by SK AGRO TECH / Manufactured by Vedha Food Products) வழங்கும் 100% இயற்கை பாரம்பரிய மூலிகை சூப் பொடிகள்.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Sourcing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
              உயர்தர மூலிகைகள் & பாரம்பரிய தயாரிப்பு
            </span>
            <h2 className="text-3xl font-bold font-serif text-slate-900 tracking-tight">
              இயற்கை மூலிகைகளின் நன்மைகள் மாறாமல்...
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              முருங்கை, வாழைத்தண்டு, முடக்கத்தான், பிரண்டை, வல்லாரை, முடவாட்டுக்கால், ஆவாரம்பூ, தூதுவளை, ஆடாதொடை போன்ற மிகச் சிறந்த மூலிகைகளை தூய்மையான முறையில் உலர்த்தி, மிளகு, சீரகம், தனியா, சுக்கு, இந்துப்பு சேர்த்து சுகாதார முறையில் தயாரிக்கிறோம்.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              எந்தவிதமான இரசாயனங்களோ (Chemicals), நிறமூட்டிகளோ (Artificial Colors) அல்லது பாதுகாப்பிகளோ (Preservatives) சேர்க்கப்படாமல் 100% தூய்மையான முறையில் பேக் செய்யப்படுகிறது. FSSAI சான்றிதழ் பெற்றது.
            </p>
            <div className="pt-2">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp-ல் தொடர்புகொள்ள</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={heroImg}
                alt="SPROUT & KERNEL Herbal ingredients"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold font-serif text-slate-900">எங்கள் உறுதிமொழி</h2>
            <p className="text-slate-600 text-sm">தூய்மை, ஆரோக்கியம் மற்றும் நம்பகத்தன்மை.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-bold font-serif text-slate-900 text-base">100% இயற்கை மூலிகைகள்</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                இயற்கையான மூலிகை இலைகள் மற்றும் முழு நறுமண மசாலா பொருட்கள் மட்டுமே பயன்படுத்தப்படுகின்றன.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold font-serif text-slate-900 text-base">FSSAI அங்கீகாரம் & சுகாதாரம்</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                உயர்தர நவீன சுகாதாரமான முறையில் பேக்கிங் செய்யப்படுகிறது. Lic No: 22422593000438 / 22425592000266.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold font-serif text-slate-900 text-base">எளிதான வாட்ஸ்அப் ஆர்டர்</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                வாட்ஸ்அப் மூலமாக நேரடியாக ஆர்டர் செய்து உங்கள் வீட்டிற்கே விரைவாகப் பெறலாம்.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
