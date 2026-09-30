// ============================================
// ByteSpace — Trusted Partners / Logos Bar
// CSS Marquee Animation — No JS library
// ============================================

"use client";

const logos = [
  {
    id: 1,
    label: "Logoipsum",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#1E293B" />
        <path
          d="M8 12C12 8 20 8 24 12C20 16 12 16 8 20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Logoipsum",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#1E293B" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="6" fill="#1E293B" />
        <path
          d="M16 2V6M16 26V30M2 16H6M26 16H30"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Logoipsum",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#1E293B" />
        <path d="M17 7L10 18H16L15 25L22 14H16L17 7Z" fill="white" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Logoipsum",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="5"
          y="5"
          width="22"
          height="22"
          rx="4"
          stroke="#1E293B"
          strokeWidth="2.5"
        />
        <circle cx="16" cy="16" r="4" fill="#1E293B" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Logoipsum",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#1E293B" />
        <path
          d="M10 20C12 14 20 14 22 20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="13" cy="12" r="2" fill="white" />
      </svg>
    ),
  },
];

// Duplicate logos for seamless infinite loop
const marqueeItems = [...logos, ...logos];

export default function LogosSection() {
  return (
    <section className="bg-white py-12 border-y border-gray-100 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by leading companies worldwide
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-16">
          {marqueeItems.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default select-none"
            >
              {logo.icon}
              <span className="text-lg font-bold tracking-tight text-slate-800">
                {logo.label}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div
          className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-16 absolute top-0 left-0"
          aria-hidden="true"
        >
          {marqueeItems.map((logo, i) => (
            <div
              key={`dup-${logo.id}-${i}`}
              className="inline-flex items-center gap-2.5 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default select-none"
            >
              {logo.icon}
              <span className="text-lg font-bold tracking-tight text-slate-800">
                {logo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
