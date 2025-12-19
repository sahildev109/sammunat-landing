// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FcProcess } from "react-icons/fc";
import { GiProcessor } from "react-icons/gi";
import { IoIosContact, IoIosHome } from "react-icons/io";
import { LuAlignJustify } from "react-icons/lu";
import Aurora from "./Aurora";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-200">
      <div className="absolute inset-0 z-0 opacity-50">
        <Aurora
          colorStops={["#ffffff", "#155dfc", "#ffffff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>
      <div className="max-w-7xl mx-auto z-10 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">
          Sammunat
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex z-10 items-center gap-8 text-md font-bold text-gray-700">
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1"> <IoIosHome /> <p>Home</p></Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1"> <LuAlignJustify /><p>Features</p></Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1"><GiProcessor /><p>Process</p></Link>
          <Link href="#" className="hover:text-blue-600 flex items-center gap-1"><IoIosContact /><p>Contact</p></Link>
        </nav>

        {/* CTA */}
        <div className="hidden z-10 md:block">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm text-gray-700">
          <a href="#" className="block hover:text-blue-600"> <IoIosHome />Home</a>
          <a href="#" className="block hover:text-blue-600">Features</a>
          <a href="#" className="block hover:text-blue-600">Process</a>
          <a href="#" className="block hover:text-blue-600">Contact</a>

          <button className="w-full mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
