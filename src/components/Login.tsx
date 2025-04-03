"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { API_URL } from "@/configs/config";
import axios from "axios";
import { LoginRequest } from "@/types/api/login/login";
import { logout } from "@/services/api/auth";

const slides = [
  { image: "/assets/background/tongkonan.png", id: "01" },
  { image: "/assets/background/komodo.png", id: "02" },
  { image: "/assets/background/raja-ampat.png", id: "03" },
  { image: "/assets/background/bromo.png", id: "04" },
];

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("request: ", "email: ", email, "pass:", password);
      const response = await axios.post(`${API_URL}/api/login`, {
        email,
        password,
      });

      console.log(response);

      if (response.data.access_token) {
        // Save Token in localStorage
        localStorage.setItem("authToken", response.data.access_token);
        // Save Token in Cookies
        document.cookie = `auth-token=${response.data.access_token}; path=/;`;

        // Use router.push for navigation
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Slideshow Image */}
      <div className="hidden lg:block lg:w-9/12 relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 h-screen"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-screen relative">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Navigasi Manual */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
          onClick={() =>
            goToSlide((currentSlide - 1 + slides.length) % slides.length)
          }
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        >
          ❯
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right-side login */}
      <div className="flex flex-col w-full lg:w-4/12 items-center justify-center p-8 bg-white lg:min-h-screen lg:shadow-lg lg:rounded-none">
        <div className="w-full h-full max-w-md p-8 bg-white rounded-lg">
          <div className="text-center mb-8">
            <Image
              src="/assets/chemistry-logo.png"
              alt="Chemistry Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <Image
              src="/assets/chemistry-wordmark.png"
              alt="Chemistry Title Text"
              width={200}
              height={50}
              className="mx-auto"
            />
          </div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#f6f7fa] border border-[#f6f7fa] focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                placeholder="Username"
                required
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#f6f7fa] border border-[#f6f7fa] focus:outline-none focus:ring-2 focus:ring-[#00e5c7]"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9d9fa0]"
                aria-label="Show password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#00e5c7] hover:bg-[#525F7F] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                "Log in"
              )}
            </button>
          </form>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © 2025 Chemistry.
        </div>
      </div>
    </div>
  );
}

export default Login;
