// ============================================
// ByteSpace — Auth Visual Artwork
// Matching Figma Screenshot (media_1790654574419.png)
// ============================================

import Image from "next/image";
import { Star } from "lucide-react";

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
];

export default function AuthVisual({ title, subtitle }) {
  return (
    <div className="flex flex-col justify-center">
      {/* Header text */}
      <div className="mb-10 sm:mb-12 max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {title}
        </h2>
        <p className="text-blue-100/90 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>

      {/* Artwork Stack with 3D Shapes & Overlapping Cards */}
      <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[360px] sm:h-[400px]">
        {/* 3D Lime Torus (Top Left) */}
        <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-30 pointer-events-none">
          <svg
            width="64"
            height="64"
            viewBox="0 0 80 80"
            fill="none"
            className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-lg"
          >
            <ellipse
              cx="40"
              cy="40"
              rx="32"
              ry="24"
              transform="rotate(-20 40 40)"
              fill="#D4F04A"
            />
            <ellipse
              cx="40"
              cy="40"
              rx="15"
              ry="10"
              transform="rotate(-20 40 40)"
              fill="#0E43F9"
            />
          </svg>
        </div>

        {/* 3D Lime Pyramid (Bottom Left) */}
        <div className="absolute -bottom-4 -left-6 sm:-bottom-6 sm:-left-8 z-30 pointer-events-none">
          <svg
            width="70"
            height="85"
            viewBox="0 0 80 100"
            fill="none"
            className="w-16 h-20 sm:w-18 sm:h-22 drop-shadow-xl"
          >
            <polygon points="40,10 10,85 55,95" fill="#E4FF4A" />
            <polygon points="40,10 55,95 75,75" fill="#A8D610" />
          </svg>
        </div>

        {/* Floating Instructor Round Avatar (Top Right) */}
        <div className="absolute -top-3 right-6 sm:right-10 z-30 ring-4 ring-white rounded-full shadow-2xl overflow-hidden w-12 h-12 sm:w-14 sm:h-14">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces"
            alt="Instructor"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3D White Zigzag Squiggle (Bottom Right) */}
        <div className="absolute -bottom-2 -right-4 sm:-right-8 z-30 pointer-events-none">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
          >
            <path
              d="M20 20 L 60 38 L 25 58 L 65 75 L 30 92"
              stroke="#FFFFFF"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Card 1: Build Digital Asset (Behind / Lower-Left) */}
        <div className="absolute left-0 bottom-4 w-[280px] sm:w-[310px] bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-gray-100 z-10 opacity-90 transform -rotate-3">
          <div className="relative h-20 sm:h-24 rounded-2xl overflow-hidden mb-2 bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&fit=crop"
              alt="Build Digital Asset"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-1.5 left-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded-full">
              17 Lessons
            </span>
          </div>
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
            Build Digital Asset
          </h4>
          <p className="text-[10px] text-[#0E43F9] font-medium">
            by purepearl studio
          </p>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 text-xs">
            <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              📶 Beginner
            </span>
            <span className="font-bold text-[#0E43F9]">$25<span className="text-[10px] font-normal text-gray-400">/lifetime</span></span>
          </div>
        </div>

        {/* Card 2: the Power of Big Data (Front / Main Focused Card) */}
        <div className="absolute left-10 sm:left-14 top-2 w-[280px] sm:w-[315px] bg-white rounded-3xl p-3.5 sm:p-4 shadow-2xl border border-gray-100 z-20">
          <div className="relative h-24 sm:h-28 rounded-2xl overflow-hidden mb-2.5 bg-gray-900">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&fit=crop"
              alt="the Power of Big Data"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1.5 left-2 flex gap-1 text-[8px] text-white">
              <span className="bg-black/60 px-1.5 py-0.5 rounded-full">17 Lessons</span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded-full">2 hours 16 mins</span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded-full">59 Comments</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
              the Power of Big Data
            </h4>
            <div className="flex items-center gap-0.5 text-[11px] font-bold text-gray-600">
              <span>4.5</span>
              <Star size={11} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          <p className="text-[10px] text-[#0E43F9] font-medium mt-0.5">
            by purepearl studio
          </p>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
            <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              📶 Beginner
            </span>
            <div className="flex items-center">
              <div className="flex -space-x-1.5 overflow-hidden">
                {studentAvatars.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Student"
                    width={18}
                    height={18}
                    className="inline-block h-4 w-4 rounded-full ring-1 ring-white object-cover"
                  />
                ))}
              </div>
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#D4F04A] text-gray-950">
                26+
              </span>
            </div>
          </div>

          <div className="mt-2 text-xs font-bold text-[#0E43F9]">
            $25<span className="text-[10px] font-normal text-gray-400">/lifetime</span>
          </div>
        </div>

        {/* Card 3: Happy Students (Bottom Center-Right) */}
        <div className="absolute right-0 sm:right-2 bottom-0 bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-gray-100 z-25 min-w-[170px] sm:min-w-[190px]">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-gray-900 font-bold text-[10px] sm:text-xs">
              Happy Students
            </span>
            <span className="text-gray-700 text-[10px] font-bold flex items-center">
              4.5 (240)<span className="text-yellow-400">★</span>
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-1.5 overflow-hidden">
              {studentAvatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Student"
                  width={20}
                  height={20}
                  className="inline-block h-5 w-5 rounded-full ring-1 ring-white object-cover"
                />
              ))}
            </div>
            <span className="ml-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#D4F04A] text-gray-950">
              2K+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
