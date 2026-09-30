// ============================================
// ByteSpace — Root Layout (JavaScript)
// ============================================

import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

export const metadata = {
  title: {
    default: "ByteSpace — Learn Skills That Matter",
    template: "%s | ByteSpace",
  },
  description:
    "ByteSpace is an online learning platform with 1,500+ courses from expert instructors.",
  keywords: [
    "online learning",
    "courses",
    "web development",
    "design",
    "programming",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
