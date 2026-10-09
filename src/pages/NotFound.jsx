import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto text-center space-y-5">
        <span className="font-serif text-7xl font-bold text-[#D4AF37] block">404</span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#5C6470] leading-relaxed">
          The page you are looking for may have been moved or does not exist. Return to the Hopewise Foundation homepage to continue exploring our work.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#00081c] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
