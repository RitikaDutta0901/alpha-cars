import React from "react";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Alpha Cars
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <button className="hover:text-purple-600">Buy Car</button>
          <button className="hover:text-purple-600">Sell Car</button>
          <button className="hover:text-purple-600">Support</button>
        </nav>

        <button className="rounded-full border border-purple-600 px-4 py-1.5 text-sm font-medium text-purple-600 hover:bg-purple-50">
          Login
        </button>
      </div>
    </header>
  );
}

export default Navbar;
