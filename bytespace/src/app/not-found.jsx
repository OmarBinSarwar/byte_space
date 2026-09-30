// ============================================
// ByteSpace — 404 Not Found Page
// Exactly Matching Figma Screenshot
// (media_1790765286232.png)
// ============================================

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-full bg-white">
      {/* Blue Full-Screen Section with Grid */}
      <section
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: "calc(100vh - 0px)" }}
      >
        {/* Blue Background */}
        <div className="absolute inset-0 bg-[#0E43F9]" />

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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20">
          {/* Giant 404 */}
          <h1
            className="font-black leading-none select-none tracking-tight"
            style={{
              fontSize: "clamp(140px, 25vw, 280px)",
              background: "linear-gradient(180deg, #D4F04A 0%, #a8c42a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.9,
            }}
          >
            404
          </h1>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-8 mb-3 leading-tight tracking-tight max-w-lg">
            The page you are looking<br />for doesn&apos;t exist
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-sm sm:text-base font-normal mb-8 max-w-sm">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-sm px-8 py-3 rounded-full transition-transform active:scale-95 shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
