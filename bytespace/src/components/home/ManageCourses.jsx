// ============================================
// ByteSpace — Create & Manage Courses Easily
// Matching Figma Screenshot (Image 4 Top)
// ============================================

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { LimeWavyRibbon } from "./Shapes3D";

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const sampleAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
];

export default function ManageCourses() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left Column: Visual with Female Instructor & Financial Cards */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            {/* Soft Lime Glow Background */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] bg-[#D4F04A]/30 rounded-full blur-3xl -z-10" />

            {/* Central Instructor Image */}
            <div className="relative w-[300px] sm:w-[380px] h-[380px] sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                alt="Creator managing courses on ByteSpace"
                width={380}
                height={480}
                className="w-full h-full object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Card 1: Total Revenue (Top-Left Dark Blue) */}
            <div className="absolute -left-2 sm:-left-6 top-8 sm:top-12 bg-[#0E43F9] text-white rounded-2xl p-4 shadow-2xl max-w-[180px] sm:max-w-[210px] z-20">
              <div className="flex justify-between items-center text-[10px] text-blue-200">
                <span>Total Revenue</span>
                <span>July 1-20</span>
              </div>
              <p className="text-xl sm:text-2xl font-black mt-1">$120.29</p>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-3 overflow-hidden">
                <div
                  className="bg-[#D4F04A] h-1.5 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Below Card 1 Dark Blue) */}
            <div className="absolute -left-4 sm:-left-8 top-36 sm:top-44 bg-[#0E43F9] text-white rounded-2xl p-4 shadow-2xl max-w-[180px] sm:max-w-[210px] z-20">
              <div className="flex justify-between items-center text-[10px] text-blue-200">
                <span>Year to Date</span>
                <span>2023</span>
              </div>
              <p className="text-xl sm:text-2xl font-black mt-1">$1,200.38</p>
              <div className="mt-2 flex">
                <span className="bg-[#D4F04A] text-gray-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  +12%
                </span>
              </div>
            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right White Card) */}
            <div className="absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-20">
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

            {/* Lime 3D Wavy Ribbon Element */}
            <div className="absolute right-0 top-16 pointer-events-none hidden sm:block">
              <LimeWavyRibbon className="w-20 h-36" />
            </div>
          </div>

          {/* Right Column: Title, Description & Checklist */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-6 leading-relaxed max-w-xl font-normal">
              <strong className="text-gray-800 font-semibold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist with Blue Circle Checks */}
            <div className="mt-8 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-[#0E43F9] fill-blue-50 shrink-0"
                  />
                  <span className="text-gray-800 font-semibold text-base sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
