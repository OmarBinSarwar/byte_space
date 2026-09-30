// ByteSpace — Categories Section (JS)
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Browse By Category</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Explore Diverse Learning<br />Paths &amp; Showcase
            </h2>
          </div>
          <Link href="/search" className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/search?category=${encodeURIComponent(cat.name)}`}>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 cursor-pointer text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${cat.color}15` }}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.courseCount} Courses</p>
                <div className="mt-4 h-1 rounded-full mx-auto w-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: cat.color }} />
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden flex justify-center mt-6">
          <Link href="/search" className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
