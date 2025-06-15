import type { Route } from "./+types/Landing";
import LandingPage from "~/pages/LandingPage/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Template App" },
    { name: "description", content: "Welcome to this template App!" },
  ];
}

export default function Landing() {
  return <LandingPage />;
}
