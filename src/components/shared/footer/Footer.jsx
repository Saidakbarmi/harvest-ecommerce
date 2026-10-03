import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaSquareInstagram,
} from "react-icons/fa6";

import { FooterSection } from "./FooterSection";
import { ContactSection } from "./ContactSection";
import FooterAppButton from "./FooterAppButton";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-44 pb-12 border-t border-slate-100">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="group inline-flex items-center gap-3">
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">
                Harvest
              </h2>
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
            </Link>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-sm">
              The Harvest is the biggest market of grocery products. Get your
              daily needs from our store with premium quality and speed.
            </p>
            <FooterAppButton />
          </div>
          {/* Category Column */}
          <FooterSection
            title="Category"
            items={[
              "Dairy & Milk",
              "Snack & Spice",
              "Fast Food",
              "Juice & Drinks",
              "Bakery",
              "Seafood",
            ]}
          />
          {/* Company Column */}
          <FooterSection
            title="Company"
            items={[
              "About us",
              "Delivery",
              "Legal Notice",
              "Terms & conditions",
              "Secure payment",
              "Contact us",
            ]}
          />
          {/* Account Column */}
          <FooterSection
            title="Account"
            items={[
              "Sign In",
              "View Cart",
              "Return Policy",
              "Become a Vendor",
              "Affiliate Program",
              "Payments",
            ]}
          />

          {/* Contact Column */}
          <div>
            <ContactSection title="Contact Us" />
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://github.com/Saidakbarmi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
              >
                <FaFacebookF size={14} className="hidden" />
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </Link>
              <Link
                href="https://t.me/abdujabborvvvv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.922z"/></svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/saidakbar-abdujabborov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
              >
                <FaLinkedinIn size={14} />
              </Link>
              <Link
                href="https://www.instagram.com/abdujabborovvv.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center bg-white text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-500 rounded-xl border border-slate-100 shadow-sm"
              >
                <FaSquareInstagram size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-600 text-sm">
        All Rights Reserved © 2025 Harvest. Developed by{" "}
        <a
          href="https://github.com/Saidakbarmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline"
        >
          Saidakbar Abdujabborov
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
