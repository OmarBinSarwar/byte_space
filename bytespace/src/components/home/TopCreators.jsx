// ByteSpace — Top Creators Section (JS)
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import { creators } from "@/data/creators";

export default function TopCreators() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Instructors</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Explore Diverse Learning<br />Profile &amp; Showcase
            </h2>
          </div>
          <Link href="/creator/1" className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline">
            See All Creators <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <Link key={creator.id} href={`/creator/${creator.id}`}>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image src={creator.avatar} alt={creator.name} width={56} height={56}
                        className="w-14 h-14 rounded-2xl object-cover" />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{creator.name}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{creator.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold text-yellow-500">
                    <Star size={14} fill="currentColor" />{creator.rating}
                  </div>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{creator.bio}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1"><Users size={12} className="text-blue-500" />{creator.studentCount.toLocaleString()} Students</span>
                  <span className="flex items-center gap-1"><BookOpen size={12} className="text-blue-500" />{creator.courseCount} Courses</span>
                  <span className="ml-auto flex items-center gap-1 text-blue-600 font-semibold">View Profile <ArrowRight size={10} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
