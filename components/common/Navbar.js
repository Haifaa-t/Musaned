"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Globe, User, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#", hasDropdown: false },
  { label: "Recruitment Offices", href: "#", hasDropdown: true },
  { label: "Knowledge center", href: "#", hasDropdown: true },
];

const utilityLinks = [
  { label: "Search", icon: <Search className="w-5 h-5 mr-2" />, href: "#" },
  { label: "عربي", icon: <Globe className="w-5 h-5 mr-2" />, href: "#" },
  { label: "Login", icon: <User className="w-5 h-5 mr-2" />, href: "#" },
];

export default function NavHeader2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[72px] bg-white border-b border-[#D2D6DB] px-4 lg:px-8 font-ibm">
      <div className="max-w-[1376px] h-full mx-auto flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-12 w-full lg:w-auto">
          <Link href="/">
            <img
              src="/Musaned.png"
              alt="Musaned platform logo"
              className="h-10 cursor-pointer"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#161616] font-medium text-[16px] leading-6 flex items-center font-ibm"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="ml-2 w-4 h-4" />
                )}
              </Link>
            ))}

            {/* FAQs button with highlight */}
            <Link
              href="/"
              className="relative w-[70px] h-[72px] rounded-sm bg-[#1B8354] flex flex-col items-center justify-center font-ibm"
            >
              <span className="text-white font-semibold text-[16px] leading-6">
                FAQs
              </span>
              <span className="absolute bottom-2 w-[54px] h-[6px] rounded-full bg-[#54C08A]" />
            </Link>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {utilityLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center text-[#161616] font-medium font-ibm text-[15px]"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#161616]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-white border-t border-[#D2D6DB] font-ibm">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#161616] font-medium text-[15px]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-white bg-[#1B8354] w-max px-4 py-2 rounded-sm font-semibold text-[15px]"
            >
              FAQs
            </Link>
            <hr />
            {utilityLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#161616] font-medium text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


