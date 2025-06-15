import RegisterPage from "~/pages/RegisterPage/RegisterPage";
import type { Route } from "./+types/Register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Template App" },
    { name: "description", content: "Register in the template app!" },
  ];
}

export default function Register() {
  return <RegisterPage />;
}
