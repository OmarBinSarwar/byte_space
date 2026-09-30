// ============================================
// ByteSpace — Stats Counter Banner
// Full-width blue section with 4 key metrics
// ============================================

const stats = [
  { value: "12K+", label: "Students Enrolled" },
  { value: "70+", label: "Expert Courses" },
  { value: "16", label: "Top Creators" },
  { value: "4.8★", label: "Average Rating" },
];

export default function StatsCounter() {
  return (
    <section className="relative bg-[#0E43F9] py-16 sm:py-20 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle radial glow center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,240,74,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              {/* Separator line above (decorative) */}
              <div className="w-8 h-0.5 bg-[#D4F04A]/40 rounded-full mb-5 group-hover:w-12 transition-all duration-300" />

              {/* Stat Value */}
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D4F04A] tracking-tight leading-none">
                {stat.value}
              </p>

              {/* Stat Label */}
              <p className="text-white/80 text-sm sm:text-base font-medium mt-3 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
