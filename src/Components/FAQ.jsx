import {
  HelpCircle,
  CreditCard,
  Upload,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const faqItems = [
  {
    question: "How do I purchase an artwork?",
    answer:
      "Browse the collection, click on any artwork you like, then select 'Buy Now' or 'Add to Cart'. Complete payment securely via card, mobile banking, or digital wallet. Digital artworks are delivered instantly after purchase.",
    icon: CreditCard,
  },
  {
    question: "Can I sell my own art on ARTIFY?",
    answer:
      "Yes! Register or log in → go to your Dashboard → click 'Add New Artwork'. Upload high-quality images, add description, price, and category. Our team reviews submissions within 24–48 hours.",
    icon: Upload,
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use industry-standard encryption (SSL/TLS) and partner with trusted payment gateways. We never store your full card details on our servers.",
    icon: ShieldCheck,
  },
  {
    question: "What happens after I buy a physical artwork?",
    answer:
      "You'll receive an order confirmation with estimated shipping time. We partner with reliable couriers for secure delivery with tracking. Most domestic deliveries take 3–7 days.",
    icon: Truck,
  },
  {
    question: "What is your return/refund policy?",
    answer:
      "Digital artworks are non-refundable once downloaded. For physical artworks, you have 7 days to request a return if the item arrives damaged or not as described. Return shipping is covered in such cases.",
    icon: RotateCcw,
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us via the Helpdesk, email at support@artify.com, or through live chat (available 10 AM – 8 PM). We usually respond within a few hours.",
    icon: HelpCircle,
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-base-200/30">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium flex items-center gap-3">
                  <Icon size={22} className="text-primary shrink-0" />
                  {item.question}
                </div>
                <div className="collapse-content">
                  <p className="pt-4 text-base-content/80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-base-content/70">
            Still have questions?
            <a
              href="/contact"
              className="text-primary hover:underline font-medium ml-1"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
