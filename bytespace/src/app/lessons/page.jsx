import { redirect } from "next/navigation";

export default function LessonsRedirectPage() {
  redirect("/courses/1");
}
