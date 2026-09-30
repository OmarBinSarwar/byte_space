// ByteSpace — Badge Component
export default function Badge({ children, variant = "primary", className = "", size = "md" }) {
  const variantClasses = {
    primary: "bg-blue-100 text-blue-700",
    accent:  "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
    danger:  "bg-red-100 text-red-700",
    gray:    "bg-gray-100 text-gray-700",
  };

  const sizeClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs";

  return (
    <span className={`inline-flex items-center rounded-full font-semibold ${sizeClass} ${variantClasses[variant] || variantClasses.primary} ${className}`}>
      {children}
    </span>
  );
}
