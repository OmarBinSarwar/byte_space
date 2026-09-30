// ByteSpace — CTA Section (JS)
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl overflow-hidden p-10 lg:p-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-800/30 rounded-full" />
            <div className="absolute top-10 left-1/4 w-10 h-10 bg-yellow-400 rounded-xl rotate-12 opacity-60" />
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-white text-sm font-medium mb-6">
                <Sparkles size={14} className="text-yellow-400" />
                Limited Time Offer — 80% Off!
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                Unlock Your Potential &amp;<br />
                <span className="text-yellow-400">Create with Simplicity</span>
              </h2>
              <p className="text-blue-200 text-lg mb-8 max-w-lg">
                Join 200,000+ learners and get access to all our premium courses today.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/register"
                  className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-base">
                  Start for Free <ArrowRight size={18} />
                </a>
                <a href="/search"
                  className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base">
                  Explore Courses
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎓", title: "1,500+ Courses",    desc: "All categories covered" },
                { emoji: "👨‍🏫", title: "500+ Experts",     desc: "Top industry instructors" },
                { emoji: "📱", title: "Learn Anywhere",    desc: "Mobile & desktop ready" },
                { emoji: "🏆", title: "Certificates",      desc: "Industry recognized" },
                { emoji: "♾️", title: "Lifetime Access",   desc: "No expiry, ever" },
                { emoji: "💬", title: "24/7 Support",      desc: "Always here to help" },
              ].map((item) => (
                <div key={item.title}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-white/10">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-blue-300 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
