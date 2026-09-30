import { redirect } from "next/navigation";

export default function LessonRedirectPage() {
  redirect("/courses/1");
}
