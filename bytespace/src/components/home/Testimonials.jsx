// ByteSpace — Testimonials Section (JS)
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/courses";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Discover What Our<br />Community is Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, index) => (
            <div key={t.id}
              className={`relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${
                index === 1 ? "md:-mt-4 md:mb-4 border-blue-200 shadow-lg" : ""
              }`}>
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <Quote size={18} className="text-white" />
                </div>
              </div>

              <div className="mt-4 mb-4"><StarRating rating={t.rating} size="md" /></div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.comment}&rdquo;</p>

              <div className="mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full">
                  📚 {t.courseName}
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <Image src={t.userAvatar} alt={t.userName} width={44} height={44}
                  className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.userName}</p>
                  <p className="text-xs text-gray-500">{t.userTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-blue-600 rounded-2xl p-8 text-white text-center">
          {[
            { label: "Happy Students",       value: "200K+" },
            { label: "Courses Completed",    value: "1.2M+" },
            { label: "Average Rating",       value: "4.8 ⭐" },
            { label: "Countries Reached",    value: "85+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-extrabold">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
