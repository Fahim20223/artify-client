import { Send } from "lucide-react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Successfully added");
  };

  return (
    <section className="py-16 md:py-20 bg-linear-to-r from-primary/10 to-secondary/10 max-w-7xl mx-auto w-[90%] rounded-2xl">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">
          Stay in the Art Loop
        </h2>
        <p className="text-lg text-base-content/70 mb-8 max-w-xl mx-auto">
          Weekly curated drops, artist stories & exclusive early access
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="input input-bordered flex-1 h-12 md:h-14 px-5 text-base"
          />
          <button
            type="submit"
            className="btn btn-primary gap-2 h-12 md:h-14 px-8"
          >
            <Send size={18} />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
