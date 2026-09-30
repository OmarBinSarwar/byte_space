"use client";
// ============================================
// ByteSpace — Search Page
// Exactly Matching Figma Screenshots
// (media_1790661217846.png, 876.png, 783.png)
// ============================================

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  BarChart2,
  Tag,
  ArrowDownUp,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Exactly the 6 products shown in the Figma screenshots
const baseProducts = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    category: "UI/UX Design",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
  {
    id: "2",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    category: "Marketing",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
  {
    id: "3",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    category: "UI/UX Design",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    creator: "purepearl studio",
    category: "Creative Marketing",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    creator: "purepearl studio",
    category: "Marketing",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    creator: "purepearl studio",
    category: "Creative Marketing",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    studentsBadge: "26+",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    ],
  },
];

// Exactly 18 products as requested from Figma (6 courses x 3 = 18 products in 6 rows of 3)
const allCoursesData = [
  ...baseProducts.map((p) => ({ ...p, id: `${p.id}-1` })),
  ...baseProducts.map((p) => ({ ...p, id: `${p.id}-2` })),
  ...baseProducts.map((p) => ({ ...p, id: `${p.id}-3` })),
];

const categoryPills = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [courseTypeDropdown, setCourseTypeDropdown] = useState(false);

  // Filter logic
  const filteredCourses = useMemo(() => {
    let result = [...allCoursesData];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.creator.toLowerCase().includes(q)
      );
    }

    if (selectedTag !== "Featured") {
      result = result.filter(
        (c) =>
          c.category.toLowerCase().includes(selectedTag.toLowerCase()) ||
          c.title.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }

    if (selectedLevel !== "All") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    if (selectedCategory !== "All") {
      result = result.filter((c) => c.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedTag, selectedLevel, selectedCategory]);

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTag("Featured");
    setSelectedLevel("All");
    setSelectedCategory("All");
    setSortOption("Most relevant");
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Full-Width Blue Grid Hero Header (Matching Figma Image 1) */}
      <section className="relative bg-[#0E43F9] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-8">
            Find Your Next Course
          </h1>

          {/* Search Pill Input with Courses Dropdown Button */}
          <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full p-1.5 shadow-2xl pl-5">
            <Search size={18} className="text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-900 text-sm placeholder-gray-400 focus:outline-none"
            />

            {/* Courses ⌄ Pill Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCourseTypeDropdown(!courseTypeDropdown)}
                className="bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Courses</span>
                <ChevronDown size={14} strokeWidth={2.5} />
              </button>

              {courseTypeDropdown && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 text-left">
                  {["All Courses", "Popular", "New Releases"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setCourseTypeDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#0E43F9] cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Controls Bar (Matching Figma Image 1 Middle) */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left Filter Pill Buttons: Filter, Level, Category */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Filter Button */}
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <SlidersHorizontal size={14} className="text-gray-500" />
                <span>Filter</span>
              </button>

              {/* Level Dropdown Pill */}
              <div className="relative">
                <button
                  onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    selectedLevel !== "All"
                      ? "border-[#0E43F9] text-[#0E43F9] bg-blue-50/50"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <BarChart2 size={14} className="text-gray-500" />
                  <span>
                    {selectedLevel === "All" ? "Level" : selectedLevel}
                  </span>
                  <ChevronDown size={13} className="text-gray-400" />
                </button>

                {showLevelDropdown && (
                  <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40 text-left">
                    {["All", "Beginner", "Intermediate", "Advanced"].map(
                      (lvl) => (
                        <button
                          key={lvl}
                          onClick={() => {
                            setSelectedLevel(lvl);
                            setShowLevelDropdown(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-xs font-semibold cursor-pointer ${
                            selectedLevel === lvl
                              ? "text-[#0E43F9] bg-blue-50"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {lvl === "All" ? "All Levels" : lvl}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Category Dropdown Pill */}
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    selectedCategory !== "All"
                      ? "border-[#0E43F9] text-[#0E43F9] bg-blue-50/50"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Tag size={14} className="text-gray-500" />
                  <span>
                    {selectedCategory === "All"
                      ? "Category"
                      : selectedCategory}
                  </span>
                  <ChevronDown size={13} className="text-gray-400" />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40 text-left">
                    {[
                      "All",
                      "UI/UX Design",
                      "Marketing",
                      "Creative Marketing",
                      "Cooking",
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowCategoryDropdown(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-xs font-semibold cursor-pointer ${
                          selectedCategory === cat
                            ? "text-[#0E43F9] bg-blue-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {cat === "All" ? "All Categories" : cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Dropdown: Most relevant */}
            <div className="relative self-end sm:self-auto">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <ArrowDownUp size={14} className="text-gray-500" />
                <span>{sortOption}</span>
                <ChevronDown size={13} className="text-gray-400" />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-40 text-left">
                  {["Most relevant", "Highest Rated", "Price: Low to High"].map(
                    (opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSortOption(opt);
                          setShowSortDropdown(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-xs font-semibold cursor-pointer ${
                          sortOption === opt
                            ? "text-[#0E43F9] bg-blue-50"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 3. Category Tags Row (Matching Figma Image 1 Pills) */}
          <div className="flex items-center gap-2 sm:gap-2.5 mt-6 overflow-x-auto pb-2 scrollbar-none">
            {categoryPills.map((pill) => {
              const isActive = selectedTag === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setSelectedTag(pill)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#D4F04A] text-gray-950 shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Course Cards Grid (Exact 12 Cards matching Figma Image 2 & 3) */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course, index) => (
              <Link
                key={`${course.id}-${index}`}
                href={`/courses/${course.id.split("-")[0]}`}
                className="group bg-white rounded-3xl border border-gray-200/80 p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div>
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlaid Badges at bottom of image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                      <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                        {course.lessons}
                      </span>
                      <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                        {course.duration}
                      </span>
                      <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                        {course.comments}
                      </span>
                    </div>
                  </div>

                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2 mt-2">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#0E43F9] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600 font-bold text-sm shrink-0">
                      <span>{course.rating}</span>
                      <Star
                        size={14}
                        className="text-gray-400 fill-gray-400"
                      />
                    </div>
                  </div>

                  {/* Creator */}
                  <p className="text-xs text-[#0E43F9] font-medium mt-1">
                    by {course.creator}
                  </p>

                  {/* Level badge & Avatar stack */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      📶 {course.level}
                    </span>

                    <div className="flex items-center">
                      <div className="flex -space-x-2 overflow-hidden">
                        {course.avatars.map((avatar, idx) => (
                          <Image
                            key={idx}
                            src={avatar}
                            alt="Student"
                            width={24}
                            height={24}
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                          />
                        ))}
                      </div>
                      <span className="ml-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4F04A] text-gray-950">
                        {course.studentsBadge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Row */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-baseline">
                  <span className="text-xl font-black text-[#0E43F9]">
                    {course.price}
                  </span>
                  <span className="text-xs text-gray-400 font-medium ml-1">
                    /lifetime
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 5. Pagination (Exact Matching Figma Image 3: < 1 2 3 4 5 >) */}
          <div className="mt-16 flex items-center justify-center gap-2 sm:gap-3">
            {/* Previous Arrow Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Page Numbers 1, 2, 3, 4, 5 */}
            {[1, 2, 3, 4, 5].map((num) => {
              const isCurrent = currentPage === num;
              return (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? "text-gray-950 font-black scale-105"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {num}
                </button>
              );
            })}

            {/* Next Arrow Button */}
            <button
              onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
              disabled={currentPage === 5}
              aria-label="Next Page"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
