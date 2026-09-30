"use client";
// ============================================
// ByteSpace — Course Details & Course Lessons Page
// Exactly Matching Figma Screenshots
// (media_1790763051665.png & media_1790763051715.png)
// ============================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  BookOpen,
  Video,
  Award,
  MessageSquare,
  CheckCircle2,
  ThumbsUp,
} from "lucide-react";

const sneakPeakImages = [
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const modulesList = [
  {
    moduleNumber: "Module 1",
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    moduleNumber: "Module 2",
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    moduleNumber: "Module 4",
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    moduleNumber: "Module 5",
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    moduleNumber: "Module 6",
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    moduleNumber: "Module 7",
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const reviewsList = [
  {
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "This course completely transformed my approach to digital assets! The module on user-centric design strategies was especially eye-opening.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Alex Rivera",
    role: "Digital Artist & Creator",
    rating: 5,
    date: "1 month ago",
    comment:
      "Clear, actionable, and straight to the point. PurePearl explains complex concepts with phenomenal simplicity.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Product Developer",
    rating: 4.8,
    date: "1 month ago",
    comment:
      "Outstanding modules on interactive media and optimization for various platforms. Worth every penny!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export default function CourseDetailsPage() {
  // Default to "Lesson" tab as shown in the requested Course Lessons design
  const [activeTab, setActiveTab] = useState("Lesson");
  const [shared, setShared] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Build Digital Asset: A Comprehensive Guide",
        url: window.location.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Blue Grid Header Banner */}
      <section className="relative bg-[#0E43F9] pt-28 pb-32 sm:pt-36 sm:pb-44 overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Title, Subtitle, Creator & Badges */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.15]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="text-blue-100 text-sm sm:text-base mt-3 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              {/* Creator link */}
              <p className="text-xs sm:text-sm text-white/90 font-medium mt-3">
                by{" "}
                <Link
                  href="/creator/1"
                  className="hover:underline text-[#D4F04A] font-semibold"
                >
                  purepearl studio
                </Link>
              </p>

              {/* 3 Metadata Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mt-5">
                {/* Intermediate */}
                <div className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                  <BarChart2 size={13} className="text-[#0E43F9]" />
                  <span>Intermediate</span>
                </div>

                {/* Rating */}
                <div className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                  <Star size={13} className="text-yellow-400 fill-yellow-400" />
                  <span>4.8 (172 reviews)</span>
                </div>

                {/* Students */}
                <div className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                  <Users size={13} className="text-[#0E43F9]" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Top-Right Share Button */}
            <div className="self-start">
              <button
                onClick={handleShare}
                className="bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer"
              >
                <Share2 size={15} />
                <span>{shared ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Overlapping Content Area */}
      <section className="relative -mt-20 sm:-mt-28 pb-20 sm:pb-28 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (8 cols): Video Player + Details Content */}
            <div className="lg:col-span-8">
              {/* Video Player Box (Overlapping Header with orange/coral border matching Figma) */}
              <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[460px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 border-2 sm:border-[3px] border-[#FF5722] mb-10 group">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=80"
                  alt="Course video preview"
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Video overlay shade */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Translucent Rounded Rectangle Play Button (Matching Figma) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-13 sm:w-20 sm:h-16 rounded-2xl bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110 cursor-pointer">
                    <Play
                      size={28}
                      className="ml-1 text-white fill-white drop-shadow"
                    />
                  </div>
                </div>
              </div>

              {/* Tabs Row: About, Lesson, Reviews */}
              <div className="flex items-center gap-2 mb-8">
                {["About", "Lesson", "Reviews"].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#D4F04A] text-gray-950 font-bold shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: LESSON TAB CONTENT (Matching Figma Image 1 & 2) */}
              {activeTab === "Lesson" && (
                <div className="animate-in fade-in-50 duration-300">
                  {/* Explore the Modules */}
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mb-2">
                      Explore the Modules
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                      Immerse yourself in the course content as we break down each
                      module into comprehensive lessons, providing practical
                      insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div className="mb-10">
                    <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight mb-5">
                      Lesson List
                    </h3>

                    <div className="space-y-5 sm:space-y-6">
                      {modulesList.map((mod, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 sm:gap-4.5 group"
                        >
                          {/* Lime-green rounded square with black video icon */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#D4F04A] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                            <Video
                              size={20}
                              className="text-gray-950 fill-gray-950"
                            />
                          </div>

                          <div className="pt-0.5">
                            <h4 className="font-bold text-gray-950 text-xs sm:text-sm leading-snug">
                              {mod.title}
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed mt-1 font-normal max-w-2xl">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content */}
                  <div className="mb-8">
                    <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight mb-2">
                      Lesson Content
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
                      Engage with each lesson through captivating video content,
                      detailed textual explanations, and interactive elements.
                      Download resources, complete assignments, and test your
                      understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight mb-2">
                      Lesson Progress Tracking
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mb-5 font-normal">
                      Witness your growth as you complete lessons, with an
                      intuitive progress tracking feature guiding you through your
                      learning journey.
                    </p>

                    {/* Progress Card (Matching Figma) */}
                    <div className="border border-gray-200/90 rounded-2xl p-5 sm:p-6 bg-white max-w-xl shadow-xs">
                      <p className="text-[11px] sm:text-xs font-semibold text-gray-600 mb-1 tracking-wide">
                        Learning Progress
                      </p>
                      <div className="text-3xl sm:text-4xl font-black text-gray-950 mb-3 tracking-tight">
                        55%
                      </div>
                      <div className="w-full bg-gray-200/90 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#D4F04A] h-full rounded-full transition-all duration-700"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ABOUT TAB CONTENT */}
              {activeTab === "About" && (
                <div className="animate-in fade-in-50 duration-300">
                  {/* Description Section */}
                  <div className="mb-12">
                    <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mb-4">
                      Description
                    </h2>

                    <div className="space-y-4 text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course, &ldquo;Build
                        Digital Asset: A Comprehensive Guide.&rdquo; This
                        transformative learning experience invites you to delve deep
                        into the intricacies of crafting impactful digital content.
                        From laying the groundwork with foundational concepts to
                        mastering advanced techniques, this guide is meticulously
                        curated to empower you with the skills essential for
                        navigating the dynamic landscape of digital asset creation.
                      </p>

                      <p>
                        In the initial modules, you&apos;ll establish a solid
                        foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset creation.
                        Understand the fundamental elements that constitute
                        compelling digital content and gain proficiency in leveraging
                        these elements to communicate effectively in the digital
                        realm.
                      </p>

                      <p>
                        As you progress through the course, you&apos;ll ascend to
                        higher levels of expertise, delving into the nuances of
                        design principles that drive impactful creations. Uncover
                        the secrets behind effective visual communication,
                        exploring color theory, typography, and layout strategies
                        that elevate your digital assets to new heights. Engage in
                        hands-on exercises that reinforce your understanding,
                        allowing you to apply these principles in practical
                        scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Section */}
                  <div className="mb-12">
                    <h3 className="text-lg sm:text-xl font-black text-gray-950 tracking-tight mb-4">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {sneakPeakImages.map((src, i) => (
                        <div
                          key={i}
                          className="relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-100"
                        >
                          <Image
                            src={src}
                            alt={`Preview ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points (Checklist) */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-gray-950 tracking-tight mb-4">
                      Key Points
                    </h3>
                    <div className="space-y-3">
                      {keyPoints.map((point) => (
                        <div key={point} className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={18}
                            className="text-[#0E43F9] fill-blue-50 shrink-0"
                          />
                          <span className="text-gray-700 text-xs sm:text-sm font-medium">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS TAB CONTENT */}
              {activeTab === "Reviews" && (
                <div className="animate-in fade-in-50 duration-300">
                  <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight mb-2">
                      Student Reviews
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      Real feedback from learners who mastered digital asset
                      creation with this guide.
                    </p>
                  </div>

                  {/* Reviews Summary Card */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 mb-8">
                    <div className="text-center sm:text-left sm:border-r border-gray-200 sm:pr-8">
                      <div className="text-4xl sm:text-5xl font-black text-gray-950">
                        4.8
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-1 my-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        Course Rating (172 reviews)
                      </p>
                    </div>

                    <div className="flex-1 w-full space-y-2 text-xs">
                      {[
                        { stars: 5, pct: "86%" },
                        { stars: 4, pct: "10%" },
                        { stars: 3, pct: "3%" },
                        { stars: 2, pct: "1%" },
                        { stars: 1, pct: "0%" },
                      ].map((item) => (
                        <div key={item.stars} className="flex items-center gap-3">
                          <span className="w-12 text-gray-600 font-medium">
                            {item.stars} stars
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="bg-[#D4F04A] h-full rounded-full"
                              style={{ width: item.pct }}
                            />
                          </div>
                          <span className="w-8 text-right text-gray-400 font-semibold">
                            {item.pct}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-4">
                    {reviewsList.map((review, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl border border-gray-200/80 bg-white shadow-xs"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden relative">
                              <Image
                                src={review.avatar}
                                alt={review.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-950 text-xs sm:text-sm">
                                {review.name}
                              </h4>
                              <p className="text-[11px] text-gray-400">
                                {review.role} • {review.date}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, s) => (
                              <Star
                                key={s}
                                size={13}
                                className="text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (4 cols): Floating Purchase & Info Card */}
            <div className="lg:col-span-4 sticky top-24">
              <div className="bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-gray-100">
                {/* Header: Lessons & Duration */}
                <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-4">
                  112 Lessons (24 hours)
                </h3>

                {/* Lesson Preview List */}
                <div className="space-y-3 mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="font-medium">
                      01 Introduction to Digital Assets
                    </span>
                    <span className="text-blue-600 font-semibold shrink-0">
                      12 mins
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="font-medium">
                      02 Design Principles for Impacts
                    </span>
                    <span className="text-blue-600 font-semibold shrink-0">
                      21 mins
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="font-medium">
                      03 Advanced Techniques in Digital Creation
                    </span>
                    <span className="text-blue-600 font-semibold shrink-0">
                      16 mins
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 font-medium mb-5">
                  99 more videos
                </p>

                {/* Motivational Quote */}
                <p className="text-xs text-gray-500 leading-snug mb-4">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                {/* Price */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-black text-[#0E43F9]">
                    $25
                  </span>
                  <span className="text-xs text-gray-400 font-medium ml-1">
                    /lifetime
                  </span>
                </div>

                {/* Enroll Now Button */}
                <Link
                  href="/register"
                  className="w-full block text-center bg-[#D4F04A] hover:bg-[#c6e43c] text-gray-950 font-black text-sm py-3.5 rounded-full transition-transform active:scale-95 shadow-md mb-6"
                >
                  Enroll Now
                </Link>

                {/* This course include */}
                <div className="pt-2 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-950 mb-3.5">
                    This course include
                  </h4>
                  <div className="space-y-2.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2.5">
                      <BookOpen size={15} className="text-[#0E43F9] shrink-0" />
                      <span>Learning Resources</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Video size={15} className="text-[#0E43F9] shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award size={15} className="text-[#0E43F9] shrink-0" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MessageSquare
                        size={15}
                        className="text-[#0E43F9] shrink-0"
                      />
                      <span>Private Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Instructor Profile Box */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                        alt="PurePearl Studio"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-xs sm:text-sm">
                        PurePearl Studio
                      </h5>
                      <p className="text-[10px] text-gray-400">
                        Professional Creator
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 leading-snug my-2">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <Link
                    href="/creator/1"
                    className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400 text-[11px] font-semibold transition-colors mt-1"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
