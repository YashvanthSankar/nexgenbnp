// This makes it a client component (can use useState, onClick, etc.)
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  // State to control mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Main navbar container - Professional Black Theme
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-xl z-50">
      {/* Inner container with max width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for navbar items */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
              NEXGEN
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Desktop action buttons */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {/* Hamburger icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (shows when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-gray-800">
              <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300">
                About
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300">
                Services
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-300">
                Projects
              </Link>
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}