import React from "react";
import { Flame, CookingPot, Coffee, Sparkles } from "lucide-react";

export const HowToPrepareSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: <Flame className="w-7 h-7 text-emerald-700" />,
      title: "Boil Clean Water",
      desc: "Measure 200ml to 220ml of fresh water in a saucepan and bring it to a gentle boil."
    },
    {
      step: "02",
      icon: <CookingPot className="w-7 h-7 text-emerald-700" />,
      title: "Add Herbal Powder",
      desc: "Add 1 tablespoon (approx. 10g) of SPROUT & KERNEL Herbal Soup Powder and stir continuously to mix well."
    },
    {
      step: "03",
      icon: <Coffee className="w-7 h-7 text-emerald-700" />,
      title: "Simmer & Enjoy Warm",
      desc: "Simmer on low heat for 2-3 minutes. Pour into your favorite cup, garnish with fresh herbs or ghee, and sip warm!"
    }
  ];

  return (
    <section id="prepare" className="py-16 bg-white border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            Quick & Simple Prep
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            How To Prepare in 3 Easy Steps
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            No long cooking required! Enjoy steaming herbal goodness anytime in just 2-3 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-emerald-100 -z-0 -translate-y-6" />

          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 text-center space-y-4 relative z-10 hover:bg-white hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
            >
              {/* Step Badge */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-emerald-200 mx-auto flex items-center justify-center relative">
                {s.icon}
                <span className="absolute -top-2 -right-2 bg-emerald-800 text-white font-bold text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  {s.step}
                </span>
              </div>

              <h3 className="text-lg font-bold font-serif text-slate-900">
                {s.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
