import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-200 py-2">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary to-secondary text-primary-content py-25 max-w-7xl mx-auto w-[95%] rounded-2xl my-9">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-base-100 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered w-full"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 w-full text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-base-100 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="opacity-70 mb-2">📍 Dhaka, Bangladesh</p>
              <p className="opacity-70 mb-2">📧 support@artify.com</p>
              <p className="opacity-70">📞 +880 1234-567890</p>
            </div>

            {/* Social Links */}
            <div className="bg-base-100 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  className="btn btn-circle btn-primary"
                  href="https://facebook.com"
                >
                  F
                </a>
                <a
                  className="btn btn-circle btn-secondary"
                  href="https://twitter.com"
                >
                  T
                </a>
                <a
                  className="btn btn-circle btn-accent"
                  href="https://instagram.com"
                >
                  I
                </a>
                <a
                  className="btn btn-circle btn-info"
                  href="https://linkedin.com"
                >
                  L
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-base-100 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary">
                  → Frequently Asked Questions
                </a>
                <a href="#" className="block hover:text-primary">
                  → Help Center
                </a>
                <a href="#" className="block hover:text-primary">
                  → Community Guidelines
                </a>
                <a href="#" className="block hover:text-primary">
                  → Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
