import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Found my favorite digital piece here — the quality is stunning!",
    author: "Ayesha Rahman",
    role: "Digital Collector",
  },
  {
    text: "Selling my art has never been easier. Highly recommend ARTIFY!",
    author: "Rahim Khan",
    role: "Visual Artist",
  },
  // add 2–4 more
  {
    text: "As a new collector, I was nervous — but the curated selection and transparent platform made it a joy. Already bought three pieces!",
    author: "Nadia Islam",
    role: "Emerging Collector",
    // avatar: "https://viemagazine.com/wp-content/uploads/2018/03/vie-magazine-ashley-longshore-hero-min.jpg" // optional
  },
  {
    text: "The community here is amazing. I’ve connected with so many talented artists and sold work to international buyers within weeks.",
    author: "Karim Hossain",
    role: "Mixed Media Artist",
    // avatar: "https://thumbs.dreamstime.com/b/interior-shot-modern-art-gallery-featuring-several-visitors-both-men-women-observing-diverse-collection-colorful-404686331.jpg" // optional (group style)
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          What Our Community Says
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-base-200/40 p-8 rounded-2xl border border-pink-200"
            >
              <Quote className="absolute -top-4 -left-2 w-10 h-10 text-primary/30" />
              <p className="italic text-lg mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-sm text-base-content/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
