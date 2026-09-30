// ============================================
// ByteSpace — Community Testimonials
// Enhanced: Quote mark, 5-Star rating, left-border
// accent, elevated card shadow
// ============================================

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
    bgCircle: "bg-amber-100",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    bgCircle: "bg-gray-200",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    bgCircle: "bg-blue-100",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

// 5-star rating component
function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mt-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CommunityTestimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-50/60 via-white to-lime-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 2-Column Split */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-[28px] p-8 sm:p-9 border border-gray-100/80 shadow-[0_6px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_48px_rgba(14,67,249,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col border-l-[3px] border-l-[#0E43F9] overflow-hidden"
            >
              {/* Decorative quotation mark */}
              <span className="absolute top-5 right-7 text-7xl font-black leading-none text-[#D4F04A] select-none pointer-events-none opacity-80">
                &ldquo;
              </span>

              <div className="relative z-10">
                {/* Avatar with circle bg */}
                <div className="mb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${t.bgCircle} p-0.5 inline-flex items-center justify-center overflow-hidden shadow-sm`}
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl">
                  {t.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#0E43F9] mt-0.5">
                  {t.role}
                </p>

                {/* 5-Star Rating */}
                <StarRating />

                {/* Quote Text */}
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
