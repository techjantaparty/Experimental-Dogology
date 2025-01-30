"use client";

import SecondaryButton from "@/components/SecondaryButton";
import React, { useState } from "react";
import Loader from "@/components/Loader/Loader";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      return setError("Please fill all the fields");
    }

    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setLoading(false);

    if (result?.error) {
      toast.error(result.error.toString(), {
        duration: 3000,
        position: "top-right",
      });
    }

    if (result?.url) {
      toast.success("Login successful", {
        duration: 3000,
        position: "top-right",
      });
      router.replace("/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="px-6 relative overflow-hidden bg-gradient-to-b from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B] flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full bg-[#1B1B1B] p-6 rounded-lg shadow-2xl">
        <h3 className="text-xl font-bold">Login to your account</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-gray-400 mt-4">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              id="username"
              className="w-full bg-[#2d2d2d] text-gray-100 p-2 mt-1 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-gray-400 mt-4">
              Password
            </label>
            <div className="flex items-center space-x-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordType}
                id="password"
                className="w-full bg-[#2d2d2d] text-gray-100 p-2 mt-1 rounded-md"
              />
              <div
                onClick={() => {
                  setPasswordType(
                    passwordType === "password" ? "text" : "password"
                  );
                }}
                className="bg-white p-1.5 rounded-full hover:bg-white/90 cursor-pointer"
              >
                {passwordType === "password" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          <SecondaryButton
            disabled={loading}
            onClick={handleLogin}
            className="w-full"
          >
            {loading ? <Loader /> : "Login"}
          </SecondaryButton>
        </div>
        <div>
          <p className="text-gray-400 text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-white underline underline-offset-2"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
