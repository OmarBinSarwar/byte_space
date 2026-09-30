"use client";
// ============================================
// ByteSpace — Login Page
// Matching Figma Screenshot (media_1790654574419.png Bottom)
// ============================================

import { useState } from "react";
import Link from "next/link";
import AuthVisual from "@/components/auth/AuthVisual";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoggedIn(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0E43F9] relative flex flex-col justify-between p-6 sm:p-10 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top Left ByteSpace Logo Mark */}
      <div className="relative z-20">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="14" fill="#D4F04A" />
            <circle cx="14" cy="14" r="3.5" fill="#0E43F9" />
            <circle cx="17.5" cy="20" r="3" fill="#0E43F9" />
          </svg>
        </Link>
      </div>

      {/* Main Container: 2-Column Centered Layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Info */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <AuthVisual
              title="Sign in with ease"
              subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
            />
          </div>

          {/* Right Column: Login Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl max-w-[420px] w-full border border-gray-100">
              {/* Form Heading */}
              <p className="text-xs font-semibold text-[#0E43F9] mb-1">Sign In</p>
              <h1 className="text-2xl sm:text-[32px] font-black text-gray-950 tracking-tight leading-[1.15] mb-6">
                Welcome Back
              </h1>

              {loggedIn ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[#D4F04A] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-gray-950 text-xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Welcome Back!
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 mb-5">
                    Login successful. Continue your learning journey.
                  </p>
                  <Link
                    href="/search"
                    className="inline-block bg-[#0E43F9] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                  >
                    Go to Courses
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="designer@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E43F9] transition-colors"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E43F9] transition-colors"
                    />
                  </div>

                  {/* Submit Button (Pill aligned to right as per design) */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-xs sm:text-sm px-7 py-2.5 rounded-full transition-transform active:scale-95 shadow-sm cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                  </div>

                  {/* Divider: or */}
                  <div className="relative my-6 text-center">
                    <hr className="border-gray-200" />
                    <span className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-white px-3 text-[11px] text-gray-400 font-medium">
                      or
                    </span>
                  </div>

                  {/* Social Buttons: Facebook & Google */}
                  <div className="flex items-center justify-center gap-4 pt-1">
                    {/* Facebook Icon Button */}
                    <button
                      type="button"
                      aria-label="Continue with Facebook"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>

                    {/* Google Icon Button */}
                    <button
                      type="button"
                      aria-label="Continue with Google"
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              )}

              {/* Bottom switch link */}
              <div className="mt-8 text-center text-xs text-gray-500 font-medium">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-[#0E43F9] font-bold hover:underline"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer for clean aesthetic */}
      <div className="h-4" />
    </div>
  );
}
