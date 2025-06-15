import { type RouteConfig, index } from "@react-router/dev/routes";

// Define application routes
const routes: RouteConfig = [
  index("routes/Landing.tsx"),
  {
    path: "register",
    file: "routes/Register.tsx",
  },
  {
    path: "login",
    file: "routes/Login.tsx",
  },
  {
    path: "dashboard",
    file: "routes/Dashboard.tsx",
  },
];

export default routes;
