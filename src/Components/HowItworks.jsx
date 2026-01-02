import {
  UserPlus,
  UploadCloud,
  Search,
  ShoppingCart,
  CreditCard,
  Download,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in seconds as a buyer or artist.",
  },
  {
    number: "02",
    icon: UploadCloud,
    title: "Upload or Browse",
    description: "Artists upload work • Collectors discover amazing pieces.",
  },
  {
    number: "03",
    icon: Search,
    title: "Find & Explore",
    description:
      "Use filters, categories, and search to find exactly what you love.",
  },
  {
    number: "04",
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Select your favorite artwork and add it to your cart.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Complete payment safely with multiple trusted methods.",
  },
  {
    number: "06",
    icon: Download,
    title: "Enjoy Instantly",
    description:
      "Digital art downloads immediately • Physical pieces ship fast.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-base-100 to-base-200/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          How ARTIFY Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-base-100 rounded-2xl p-6 md:p-8 shadow-md border border-base-300/50 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-primary/90 transition-colors">
                  {step.number}
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon
                      size={26}
                      className="text-primary"
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>

                <p className="text-base-content/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg gap-2 px-10">
            Get Started Now
            <Download size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
