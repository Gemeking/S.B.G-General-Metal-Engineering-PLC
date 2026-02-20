import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[100] bg-transparent text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/">
            <img
              src="iconic.png"
              alt="S.B.G"
              className="h-16 md:h-24 w-auto animate-pulse"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4">
            {["Home", "About", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `px-6 py-3 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-gray-300/40 hover:scale-105 hover:shadow-lg ${
                    isActive
                      ? "bg-gray-600 text-white shadow-lg" // ✅ GREY ACTIVE
                      : "bg-white/15 text-gray-800 hover:text-gray-900"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-blue-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-20 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 p-6 space-y-4">
          {["Home", "About","Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={({ isActive }) =>
                `block text-lg font-bold tracking-wide py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gray-600 text-white" // ✅ GREY ACTIVE MOBILE
                    : "text-gray-800 hover:bg-gray-100"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
