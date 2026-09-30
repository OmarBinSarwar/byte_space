// ============================================
// ByteSpace — Explore Diverse Learning Paths
// Category Cards with Icon Gradient, Hover Scale,
// and Course Count — 2/3/6 Responsive Grid
// ============================================

import Link from "next/link";
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  {
    name: "Design",
    count: "200+ Courses",
    icon: PenTool,
    href: "/search?category=Design",
    gradient: "from-pink-100 to-[#D4F04A]/40",
    iconColor: "text-pink-600",
  },
  {
    name: "Development",
    count: "340+ Courses",
    icon: Code2,
    href: "/search?category=Development",
    gradient: "from-blue-100 to-[#D4F04A]/40",
    iconColor: "text-[#0E43F9]",
  },
  {
    name: "IT & Software",
    count: "180+ Courses",
    icon: Laptop,
    href: "/search?category=IT+%26+Software",
    gradient: "from-purple-100 to-[#D4F04A]/40",
    iconColor: "text-purple-600",
  },
  {
    name: "Business",
    count: "210+ Courses",
    icon: Building2,
    href: "/search?category=Business",
    gradient: "from-amber-100 to-[#D4F04A]/40",
    iconColor: "text-amber-600",
  },
  {
    name: "Marketing",
    count: "150+ Courses",
    icon: Megaphone,
    href: "/search?category=Marketing",
    gradient: "from-green-100 to-[#D4F04A]/40",
    iconColor: "text-green-600",
  },
  {
    name: "Photography",
    count: "120+ Courses",
    icon: Camera,
    href: "/search?category=Photography",
    gradient: "from-orange-100 to-[#D4F04A]/40",
    iconColor: "text-orange-500",
  },
];

export default function ExploreCategories() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there&apos;s
            something for everyone. Unleash your potential and explore our carefully
            curated categories.
          </p>
        </div>

        {/* 6 Category Cards — 2 cols mobile / 3 tablet / 6 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex flex-col items-center justify-center p-6 sm:p-7 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent hover:-translate-y-2 hover:ring-2 hover:ring-[#0E43F9]/10 transition-all duration-300 text-center"
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
                >
                  <Icon
                    size={26}
                    strokeWidth={2.2}
                    className={cat.iconColor}
                  />
                </div>

                {/* Category Name */}
                <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-[#0E43F9] transition-colors duration-200">
                  {cat.name}
                </h3>

                {/* Course Count */}
                <p className="text-[11px] text-gray-400 font-medium mt-1.5 group-hover:text-gray-500 transition-colors">
                  {cat.count}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
