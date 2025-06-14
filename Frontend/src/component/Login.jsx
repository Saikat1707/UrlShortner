import React, { useState } from 'react';
import { loginUser } from "../axios/authUser";
import { toast } from "react-toastify";
import { Link, useNavigate } from '@tanstack/react-router';
import { useUserContext } from '../context/userContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setEmail("");
      setPassword("");
      await fetchUser(); // ensure user context is updated
      toast.success("User logged in successfully! 🎉");
      navigate({ to: '/' });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3B1E54] to-[#9B7EBD] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#3B1E54]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">Please login to your account</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full border border-gray-300 text-gray-900 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#9B7EBD] focus:border-transparent"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#3B1E54]"
            >
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full border border-gray-300 text-gray-900 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#9B7EBD] focus:border-transparent"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#3B1E54]"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3B1E54] cursor-pointer text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#4c266b] transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-[#3B1E54] font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
