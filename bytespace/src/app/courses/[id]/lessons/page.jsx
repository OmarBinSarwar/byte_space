"use client";
// ============================================
// ByteSpace — Course Lessons Page (JavaScript)
// ============================================

import React, { useState } from "react";
import Link from "next/link";
import {
  Play,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Menu,
  X,
  Clock,
  Award,
} from "lucide-react";
import { courses, courseSections } from "@/data/courses";

export default function CourseLessonsPage() {
  const course = courses[0];
  const [activeLesson, setActiveLesson] = useState(
    courseSections[0].lessons[0]
  );
  const [activeSection, setActiveSection] = useState(courseSections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState(
    new Set(["l1", "l2"])
  );

  const allLessons = courseSections.flatMap((s) => s.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === activeLesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
  const completedCount = completedLessons.size;
  const totalCount = allLessons.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const markComplete = () => {
    setCompletedLessons((prev) => new Set([...prev, activeLesson.id]));
    if (nextLesson) setActiveLesson(nextLesson);
  };

  return (
    <div className="page-content min-h-screen bg-gray-950 flex flex-col">
      {/* Top Bar */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={16} className="text-gray-400" />
            <span className="text-white font-bold text-sm line-clamp-1 hidden sm:block">
              {course.title}
            </span>
          </Link>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {completedCount}/{totalCount}
            </span>
          </div>
          <Link
            href={`/courses/${course.id}/reviews`}
            className="text-xs text-blue-400 hover:underline hidden sm:block"
          >
            Leave a Review
          </Link>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } shrink-0 bg-gray-900 border-r border-gray-800 overflow-y-auto transition-all duration-300`}
        >
          <div className="p-4">
            <h3 className="text-white font-bold text-sm mb-4">Course Content</h3>

            {/* Progress bar */}
            <div className="bg-gray-800 rounded-xl p-3 mb-4">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{progressPercent}% complete</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-2">
              {courseSections.map((section) => {
                const sectionCompleted = section.lessons.filter((l) =>
                  completedLessons.has(l.id)
                ).length;
                return (
                  <div key={section.id}>
                    <button
                      onClick={() =>
                        setActiveSection(
                          activeSection === section.id ? "" : section.id
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-white text-xs font-semibold">
                        {section.title}
                      </span>
                      <span className="text-xs text-gray-400">
                        {sectionCompleted}/{section.lessons.length}
                      </span>
                    </button>

                    {activeSection === section.id && (
                      <div className="ml-2 space-y-1 mt-1">
                        {section.lessons.map((lesson) => {
                          const isActive = lesson.id === activeLesson.id;
                          const isDone = completedLessons.has(lesson.id);
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setActiveLesson(lesson)}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
                                isActive
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-gray-800 text-gray-400 hover:text-white"
                              }`}
                            >
                              <span className="shrink-0">
                                {isDone ? (
                                  <CheckCircle
                                    size={14}
                                    className="text-green-400"
                                  />
                                ) : (
                                  <Play
                                    size={14}
                                    className={
                                      isActive ? "text-white" : "text-gray-500"
                                    }
                                  />
                                )}
                              </span>
                              <span className="flex-1 text-xs line-clamp-1">
                                {lesson.title}
                              </span>
                              <span className="text-xs opacity-70 shrink-0">
                                {lesson.duration}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main — Video Player */}
        <main className="flex-1 overflow-y-auto">
          <div className="bg-black aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/20 cursor-pointer transition-colors">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-white font-semibold">{activeLesson.title}</p>
              <p className="text-gray-400 text-sm mt-1">
                {activeLesson.duration}
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => prevLesson && setActiveLesson(prevLesson)}
                disabled={!prevLesson}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              <div className="text-center">
                <p className="text-white text-sm font-medium">
                  {activeLesson.title}
                </p>
                <p className="text-gray-400 text-xs">
                  Lesson {currentIndex + 1} of {allLessons.length}
                </p>
              </div>

              <button
                onClick={markComplete}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                {completedLessons.has(activeLesson.id) ? (
                  <>
                    Next <ChevronRight size={16} />
                  </>
                ) : (
                  <>
                    Complete &amp; Next <ChevronRight size={16} />
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h1 className="text-white text-xl font-bold mb-3">
                {activeLesson.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {activeLesson.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={14} />
                  Video Lecture
                </span>
                {completedLessons.has(activeLesson.id) && (
                  <span className="flex items-center gap-1 text-green-400">
                    <CheckCircle size={14} />
                    Completed
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                In this lesson, you will learn everything about{" "}
                {activeLesson.title.toLowerCase()}. Follow along with the video
                and practice the concepts in your own environment.
              </p>
            </div>

            {completedCount === totalCount && (
              <div className="mt-6 bg-yellow-400 rounded-2xl p-6 text-center">
                <Award size={32} className="mx-auto mb-2 text-gray-900" />
                <h3 className="font-bold text-gray-900 text-lg">
                  🎉 Course Complete!
                </h3>
                <p className="text-gray-700 text-sm mt-1">
                  Congratulations! You&apos;ve completed all lessons.
                </p>
                <button className="mt-4 px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                  Download Certificate
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
