// ByteSpace — Featured Courses Section (JS)
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedCourses } from "@/data/courses";
import CourseCard from "@/components/search/CourseCard";

export default function FeaturedCourses() {
  const featured = getFeaturedCourses();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Featured Courses</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Discover Your Passion,<br />Build Your Skills
            </h2>
          </div>
          <Link href="/search" className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
            See All Courses <ArrowRight size={16} />
          </Link>
        </div>

        {/* Tab Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["All", "Web Dev", "Design", "Data Science", "Marketing", "Mobile"].map((tab, i) => (
            <button key={tab}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                i === 0 ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/search"
            className="flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all">
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
