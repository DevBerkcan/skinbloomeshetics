import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect to the home page if the route does not exist
  redirect("/"); // This will send the user to the home page immediately

  return null; // No need to display anything
}
