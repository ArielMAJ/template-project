import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import EmailInput from "~/components/form-fields/Inputs/EmailInput";
import PasswordInput from "~/components/form-fields/Inputs/PasswordInput";
import Logo from "~/components/Logo";
import Navbar from "~/components/navbars/Navbar";
import Button from "~/components/templates/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.dismiss();
      toast.error("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_API_URL + "/auth/token",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            grant_type: "password",
            username: email,
            password: password,
          }).toString(),
        }
      );
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("expires_at", data.expires_at);
      navigate("/dashboard");
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-8 w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-xl shadow">
          <div className="w-32 mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Login
          </h1>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              isNewPassword={false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
