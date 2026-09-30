// ============================================
// ByteSpace — Unlock Your Potential as a Creator
// Matching Figma Screenshot (Image 4 Bottom)
// ============================================

import Link from "next/link";
import {
  LimeWavyRibbon,
  WhiteDonut,
  WhiteSquiggle,
  WhitePyramid,
  WhiteSpring,
  LimePrism,
} from "./Shapes3D";

export default function CreatorCTA() {
  return (
    <section className="relative bg-[#0E43F9] py-24 sm:py-32 overflow-hidden text-center">
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

      {/* Floating 3D Shapes on Left */}
      <div className="absolute left-2 sm:left-12 top-8 pointer-events-none hidden sm:block">
        <LimeWavyRibbon className="w-24 h-40 sm:w-32 sm:h-52" />
      </div>

      <div className="absolute left-6 sm:left-24 top-40 sm:top-56 pointer-events-none hidden sm:block">
        <WhiteSquiggle className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>

      <div className="absolute left-2 sm:left-16 -bottom-6 pointer-events-none">
        <WhiteDonut className="w-28 h-28 sm:w-40 sm:h-40" />
      </div>

      {/* Floating 3D Shapes on Right */}
      <div className="absolute right-4 sm:right-16 top-10 pointer-events-none hidden sm:block">
        <WhitePyramid className="w-24 h-32 sm:w-32 sm:h-40" />
      </div>

      <div className="absolute right-2 sm:right-28 top-44 sm:top-60 pointer-events-none hidden sm:block">
        <WhiteSpring className="w-20 h-32 sm:w-24 sm:h-36" />
      </div>

      <div className="absolute -right-4 sm:right-8 -bottom-6 pointer-events-none">
        <LimeWavyRibbon className="w-28 h-44 sm:w-36 sm:h-56 rotate-45" />
      </div>

      {/* Center Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.2]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="text-blue-100/90 text-sm sm:text-base mt-6 max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-9">
          <Link
            href="/register"
            className="inline-block bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-transform active:scale-95 shadow-xl hover:shadow-2xl"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
