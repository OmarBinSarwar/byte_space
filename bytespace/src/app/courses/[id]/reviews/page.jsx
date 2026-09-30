// ByteSpace — Course Reviews Page (JavaScript)
import Link from "next/link";
import { ChevronLeft, Star, ThumbsUp } from "lucide-react";
import { courses, courseReviews } from "@/data/courses";
import StarRating from "@/components/ui/StarRating";
import Avatar from "@/components/ui/Avatar";

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export default async function CourseReviewsPage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id) || courses[0];
  const ratingBreakdown = [
    { stars: 5, count: 2460, percent: 76 },
    { stars: 4, count: 564, percent: 17 },
    { stars: 3, count: 162, percent: 5 },
    { stars: 2, count: 32, percent: 1 },
    { stars: 1, count: 22, percent: 1 },
  ];
  const allReviews = [
    ...courseReviews,
    ...courseReviews.map((r) => ({ ...r, id: r.id + "_2" })),
    ...courseReviews.map((r) => ({ ...r, id: r.id + "_3" })),
  ];

  return (
    <div className="page-content min-h-screen bg-gray-50">
      <div className="bg-blue-700 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-4 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Course
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Student Reviews
          </h1>
          <p className="text-blue-200 text-sm line-clamp-1">{course.title}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Rating Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Rating Overview</h2>
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <p className="text-7xl font-extrabold text-yellow-400">
                {course.rating}
              </p>
              <StarRating
                rating={course.rating}
                size="lg"
                className="justify-center mt-3"
              />
              <p className="text-gray-500 text-sm mt-2">
                {course.reviewCount.toLocaleString()} reviews
              </p>
            </div>
            <div className="space-y-3">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12 shrink-0">
                    <Star
                      size={13}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {r.stars}
                    </span>
                  </div>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${r.percent}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-10 text-right">
                    {r.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Write Review */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Write a Review</h3>
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star}>
                <Star
                  size={28}
                  className="text-gray-200 hover:text-yellow-400 transition-colors"
                  fill="currentColor"
                />
              </button>
            ))}
          </div>
          <textarea
            placeholder="Share your experience..."
            rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 resize-none"
          />
          <button className="mt-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm">
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {allReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Avatar
                  src={review.userAvatar}
                  alt={review.userName}
                  size="md"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-bold text-gray-900 text-sm">
                        {review.userName}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={review.rating} size="sm" />
                        <span className="text-xs text-gray-400">
                          {review.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {review.comment}
                  </p>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors mt-3">
                    <ThumbsUp size={12} />
                    Helpful ({review.helpful})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
