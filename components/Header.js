'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Artists', href: '/artists' },
    { label: 'Join as Artist', href: '/onboard' },
    { label: 'Dashboard', href: '/dashboard' }
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-blue-600">Artistly</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}































// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'Artists', href: '/artists' },
//   { label: 'Join as Artist', href: '/onboard' },
//   { label: 'Dashboard', href: '/dashboard' }
// ]

// export default function Header() {
//   const pathname = usePathname()

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold text-blue-600">Artistly</Link>
//         <nav className="flex gap-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`text-sm font-medium hover:text-blue-600 transition ${
//                 pathname === item.href ? 'text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   )
// }
