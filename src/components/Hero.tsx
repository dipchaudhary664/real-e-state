import React from "react";
import Search from "./Search";

export default function Hero() {
  return (
    <div className="min-h-screen hero flex items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
            Easy Way To Find Your Dream Home
          </h1>
          <p className="text-slate-300 text-center">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>
        {/* Our Search Form here... */}
        <Search />
      </div>
    </div>
  );
}
