import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="text-center">

        {/* Animated 404 text */}
        <h1
          className="text-7xl md:text-9xl font-extrabold text-orange-400 drop-shadow-lg animate-bounce"
        >
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track!
        </p>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow hover:bg-orange-500 transition-transform duration-200 hover:scale-105"
        >
          Go Home
        </Link>

        {/* Animated floating circle */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-300/20 blur-2xl rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default NotFound;
