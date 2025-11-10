import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-300 bg-linear-to-r from-[#ec4899] to-[#ef4444]">
      <div className="footer sm:footer-horizontal  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <FaInstagram size={24}></FaInstagram>

            <FaXTwitter size={24} />

            <FaYoutube size={24}></FaYoutube>
            <FaFacebook size={24}></FaFacebook>
          </div>
        </nav>
      </div>
      <p className="text-center p-4">
        Copyright © {new Date().getFullYear()} - All right reserved by ARITFY
        Industries Ltd
      </p>
    </footer>
  );
};

export default Footer;
