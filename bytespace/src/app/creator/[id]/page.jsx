"use client";
// ============================================
// ByteSpace — Creator Profile Page
// Exactly Matching Figma Screenshots
// (media_1790764389998.png & media_1790764390077.png)
// ============================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, BarChart2, Share2, Star } from "lucide-react";

// ─── Static Data (matching Figma exactly) ────────────────────────────────────

const creator = {
  name: "PurePearl Studio",
  role: "Creator",
  title: "Passionate UI/UX, Web designer",
  bio: "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\nive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  products: 3,
  followers: 12,
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
};

const courseCardsData = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
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

// ─── Course Card Component (same as DiscoverCourses) ─────────────────────────

function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group bg-white rounded-3xl border border-gray-200/80 p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Thumbnail */}
      <div>
        <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-4 bg-gray-100">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlaid Badges */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-x-auto">
            <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap">
              {course.lessons}
            </span>
            <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap">
              {course.duration}
            </span>
            <span className="bg-black/55 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap">
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
            <Star size={14} className="text-gray-400 fill-gray-400" />
          </div>
        </div>

        {/* Creator */}
        <p className="text-xs text-[#0E43F9] font-medium mt-1">
          by {course.creator}
        </p>

        {/* Level badge & Avatar stack */}
        <div className="flex items-center justify-between mt-4">
          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            <BarChart2 size={12} className="text-gray-600" /> {course.level}
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
        <span className="text-xl font-black text-[#0E43F9]">{course.price}</span>
        <span className="text-xs text-gray-400 font-medium ml-1">/lifetime</span>
      </div>
    </Link>
  );
}

// ─── Creator Profile Page ─────────────────────────────────────────────────────

export default function CreatorProfilePage() {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="w-full bg-white">

      {/* ── 1. Blue Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0E43F9] pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden">
        {/* Grid Pattern */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Top row: Avatar + Name/Role + Follow */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
            {/* Left: Avatar + Name */}
            <div className="flex items-center gap-5">
              {/* Avatar — rounded square with slight pink/warm tint as in Figma */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl shrink-0 bg-[#f0c0a0]">
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                {/* Name + Creator pill */}
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {creator.name}
                  </h1>
                  <span className="bg-[#D4F04A] text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                    {creator.role}
                  </span>
                </div>
                <p className="text-white/80 text-sm font-medium">{creator.title}</p>
              </div>
            </div>

            {/* Right: Follow button */}
            <div className="self-start sm:self-center shrink-0">
              <button
                onClick={() => setFollowed(!followed)}
                className={`px-8 py-2.5 rounded-full text-sm font-black transition-all active:scale-95 shadow-md cursor-pointer ${
                  followed
                    ? "bg-white text-gray-950 border-2 border-white"
                    : "bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950"
                }`}
              >
                {followed ? "Following" : "Follow"}
              </button>
            </div>
          </div>

          {/* Bio text */}
          <div className="max-w-4xl space-y-1 mb-7">
            {creator.bio.split("\n").map((line, i) => (
              <p key={i} className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal">
                {line}
              </p>
            ))}
          </div>

          {/* Products & Followers pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-white/10 border border-white/30 text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm">
              {creator.products} Products
            </span>
            <span className="bg-white/10 border border-white/30 text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full backdrop-blur-sm">
              {creator.followers} Followers
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. Filter Bar ───────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-300 px-3.5 py-1.5 rounded-full hover:border-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
              <SlidersHorizontal size={13} />
              Filter
            </button>
            <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-300 px-3.5 py-1.5 rounded-full hover:border-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
              <BarChart2 size={13} />
              Level
            </button>
            <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-300 px-3.5 py-1.5 rounded-full hover:border-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
              {/* Category icon */}
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="4" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Category
            </button>
          </div>

          {/* Right: Most relevant */}
          <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 border border-gray-300 px-3.5 py-1.5 rounded-full hover:border-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
            {/* Sort icon */}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Most relevant
          </button>
        </div>
      </section>

      {/* ── 3. Course Grid ──────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courseCardsData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
