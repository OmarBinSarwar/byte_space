// ByteSpace — CourseCard Component
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, BookOpen, BarChart2 } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";

export default function CourseCard({ course, variant = "grid", className = "" }) {
  const levelColorMap = { Beginner: "success", Intermediate: "warning", Advanced: "danger" };

  if (variant === "list") {
    return (
      <Link href={`/courses/${course.id}`}>
        <div className={`flex gap-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 p-4 group ${className}`}>
          <div className="relative w-44 h-28 rounded-lg overflow-hidden shrink-0">
            <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 mb-2">
              {course.isBestseller && <Badge variant="accent">Bestseller</Badge>}
              {course.isNew && <Badge variant="success">New</Badge>}
            </div>
            <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{course.creator.name}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
              <StarRating rating={course.rating} size="sm" showValue showCount count={course.reviewCount} />
              <span className="flex items-center gap-1"><Users size={12} />{course.studentCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xl font-bold text-blue-600">৳{course.price}</p>
            {course.originalPrice && <p className="text-sm text-gray-400 line-through">৳{course.originalPrice}</p>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/courses/${course.id}`}>
      <div className={`bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden group ${className}`}>
        <div className="relative w-full h-44 overflow-hidden">
          <Image src={course.thumbnail} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute top-3 left-3 flex gap-2">
            {course.isBestseller && <Badge variant="accent">Bestseller</Badge>}
            {course.isNew && <Badge variant="success">New</Badge>}
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge variant={levelColorMap[course.level] || "gray"} size="sm">{course.level}</Badge>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">{course.category}</p>
          <h3 className="font-bold text-gray-900 line-clamp-2 text-sm leading-snug group-hover:text-blue-600 transition-colors">{course.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{course.creator.name}</p>
          <div className="mt-2">
            <StarRating rating={course.rating} size="sm" showValue showCount count={course.reviewCount} />
          </div>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span>
            <span className="flex items-center gap-1"><BookOpen size={12} />{course.lessonCount} lessons</span>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-blue-600">৳{course.price}</span>
              {course.originalPrice && <span className="text-sm text-gray-400 line-through">৳{course.originalPrice}</span>}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Users size={12} /><span>{course.studentCount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
