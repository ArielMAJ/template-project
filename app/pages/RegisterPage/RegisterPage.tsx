import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import EmailInput from "~/components/form-fields/Inputs/EmailInput";
import GenericInput from "~/components/form-fields/Inputs/GenericInput";
import PasswordInput from "~/components/form-fields/Inputs/PasswordInput";
import Logo from "~/components/Logo";
import Navbar from "~/components/navbars/Navbar";
import Button from "~/components/templates/Button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast.dismiss();
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.dismiss();
      toast.error("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_API_URL + "/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        let errorMsg = "Registration failed.";
        if (Array.isArray(data?.detail) && data.detail.length > 0) {
          errorMsg =
            data.detail[0].msg.replace(/^Value error,?\s*/i, "") || errorMsg;
        }
        throw new Error(errorMsg);
      }
      toast.dismiss();
      toast.success("Registered successfully!");
      navigate("/login");
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.message || "Registration failed.");
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
            Create your account
          </h1>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <GenericInput
              title="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              id="confirm-new-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
