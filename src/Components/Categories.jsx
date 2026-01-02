import {
  Brush,
  Image as ImageIcon,
  Shapes,
  Camera,
  Infinity,
  Scissors,
} from "lucide-react";

const categories = [
  { name: "Digital Art", icon: Brush },
  { name: "Painting", icon: ImageIcon },
  { name: "Sculpture", icon: Shapes },
  { name: "Photography", icon: Camera },
  { name: "Abstract", icon: Infinity },
  { name: "Minimalism", icon: Scissors },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-20 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          Explore by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className="group flex flex-col items-center gap-3 p-6 bg-base-100 rounded-xl border border-pink-300 hover:border-primary/40 hover:bg-base-100/80 transition-all duration-300"
              >
                <Icon
                  size={32}
                  className="text-primary/70 group-hover:text-primary transition-colors"
                  strokeWidth={1.6}
                />
                <span className="font-medium text-base-content/90 group-hover:text-primary">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
