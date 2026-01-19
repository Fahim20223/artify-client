import { Sparkles, Lock, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Curated Quality",
    desc: "Every artwork is hand-reviewed by our team",
  },
  {
    icon: Lock,
    title: "Secure Transactions",
    desc: "Protected payments & verified ownership",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Artists and collectors from 50+ countries",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    desc: "Digital artworks delivered in seconds",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-linear-to-b from-base-100 to-base-200/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          Why Choose ARTIFY?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative base-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-primary/30"
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
