// app/layout.js

import './globals.css'
import Header from '@/components/Header'

export const metadata = {
  title: 'Artistly - Performing Artist Booking Platform',
  description: 'Connect event planners with talented performing artists',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
