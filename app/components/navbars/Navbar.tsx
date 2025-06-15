import { Link } from "react-router";
import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4">
      <Link to="/" className="w-32 block">
        <Logo />
      </Link>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
