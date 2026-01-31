import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block px-4 py-2 text-sm font-semibold tracking-wide transition";

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-extrabold tracking-wide">
            <span className="text-accent">S.B.G</span> Metal Engineering
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-accent"
                    : "text-gray-200 hover:text-accent"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-accent"
                    : "text-gray-200 hover:text-accent"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-accent"
                    : "text-gray-200 hover:text-accent"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-accent"
                    : "text-gray-200 hover:text-accent"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${
                  isActive
                    ? "text-accent"
                    : "text-gray-200 hover:text-accent"
                }`
              }
            >
              Contact
            </NavLink>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 bg-accent text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-200 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <nav className="px-6 py-4 space-y-2">
            {["/", "/about", "/services", "/projects", "/contact"].map(
              (path, i) => {
                const names = [
                  "Home",
                  "About",
                  "Services",
                  "Projects",
                  "Contact",
                ];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md font-semibold ${
                        isActive
                          ? "bg-accent text-black"
                          : "text-gray-200 hover:bg-white/10"
                      }`
                    }
                  >
                    {names[i]}
                  </NavLink>
                );
              }
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
