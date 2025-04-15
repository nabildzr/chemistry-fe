import React, { useState } from "react";

// Dynamically import Lottie with SSR disabled
import Lottie from "lottie-react";
import NotFound from "../../../public/animations/404.json";
import { Link } from "react-router";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Show nothing while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Lottie
          animationData={NotFound}
          loop={true}
          autoplay={true}
          size={10}
        />

        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link to="/">
          <span className="text-blue-500 hover:underline">Go back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link to="/">
        <span className="text-blue-500 hover:underline">Go back to Home</span>
      </Link>
    </div>
  );
};

export default Page;