"use client";
// ============================================
// ByteSpace — Register Page
// Matching Figma Screenshot (media_1790654574419.png Top)
// ============================================

import { useState } from "react";
import Link from "next/link";
import AuthVisual from "@/components/auth/AuthVisual";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
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
              title="Sign up and come in"
              subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
            />
          </div>

          {/* Right Column: Register Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl max-w-[420px] w-full border border-gray-100">
              {/* Form Heading */}
              <p className="text-xs font-semibold text-[#0E43F9] mb-1">
                Create an Account
              </p>
              <h1 className="text-2xl sm:text-[32px] font-black text-gray-950 tracking-tight leading-[1.15] mb-6">
                Welcome to
                <br />
                ByteSpace
              </h1>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[#D4F04A] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-gray-950 text-xl">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Account Created!
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 mb-5">
                    Welcome to ByteSpace. Start exploring courses right away!
                  </p>
                  <Link
                    href="/search"
                    className="inline-block bg-[#0E43F9] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                  >
                    Browse Courses
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jamie Davis"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E43F9] transition-colors"
                    />
                  </div>

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
                      {isSubmitting ? "Creating..." : "Continue"}
                    </button>
                  </div>
                </form>
              )}

              {/* Bottom switch link */}
              <div className="mt-8 text-center text-xs text-gray-500 font-medium">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#0E43F9] font-bold hover:underline"
                >
                  Login
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
