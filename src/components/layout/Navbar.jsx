import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Technologies", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 px-4 sm:px-8 py-3 font-sans">
      <div className="container mx-auto px-2 md:px-4 lg:px-0 flex items-center justify-between">
        {/* Left Section: Mobile Menu Button (Flex Left on Mobile) */}
        <div className="flex-1 md:flex-none flex items-center justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>

          {/* Logo on Desktop (Flows naturally on desktop) */}
          <picture className="hidden md:block">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </picture>
        </div>

        {/* Center Section: Logo on Mobile / Nav Links on Desktop */}
        <div className="flex-1 md:flex-none flex items-center justify-center">
          {/* Logo on Mobile (Flex centered) */}
          <picture className="md:hidden">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </picture>

          {/* Links on Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? "text-pink-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Action Buttons (Flex Right on Mobile) */}
        <div className="flex-1 md:flex-none flex items-center justify-end gap-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:inline-block"
          >
            Sign In
          </a>
          <a
            href="#"
            className="px-5 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-all duration-200 shadow-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 pb-2 border-t border-gray-100 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.active
                  ? "text-pink-500 bg-pink-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2 sm:hidden">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;