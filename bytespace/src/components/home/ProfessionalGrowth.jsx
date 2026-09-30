// ============================================
// ByteSpace — Professional Growth Section
// Matching Figma Screenshot (Image 5 Bottom)
// ============================================

import Image from "next/image";
import Link from "next/link";
import { LimeWavyRibbon } from "./Shapes3D";

export default function ProfessionalGrowth() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-lime-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Stats */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-6 leading-relaxed max-w-xl font-normal">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Counter Row */}
            <div className="flex items-center gap-10 sm:gap-16 mt-10 sm:mt-14 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0E43F9] tracking-tight">
                  12K
                </p>
                <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
                  Students
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0E43F9] tracking-tight">
                  70+
                </p>
                <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
                  Courses
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0E43F9] tracking-tight">
                  16
                </p>
                <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual with Student & Floating Cards */}
          <div className="relative flex justify-center items-center">
            {/* Soft Lime Radial Glow Background */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] bg-[#D4F04A]/30 rounded-full blur-3xl -z-10" />

            {/* Central Student Image */}
            <div className="relative w-[300px] sm:w-[380px] h-[360px] sm:h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80"
                alt="Student growth at ByteSpace"
                width={380}
                height={450}
                className="w-full h-full object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Course Card (Left overlay) */}
            <div className="absolute -left-4 sm:-left-8 top-8 sm:top-12 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-gray-100 max-w-[210px] sm:max-w-[240px] z-20 transition-transform hover:-translate-y-1">
              <div className="relative rounded-xl overflow-hidden h-24 sm:h-28 mb-3 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&fit=crop"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 flex gap-1 text-[9px] text-white">
                  <span className="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full font-medium">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full font-medium hidden sm:inline-block">
                    2h 16m
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">
                Learn Figma from Basic
              </h4>
              <p className="text-[11px] text-[#0E43F9] font-medium mt-0.5">
                by purepearl studio
              </p>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  📶 Beginner
                </span>
                <span className="text-xs font-bold text-[#0E43F9]">
                  $25<span className="text-gray-400 font-normal text-[10px]">/lifetime</span>
                </span>
              </div>
            </div>

            {/* Floating Card: Learning Progress (Bottom-Right overlay) */}
            <div className="absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100 z-20 min-w-[160px] sm:min-w-[190px]">
              <p className="text-gray-500 font-semibold text-xs">
                Learning Progress
              </p>
              <p className="text-2xl sm:text-3xl font-black text-gray-900 my-1">
                55%
              </p>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                <div
                  className="bg-[#D4F04A] h-2 rounded-full"
                  style={{ width: "55%" }}
                />
              </div>
            </div>

            {/* Lime 3D Wavy Ribbon Element */}
            <div className="absolute -right-6 top-16 pointer-events-none hidden sm:block">
              <LimeWavyRibbon className="w-20 h-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
