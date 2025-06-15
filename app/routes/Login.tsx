import type { Route } from "./+types/Login";
import LoginPage from "~/pages/LoginPage/LoginPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Template App" },
    { name: "description", content: "Login into the template App!" },
  ];
}

export default function Login() {
  return <LoginPage />;
}
