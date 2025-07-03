'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navlogo from '../images/Navlogo.svg'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src={Navlogo} alt="Logo" width={30} height={30} />
          <span className="font-bold text-lg text-blue-900 tracking-wide">
            LAUNCHBOX
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/blogs">
            <span className="text-blue-900 font-medium cursor-pointer hover:underline">Blogs</span>
          </Link>
          <Link href="/contact">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">
              Let's Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-900 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <Link href="/blogs">
            <span className="text-blue-900 font-medium cursor-pointer">Blogs</span>
          </Link>
          <Link href="/contact">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-left">
              Let's Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
