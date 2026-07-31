import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { REVIEWS } from "../data/products";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50/40 to-emerald-50/50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            Customer Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Loved By Health-Conscious Families
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Read authentic experiences from customers who enjoy our herbal soup powders every day.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-emerald-100 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-100" />

              <div className="space-y-3 relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm font-serif">{review.userName}</p>
                  <p className="text-[11px] text-slate-400">{review.userLocation} • {review.date}</p>
                </div>
                {review.verifiedBuyer && (
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Order
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
