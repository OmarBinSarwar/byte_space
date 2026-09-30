"use client";
// ============================================
// ByteSpace — Navbar (Matching Figma Design)
// ============================================

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-[#0b35d8]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-transparent py-4"
          : "bg-[#0e43f9] border-b border-white/10 py-3 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Custom ByteSpace Lime Logo Icon */}
            <div className="flex items-center gap-1">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform group-hover:rotate-12 duration-200"
              >
                <circle cx="16" cy="16" r="14" fill="#D4F04A" />
                <path
                  d="M11 9H17C19.7614 9 22 11.2386 22 14C22 15.6366 21.2128 17.0894 20 18C21.7614 18.9106 23 20.7614 23 23C23 25.7614 20.7614 28 18 28H11V9Z"
                  fill="#0E43F9"
                  fillOpacity="0.15"
                />
                <circle cx="14" cy="14" r="3.5" fill="#0E43F9" />
                <circle cx="17.5" cy="20" r="3" fill="#0E43F9" />
              </svg>
              <span className="text-2xl font-black text-white tracking-tight">
                ByteSpace
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/courses")
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/creator/1"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/creator")
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Creators
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white hover:text-white/90 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold text-white px-5 py-2 rounded-full border border-white/40 hover:bg-white hover:text-[#0e43f9] transition-all"
            >
              Join Us
            </Link>
            <Link
              href="/search"
              aria-label="Shopping Cart"
              className="text-white hover:text-[#D4F04A] transition-colors p-1"
            >
              <ShoppingBag size={20} strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link href="/search" aria-label="Shopping Cart" className="text-white">
              <ShoppingBag size={20} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c39df] border-t border-white/10 px-4 py-6 mt-2 space-y-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white font-medium py-2"
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white font-medium py-2"
          >
            Courses
          </Link>
          <Link
            href="/creator/1"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white font-medium py-2"
          >
            Creators
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center text-white py-2 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center bg-[#D4F04A] text-gray-900 font-bold py-2.5 rounded-full"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
