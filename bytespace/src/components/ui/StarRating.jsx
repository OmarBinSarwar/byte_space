// ByteSpace — StarRating Component
import { Star } from "lucide-react";

export default function StarRating({ rating, maxRating = 5, size = "md", showValue = false, showCount = false, count, className = "" }) {
  const iconSize = { sm: 12, md: 14, lg: 18 }[size] || 14;
  const textSize = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size] || "text-sm";

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, i) => {
          const filled  = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <span key={i} className="relative">
              <Star size={iconSize} className="text-gray-200" fill="currentColor" />
              {(filled || partial) && (
                <span className="absolute inset-0 overflow-hidden" style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}>
                  <Star size={iconSize} className="text-yellow-400" fill="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && <span className={`font-semibold text-yellow-500 ${textSize}`}>{rating.toFixed(1)}</span>}
      {showCount && count !== undefined && <span className={`text-gray-500 ${textSize}`}>({count.toLocaleString()})</span>}
    </div>
  );
}
