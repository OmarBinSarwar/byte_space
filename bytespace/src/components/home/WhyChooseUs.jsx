// ByteSpace — Why Choose Us Section (JS)
import { Shield, Globe, Clock, Award, Headphones, TrendingUp } from "lucide-react";

const features = [
  { icon: Globe,       title: "Learn from Anywhere",    color: "bg-blue-100 text-blue-600",   description: "Access your courses anytime, anywhere — on desktop, tablet, or mobile." },
  { icon: Award,       title: "Industry Certificates",  color: "bg-yellow-100 text-yellow-600",description: "Earn recognized certificates upon course completion. Boost your resume." },
  { icon: Headphones,  title: "24/7 Expert Support",    color: "bg-green-100 text-green-600",  description: "Get help from instructors and peers anytime. Never get stuck." },
  { icon: Clock,       title: "Learn at Your Own Pace", color: "bg-purple-100 text-purple-600",description: "No deadlines. Lifetime access to all your courses." },
  { icon: TrendingUp,  title: "Career-Focused Content", color: "bg-pink-100 text-pink-600",   description: "Courses designed with industry experts to teach what employers want." },
  { icon: Shield,      title: "30-Day Money-Back",      color: "bg-orange-100 text-orange-600",description: "Not satisfied? Full refund within 30 days. Zero risk." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Why ByteSpace?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Your Path to Professional<br />Growth Starts Here
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We are committed to providing the best learning experience. Join over 200,000 students who have transformed their careers with ByteSpace.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Top Instructors", "HD Quality Videos", "Downloadable Resources", "Community Access"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />{item}
                </span>
              ))}
            </div>
            <a href="/register"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
              Start Learning Today →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title}
                className="group bg-gray-50 hover:bg-white hover:shadow-lg rounded-2xl p-5 border border-gray-100 hover:border-blue-100 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${feature.color}`}>
                  <feature.icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
