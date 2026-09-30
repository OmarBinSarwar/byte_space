"use client";
// ============================================
// ByteSpace — Hero Section (Matching Figma Design)
// ============================================

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  LimeWavyRibbon,
  WhiteDonut,
  WhiteSquiggle,
  WhitePyramid,
  WhiteSpring,
  LimePrism,
} from "./Shapes3D";

const sampleAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
];

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <section className="relative bg-[#0E43F9] pt-32 pb-20 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.15]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="text-blue-100/90 text-sm sm:text-base mt-5 max-w-2xl mx-auto leading-relaxed font-normal">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Pill Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 max-w-xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.18)] pl-5 ring-1 ring-white/60 transition-all duration-300 focus-within:shadow-[0_12px_48px_rgba(0,0,0,0.24)] focus-within:ring-[#D4F04A]/60"
          >
            <Search size={18} className="text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-800 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200"
            />
            <button
              type="submit"
              className="bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
            >
              Search
            </button>
          </form>
        </div>

        {/* Central Graphic Section with 3D Elements */}
        <div className="relative mt-12 sm:mt-16 flex justify-center items-end min-h-[420px] sm:min-h-[500px]">
          {/* Floating 3D Shapes (Left Side) */}
          <div className="absolute left-0 lg:left-6 top-6 sm:top-12 pointer-events-none hidden sm:block animate-pulse">
            <LimeWavyRibbon className="w-24 h-40 sm:w-32 sm:h-52" />
          </div>

          <div className="absolute left-8 lg:left-36 top-36 sm:top-48 pointer-events-none hidden sm:block">
            <WhiteSquiggle className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="absolute left-2 lg:left-24 bottom-6 sm:bottom-12 pointer-events-none">
            <WhiteDonut className="w-24 h-24 sm:w-36 sm:h-36" />
          </div>

          {/* Central Lime Circle & Smiling Student */}
          <div className="relative flex justify-center items-end z-10 w-full max-w-2xl">
            {/* Big Neon Lime Circle */}
            <div className="absolute bottom-0 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-[#D4F04A] rounded-full -z-10 translate-y-8" />

            {/* Student Image */}
            <div className="relative w-[320px] sm:w-[440px] h-[340px] sm:h-[460px] overflow-visible flex items-end justify-center">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80"
                alt="Student learning on ByteSpace"
                width={440}
                height={460}
                priority
                className="object-cover object-top rounded-b-[40px] filter drop-shadow-2xl h-[340px] sm:h-[440px] w-auto"
              />
            </div>

            {/* Floating Card: UI/UX Design (Top-Left) */}
            <div className="absolute -left-2 sm:left-4 top-16 sm:top-24 bg-white rounded-2xl p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100/80 z-20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
              <p className="text-gray-900 font-bold text-xs sm:text-sm">
                UI/UX Design
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 font-medium">
                200 Courses • 1000+ Students
              </p>
            </div>

            {/* Floating Card: Happy Students (Bottom-Left) */}
            <div className="absolute -left-4 sm:left-8 bottom-6 sm:bottom-10 bg-white rounded-2xl p-3 sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100/80 z-20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-gray-900 font-bold text-xs">
                  Happy Students
                </span>
                <span className="text-gray-800 text-[11px] font-semibold flex items-center gap-1">
                  4.5 (240)<span className="text-yellow-400">★</span>
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-2 overflow-hidden">
                  {sampleAvatars.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Student"
                      width={28}
                      height={28}
                      className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4F04A] text-gray-950">
                  2K+
                </span>
              </div>
            </div>

            {/* Floating Card: Learning Progress (Right Side) */}
            <div className="absolute -right-2 sm:right-6 top-32 sm:top-40 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100/80 z-20 min-w-[170px] sm:min-w-[200px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
              <p className="text-gray-500 font-medium text-xs">
                Learning Progress
              </p>
              <p className="text-2xl sm:text-4xl font-black text-gray-900 my-1">
                55%
              </p>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-[#D4F04A] h-2 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>
          </div>

          {/* Floating 3D Shapes (Right Side) */}
          <div className="absolute right-6 lg:right-32 top-12 sm:top-20 pointer-events-none hidden sm:block">
            <WhitePyramid className="w-20 h-24 sm:w-28 sm:h-32" />
          </div>

          <div className="absolute right-2 lg:right-16 bottom-16 sm:bottom-24 pointer-events-none hidden sm:block">
            <WhiteSpring className="w-20 h-32 sm:w-24 sm:h-36" />
          </div>

          <div className="absolute -right-6 lg:right-2 top-48 sm:top-60 pointer-events-none">
            <LimePrism className="w-24 h-32 sm:w-32 sm:h-44" />
          </div>
        </div>
      </div>
    </section>
  );
}
