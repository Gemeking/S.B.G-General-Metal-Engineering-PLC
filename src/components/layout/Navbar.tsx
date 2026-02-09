import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = "px-4 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300";

  return (
    <header className="fixed top-0 w-full z-[100] bg-slate-900/40  border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl italic group-hover:bg-blue-500 transition-colors">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter">S.B.G</span>
              <span className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase">Engineering</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4">
            {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Mobile button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-blue-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden absolute top-20 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4">
          {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
            <Link key={item} to="/" className="block text-lg font-bold tracking-wide text-gray-200 border-b border-white/5 pb-2">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}