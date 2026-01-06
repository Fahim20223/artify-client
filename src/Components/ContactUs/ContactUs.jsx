import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Detect theme changes from navbar
  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      const dark =
        htmlElement.classList.contains("dark") ||
        htmlElement.getAttribute("data-theme") === "dark";
      setIsDark(dark);
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast("Please fill out all fields before sending.");
      return;
    }

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@artify.com",
      subtext: "We'll respond within 24 hours",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9am-6pm EST",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Art Street, Creative City",
      subtext: "New York, NY 10001",
      color: "purple",
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "blue" },
    { icon: Twitter, name: "Twitter", color: "sky" },
    { icon: Instagram, name: "Instagram", color: "pink" },
    { icon: Linkedin, name: "LinkedIn", color: "blue" },
  ];

  const faqs = [
    {
      question: "How do I upload my artwork?",
      answer:
        "Simply create an account, go to your dashboard, and click 'Upload Artwork'. You can add details, tags, and pricing.",
    },
    {
      question: "Is Artify free to use?",
      answer:
        "Yes! Basic features are completely free. We also offer premium plans with advanced features for professional artists.",
    },
    {
      question: "How do I sell my art?",
      answer:
        "Enable selling on your artworks, set your prices, and we'll handle the transactions. You'll receive payments directly to your account.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "bg-[#1a2332]" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950"
            : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
        }`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <MessageSquare
              className={`${isDark ? "text-purple-400" : "text-purple-500"}`}
              size={18}
            />
            <span
              className={`text-sm font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              We're here to help
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Get In
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </div>
      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            const colorClasses = {
              blue: isDark
                ? "from-blue-500 to-blue-700"
                : "from-blue-400 to-blue-600",
              green: isDark
                ? "from-green-500 to-green-700"
                : "from-green-400 to-green-600",
              purple: isDark
                ? "from-purple-500 to-purple-700"
                : "from-purple-400 to-purple-600",
            };

            return (
              <div
                key={idx}
                className={`${
                  isDark ? "bg-[#2d3748]" : "bg-white"
                } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group hover:-translate-y-2`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    colorClasses[info.color]
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {info.title}
                </h3>
                <p
                  className={`text-md font-semibold mb-1 ${
                    isDark ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  {info.details}
                </p>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {info.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Main Content - Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                isDark
                  ? "bg-purple-900/30 text-purple-400"
                  : "bg-purple-100 text-purple-600"
              } text-sm font-semibold mb-6`}
            >
              Send us a message
            </div>

            <h2
              className={`text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Start a Conversation
            </h2>
            <p
              className={`text-md mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            {isSubmitted ? (
              <div
                className={`rounded-2xl p-8 text-center ${
                  isDark
                    ? "bg-green-900/20 border border-green-500"
                    : "bg-green-50 border border-green-200"
                }`}
              >
                <CheckCircle2
                  className="mx-auto mb-4 text-green-500"
                  size={64}
                />
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Message Sent!
                </h3>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Thank you for contacting us. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                        isDark
                          ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                          : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                      }`}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 ${
                      isDark
                        ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                        : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                    }`}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 resize-none ${
                      isDark
                        ? "bg-[#1a2332] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                        : "bg-white border-gray-200 text-gray-900 focus:border-purple-500 focus:ring-purple-500/20"
                    }`}
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-gray-50"
              } rounded-2xl p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Office Hours
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
                  { days: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
                  { days: "Sunday", hours: "Closed" },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span
                      className={`font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {schedule.days}
                    </span>
                    <span
                      className={`${
                        isDark ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-gray-50"
              } rounded-2xl p-8`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Connect With Us
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={idx}
                      className={`flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-105 ${
                        isDark
                          ? "bg-[#1a2332] hover:bg-[#253448]"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      <Icon className={`text-${social.color}-500`} size={24} />
                      <span
                        className={`font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {social.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick FAQ */}
            <div
              className={`${
                isDark ? "bg-[#2d3748]" : "bg-gray-50"
              } rounded-2xl p-8`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Quick Answers
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group">
                    <summary
                      className={`cursor-pointer font-semibold ${
                        isDark ? "text-purple-400" : "text-purple-600"
                      } hover:text-purple-700 transition-colors`}
                    >
                      {faq.question}
                    </summary>
                    <p
                      className={`mt-2 text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      /{/* CTA Section */}
      <div
        className={`relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900"
            : "bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
        }`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Artify?
          </h2>
          <p className="text-md text-white/90 mb-8 max-w-2xl mx-auto">
            Start sharing your creativity with thousands of art lovers worldwide
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
