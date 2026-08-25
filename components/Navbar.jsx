"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../constants"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black relative z-50">
      <div className="max-w-7xl mx-auto flex md:grid md:grid-cols-3 items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-20 py-5">

        {/* Left: logo */}
        <Link href="/" className="font-semibold text-lg text-black dark:text-zinc-50 justify-self-start">
          Jdev
        </Link>

        {/* Middle: nav links (desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-lime-700 dark:text-lime-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right: resume button (desktop only) */}
        <div className="hidden md:flex justify-self-end">
          <a
            href="/Joseph_Egbucha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-lime-500 text-white text-sm font-medium rounded-full hover:bg-lime-600 transition-colors"
          >
            My Resume
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex flex-col items-end gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-black dark:bg-zinc-50" />
          <span className="w-6 h-0.5 bg-black dark:bg-zinc-50" />
          <span className="w-4 h-0.5 bg-black dark:bg-zinc-50" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Slide-in panel from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-50 dark:bg-black border-l border-zinc-200 dark:border-zinc-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-black dark:text-zinc-50 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col items-start gap-6 px-6 pt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive
                    ? "text-lime-700 dark:text-lime-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <a
            href="/Joseph_Egbucha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-2.5 bg-lime-500 text-white text-sm font-medium rounded-full hover:bg-lime-600 transition-colors text-center w-full"
          >
            My Resume
          </a>
        </div>
      </div>
    </nav>
  )
}