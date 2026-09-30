"use client";
// ============================================
// ByteSpace — Footer
// Matching Figma Screenshot (media_1790653593807.png)
// ============================================

import { useState } from "react";
import Link from "next/link";

const column1Links = [
  { label: "Featured Courses", href: "/search" },
  { label: "Featured Categories", href: "/search" },
  { label: "Business", href: "/search?category=Business" },
  { label: "IT", href: "/search?category=IT" },
  { label: "Design", href: "/search?category=Design" },
];

const column2Links = [
  { label: "Development", href: "/search?category=Development" },
  { label: "Marketing", href: "/search?category=Marketing" },
  { label: "Photography", href: "/search?category=Photography" },
  { label: "Finance", href: "/search?category=Finance" },
  { label: "Sport", href: "/search?category=Sport" },
];

const column3Links = [
  { label: "Become a Creator", href: "/register" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 max-w-md">
            {/* ByteSpace Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="14" fill="#D4F04A" />
                <circle cx="14" cy="14" r="3.5" fill="#0E43F9" />
                <circle cx="17.5" cy="20" r="3" fill="#0E43F9" />
              </svg>
              <span className="text-2xl font-black text-gray-950 tracking-tight">
                ByteSpace
              </span>
            </Link>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Pill Input + Search Button */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 border border-gray-300 rounded-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E43F9] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#D4F04A] hover:bg-[#c4e339] text-gray-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-transform active:scale-95 shadow-sm"
                >
                  Search
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-600 mt-2 font-medium">
                  ✓ Thank you for subscribing!
                </p>
              )}
            </form>

            <p className="text-[11px] text-gray-400 leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Navigation Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3.5">
                {column1Links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-700 hover:text-[#0E43F9] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3.5">
                {column2Links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-700 hover:text-[#0E43F9] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3.5">
                {column3Links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-700 hover:text-[#0E43F9] transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
