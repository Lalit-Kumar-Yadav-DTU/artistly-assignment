import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Artistly - Performing Artist Booking Platform',
  description: 'Connect event planners with talented performing artists',
}

export default function RootLayout({ children }) {  // This is a server component
  // This layout wraps the entire application, providing a consistent structure
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

















// // app/layout.js

// import './globals.css'
// import Header from '@/components/Header'

// export const metadata = {
//   title: 'Artistly - Performing Artist Booking Platform',
//   description: 'Connect event planners with talented performing artists',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-gray-900 antialiased">
//         <Header />
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }
