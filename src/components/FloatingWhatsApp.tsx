import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppGeneralInquiryUrl(userQuery.trim() || undefined);
    window.open(url, "_blank");
    setIsOpen(false);
    setUserQuery("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-fadeIn">
          {/* Card Header */}
          <div className="bg-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                AH
              </div>
              <div>
                <p className="font-semibold text-xs leading-tight">{SITE_CONFIG.brandName}</p>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                  Online on WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-200 hover:text-white rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-emerald-50/50 space-y-3">
            <div className="bg-white p-3 rounded-xl shadow-xs text-xs text-slate-700 border border-emerald-100/80">
              <p className="font-medium text-emerald-900 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Namaste! 🌿
              </p>
              How can we help you today? Ask us about our herbal soup mixes, combo discounts, or doorstep delivery!
            </div>

            <form onSubmit={handleSend} className="space-y-2">
              <textarea
                rows={2}
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Type your query or order question..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-white"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start WhatsApp Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-xl whitespace-nowrap shadow-lg pointer-events-none group-hover:opacity-100 opacity-90 transition-opacity">
            Chat with us on WhatsApp
            <div className="absolute top-1/2 -right-1 -mt-1 border-4 border-transparent border-l-slate-900" />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
          aria-label="WhatsApp Support"
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
};
