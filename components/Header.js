
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Artists', href: '/artists' },
  { label: 'Join as Artist', href: '/onboard' },
  { label: 'Dashboard', href: '/dashboard' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">Artistly</Link>
        <nav className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
