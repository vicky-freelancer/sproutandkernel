import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";
import { generateWhatsAppGeneralInquiryUrl } from "../utils/whatsapp";
import { updatePageTitleAndMeta } from "../utils/seo";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    updatePageTitleAndMeta(
      "Contact Us - SPROUT & KERNEL WhatsApp Support",
      "Get in touch with SPROUT & KERNEL for order inquiries, delivery updates, or bulk herbal soup powder orders on WhatsApp."
    );
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello ${SITE_CONFIG.brandName},\n\nMy name is ${name || 'a customer'}.\nPhone: ${phone || 'N/A'}\n\nQuery: ${message || 'I would like to inquire about your herbal soup powders.'}`;
    const url = generateWhatsAppGeneralInquiryUrl(text);
    window.open(url, "_blank");
  };

  return (
    <div className="py-12 bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            We Are Here To Help
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Get In Touch With Us
          </h1>
          <p className="text-slate-600 text-sm">
            Reach out for order assistance, custom combo packs, or doorstep shipping details.
          </p>
        </div>

        {/* Contact Cards & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-emerald-900 text-white p-8 rounded-3xl shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif">Contact Information</h2>
              <p className="text-xs text-emerald-200 leading-relaxed">
                Connect with our team directly on WhatsApp for instant response during business hours.
              </p>

              <div className="space-y-4 pt-4 text-xs text-emerald-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">WhatsApp Business</p>
                    <p>{SITE_CONFIG.whatsappFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email Address</p>
                    <p>{SITE_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Office Address</p>
                    <p>{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Business Hours</p>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800">
              <a
                href={generateWhatsAppGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Launch Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl space-y-4">
            <h2 className="text-xl font-bold font-serif text-slate-900">Send an Instant WhatsApp Message</h2>
            <p className="text-xs text-slate-600">Fill in your details below to open a pre-filled WhatsApp chat.</p>

            <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Your Message or Order Query</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what product you'd like to order or ask any question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Open in WhatsApp to Send</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
