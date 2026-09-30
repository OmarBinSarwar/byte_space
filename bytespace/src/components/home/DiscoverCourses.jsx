"use client";
// ============================================
// ByteSpace — Discover Your Passion, Build Your Skills
// Matching Figma Screenshots (Image 2 & Image 3)
// ============================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const filterRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

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

export default function DiscoverCourses() {
  const [activeTag, setActiveTag] = useState("Featured");

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3 Rows of Filter Pills */}
        <div className="flex flex-col items-center gap-3 mb-16 max-w-5xl mx-auto">
          {filterRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {row.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#D4F04A] text-gray-950 shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courseCardsData.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
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
      </div>
    </section>
  );
}
