import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-r from-[#ec4899] to-[#ef4444] text-white overflow-hidden">
      {/* Subtle background pattern/overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand + Tagline */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-linear-to-r from-white to-pink-100">
              ARTIFY
            </h2>
            <p className="text-pink-100/80 text-sm md:text-base max-w-xs">
              Create • Inspire • Share your vision with the world
            </p>
          </div>

          {/* Navigation columns - hide on mobile, show in 2 columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-10 col-span-3">
            <div>
              <h6 className="footer-title text-lg font-semibold mb-5 text-white/90 uppercase tracking-wider">
                Services
              </h6>
              <ul className="space-y-3 text-pink-100/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Motion Graphics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Social Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="footer-title text-lg font-semibold mb-5 text-white/90 uppercase tracking-wider">
                Company
              </h6>
              <ul className="space-y-3 text-pink-100/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="footer-title text-lg font-semibold mb-5 text-white/90 uppercase tracking-wider">
                Legal
              </h6>
              <ul className="space-y-3 text-pink-100/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile-only quick links */}
          <div className="md:hidden col-span-2 mt-6">
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <div className="grid grid-cols-2 gap-3 text-sm text-pink-100/80">
              <a href="#" className="hover:text-white transition">
                About
              </a>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-10 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-pink-100/70 text-sm">
            © {currentYear} ARTIFY Industries Ltd. Made with{" "}
            <FaHeart className="inline text-rose-300 mx-1" />
            <span className="text-white/60">for creators worldwide</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <SocialIcon href="#" icon={<FaInstagram size={22} />} />
            <SocialIcon href="#" icon={<FaTwitter size={22} />} />
            <SocialIcon href="#" icon={<FaYoutube size={22} />} />
            <SocialIcon href="#" icon={<FaFacebookF size={22} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="social media"
  >
    {icon}
  </a>
);

export default Footer;
