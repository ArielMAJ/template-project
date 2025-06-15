import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

// You can use any icon library. Here, we'll use Heroicons (SVG inline)
const LogoutIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
    />
  </svg>
);

type User = {
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch(
          import.meta.env.VITE_BACKEND_API_URL + "/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!token || response.status === 401 || response.status === 403) {
          throw new Error("Unauthorized, please log in again.");
        }
        if (!response.ok) {
          throw new Error("Failed to fetch user info. Please log in again.");
        }
        const data = await response.json();
        setUser({ name: data.name, email: data.email });
      } catch (err: any) {
        toast.dismiss();
        navigate("/login");
        toast.error(err.message || "Could not load user info.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
    toast.success("Logged out successfully.");
    navigate("/login");
  };

  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-between">
        {user && (
          <>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Welcome, {user.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              title="Logout"
              aria-label="Logout"
            >
              <LogoutIcon />
            </button>
          </>
        )}
      </header>
      <main className="p-8">
        {loading ? (
          <div>Loading dashboard...</div>
        ) : (
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Dashboard
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is your dashboard. Add your widgets and content here.
            </p>
          </section>
        )}
      </main>
    </>
  );
}
