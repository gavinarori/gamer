"use client"
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import './login.css'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    sessionStatus !== "authenticated" && (
      <div className="container">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
            />
            <div className="password-toggle">
              <input
                type="checkbox"
                id="togglePassword"
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="togglePassword" className="toggle-label">
                Show Password
              </label>
            </div>
          </div>
          <button className="bg-[#007bff]" type="submit">
            Login
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <p className="text-lg">
          Don't have an account?{" "}
            <a href="/register" className="text-blue-400">Create new one</a>
        </p>
      </div>
    )
  );
};

export default Login;
