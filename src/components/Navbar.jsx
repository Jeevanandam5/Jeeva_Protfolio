import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold hover:text-orange-400  tracking-wide hover:scale-105 transition-transform">
          AJ<span className="">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-medium bg-white p-3 rounded-xl shadow-lg">
          <Link className="hover:text-orange-400 transition-colors" to="/">Home</Link>
          <Link className="hover:text-orange-400 transition-colors" to="/about">About</Link>
          <Link className="hover:text-orange-400 transition-colors" to="/projects">Projects</Link>
          <Link className="hover:text-orange-400 transition-colors" to="/contact">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Jeevanandam5"
            target="_blank"
            className="hover:scale-110 transition-transform">
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeevanandam-net/"
            target="_blank"
            className="hover:scale-110 transition-transform">
            <img
              className="w-9 h-9"
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/Linkedin-png-linkedin-icon-1600.png"
              alt="LinkedIn"
            />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden "
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden b px-6 py-4 space-y-4 animate-slideDown">

          <Link className="block hover:text-orange-400" onClick={() => setOpen(false)} to="/">Home</Link>
          <Link className="block hover:text-orange-400" onClick={() => setOpen(false)} to="/about">About</Link>
          <Link className="block hover:text-orange-400" onClick={() => setOpen(false)} to="/projects">Projects</Link>
          <Link className="block hover:text-orange-400" onClick={() => setOpen(false)} to="/contact">Contact</Link>

          <div className="flex items-center gap-4 pt-3">
            <a href="https://github.com/Jeevanandam5" target="_blank">
              <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/jeevanandam-net/" target="_blank">
              <img className="w-9 h-9" src="https://upload.wikimedia.org/wikipedia/commons/6/65/Linkedin-png-linkedin-icon-1600.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
