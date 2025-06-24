'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Artists', href: '/artists' },
    { label: 'Join as Artist', href: '/onboard' },
    { label: 'Dashboard', href: '/dashboard' }
  ]

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">Artistly</Link>

        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-4 border px-2 py-1 rounded text-xs hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-800 shadow">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              toggleTheme()
              setIsMenuOpen(false)
            }}
            className="block w-full text-left text-sm border-t pt-2 mt-2 text-gray-700 dark:text-gray-300"
          >
            {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      )}
    </header>
  )
}


