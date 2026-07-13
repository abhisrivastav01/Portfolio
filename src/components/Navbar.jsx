import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/90
      backdrop-blur-lg
      border-b
      border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12">

        {/* Navbar Height Reduced */}
        <div className="flex justify-center items-center h-11">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#home"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
            md:hidden
            py-4
            flex
            flex-col
            items-center
            gap-4
            bg-slate-950
            border-t
            border-slate-800
            "
          >
            <a
              href="#home"
              className="text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;