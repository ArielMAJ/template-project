import DashboardPage from "~/pages/Dashboard/DashboardPage";
import type { Route } from "./+types/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - Template App" },
    { name: "description", content: "Template App's dashboard page." },
  ];
}

export default function Dashboard() {
  return <DashboardPage />;
}
