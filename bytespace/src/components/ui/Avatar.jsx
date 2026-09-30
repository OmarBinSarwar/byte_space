// ByteSpace — Avatar Component
import Image from "next/image";

const sizeMap = {
  xs: { px: 24, cls: "w-6 h-6 text-xs" },
  sm: { px: 32, cls: "w-8 h-8 text-xs" },
  md: { px: 40, cls: "w-10 h-10 text-sm" },
  lg: { px: 56, cls: "w-14 h-14 text-base" },
  xl: { px: 80, cls: "w-20 h-20 text-xl" },
};

export default function Avatar({ src, alt, size = "md", className = "", fallbackInitials }) {
  const { px, cls } = sizeMap[size] || sizeMap.md;

  if (!src) {
    const initials = fallbackInitials || (alt ? alt.charAt(0).toUpperCase() : "?");
    return (
      <div className={`${cls} rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shrink-0 ${className}`}>
        {initials}
      </div>
    );
  }

  return (
    <div className={`${cls} rounded-full overflow-hidden shrink-0 ${className}`}>
      <Image src={src} alt={alt} width={px} height={px} className="w-full h-full object-cover" />
    </div>
  );
}
