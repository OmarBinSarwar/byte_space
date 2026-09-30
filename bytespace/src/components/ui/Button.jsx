// ByteSpace — Button Component
import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  leftIcon,
  rightIcon,
}) {
  const variantClasses = {
    primary:  "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
    secondary:"bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg",
    outline:  "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    ghost:    "text-blue-600 hover:bg-blue-50",
    accent:   "bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-md",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const baseClasses = [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-semibold",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.md,
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
