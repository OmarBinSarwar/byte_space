// ByteSpace — How It Works Section (JS)
import { Search, ShoppingBag, Play, Trophy } from "lucide-react";

const steps = [
  { step: "01", icon: Search,      title: "Find Your Course",     color: "bg-blue-50 text-blue-600",    description: "Browse thousands of courses. Use filters to find the perfect match for your goals." },
  { step: "02", icon: ShoppingBag, title: "Enroll & Start",       color: "bg-yellow-50 text-yellow-600", description: "Enroll with a one-time payment. Get instant lifetime access to all materials." },
  { step: "03", icon: Play,        title: "Learn at Your Pace",   color: "bg-purple-50 text-purple-600", description: "Watch HD videos, complete exercises. Learn on any device, whenever you want." },
  { step: "04", icon: Trophy,      title: "Earn Certificate",     color: "bg-green-50 text-green-600",   description: "Complete the course and earn a shareable certificate. Add it to LinkedIn." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-800/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-2">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Unlock Your Presentations &amp;<br />Creator with Simplicity
          </h2>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">
            Follow these 4 easy steps to begin your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-extrabold text-gray-900">
                {step.step}
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${step.color}`}>
                <step.icon size={26} />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/register"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-xl transition-colors shadow-lg text-lg">
            Get Started Free →
          </a>
        </div>
      </div>
    </section>
  );
}
