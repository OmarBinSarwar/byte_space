// ============================================
// ByteSpace — Home Page
// Exact Sequence from Figma Screenshots
// ============================================

import HeroSection from "@/components/home/HeroSection";
import LogosSection from "@/components/home/LogosSection";
import DiscoverCourses from "@/components/home/DiscoverCourses";
import ExploreCategories from "@/components/home/ExploreCategories";
import ProfessionalGrowth from "@/components/home/ProfessionalGrowth";
import StatsCounter from "@/components/home/StatsCounter";
import ManageCourses from "@/components/home/ManageCourses";
import CreatorCTA from "@/components/home/CreatorCTA";
import CommunityTestimonials from "@/components/home/CommunityTestimonials";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section with 3D elements & search */}
      <HeroSection />

      {/* 2. Logos Bar (Trusted Partners — Marquee) */}
      <LogosSection />

      {/* 3. Discover Your Passion, Build Your Skills (Filter pills + 6 Course cards) */}
      <DiscoverCourses />

      {/* 4. Explore Diverse Learning Paths at Bytespace (6 Category cards) */}
      <ExploreCategories />

      {/* 5. Your Path to Professional Growth Starts Here (Stats + Visual) */}
      <ProfessionalGrowth />

      {/* 6. Stats Counter — 12K+ Students / 70+ Courses / 16 Creators / 4.8★ */}
      <StatsCounter />

      {/* 7. Create & Manage Courses Easily (Instructor + Financial cards + Checklist) */}
      <ManageCourses />

      {/* 8. Unlock Your Potential as a Creator with ByteSpace (CTA Banner) */}
      <CreatorCTA />

      {/* 9. Discover What Our Community Is Saying (Testimonial Cards) */}
      <CommunityTestimonials />
    </div>
  );
}
