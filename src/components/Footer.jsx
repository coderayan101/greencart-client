import { NavLink } from "react-router-dom";
import { assets, footerLinks } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mt-2 md:mt-4 bg-[#EAF0E9] ">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8">
          {/* Top Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm md:text-base font-medium text-center">
            <NavLink to="/about" className="hover:text-[#2B5A1D] transition">
              About Us
            </NavLink>
            <NavLink
              to="/payment-policy"
              className="hover:text-[#2B5A1D] transition"
            >
              Payment Policy
            </NavLink>
            <NavLink
              to="/privacy-policy"
              className="hover:text-[#2B5A1D] transition"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/refund-policy"
              className="hover:text-[#2B5A1D] transition"
            >
              Return & Refund Policy
            </NavLink>
            <NavLink
              to="/shipping-policy"
              className="hover:text-[#2B5A1D] transition"
            >
              Shipping Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-[#2B5A1D] transition">
              Terms & Conditions
            </NavLink>
            <NavLink to="/" className="hover:text-[#2B5A1D] transition">
              Contact Us
            </NavLink>
          </div>

          {/* Middle Message */}
          <div className="text-center mt-10">
            
            <p className="max-w-3xl mx-auto text-primary font-semibold leading-7">
              পল্লীসেবা — বিশ্বাস, সতেজতা এবং সেবার একটি নতুন অভিজ্ঞতা
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              className="w-10 h-10 rounded-full bg-[#356F23] text-white flex items-center justify-center hover:bg-[#2B5A1D] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              className="w-10 h-10 rounded-full bg-[#356F23] text-white flex items-center justify-center hover:bg-[#2B5A1D] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919670271784"
              className="w-10 h-10 rounded-full bg-[#356F23] text-white flex items-center justify-center hover:bg-[#2B5A1D] transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://youtube.com"
              className="w-10 h-10 rounded-full bg-[#356F23] text-white flex items-center justify-center hover:bg-[#2B5A1D] transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>

      {/* Footer Copyright Section */}
      <div className="bg-primary">
        <p className="py-2 text-center text-sm md:text-sm text-white font-light">
          © {new Date().getFullYear()} PalliSeva. All Rights Reserved. | Developed by - {" "}
          <a
            href="https://ayanmaity.in"
            target="_blank"
            rel="noreferrer"
            className="font-light hover:underline"
          >
            Ayan Maity
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
