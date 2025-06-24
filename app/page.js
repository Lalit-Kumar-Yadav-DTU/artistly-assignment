import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'

export default function HomePage() {
  const categories = [
    {
      name: 'Singers',
      description: 'Professional vocalists for all occasions',
      icon: '🎤',
      count: '150+ Artists'
    },
    {
      name: 'Dancers',
      description: 'Contemporary and traditional dance performers',
      icon: '💃',
      count: '80+ Artists'
    },
    {
      name: 'Speakers',
      description: 'Motivational and keynote speakers',
      icon: '🎯',
      count: '60+ Artists'
    },
    {
      name: 'DJs',
      description: 'Professional DJs for events and parties',
      icon: '🎧',
      count: '90+ Artists'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 text-white 
  bg-gradient-to-r from-blue-600 to-purple-600 
  dark:from-gray-900 dark:to-gray-950 
  dark:text-white">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Perfect Artists for Your Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto dark:text-gray-300">
            Connect with talented performing artists across India. From singers to speakers, 
            find the perfect match for your event needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/artists"
              className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
            >
              Browse Artists
            </Link>
            <Link
              href="/onboard"
              className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-blue-600 transition"
            >
              Join as Artist
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Artist Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover talented artists across various categories to make your event memorable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white dark:bg-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Next Artist?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Join thousands of event planners who trust Artistly to discover and hire talent.
          </p>
          <Link
            href="/artists"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}













// import Link from 'next/link'
// import CategoryCard from '@/components/CategoryCard'

// export default function HomePage() {
//   const categories = [
//     {
//       icon: '🎤',
//       title: 'Singers',
//       description: 'Professional vocalists for events & concerts'
//     },
//     {
//       icon: '💃',
//       title: 'Dancers',
//       description: 'Traditional and modern performers'
//     },
//     {
//       icon: '🎧',
//       title: 'DJs',
//       description: 'Event and club DJ artists'
//     },
//     {
//       icon: '🎯',
//       title: 'Speakers',
//       description: 'Motivational & keynote speakers'
//     }
//   ]

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
//         <div className="max-w-5xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Discover and Book Talented Performing Artists
//           </h1>
//           <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
//             Artistly connects event planners with professional artists across India
//           </p>
//           <div className="flex justify-center gap-4 flex-wrap">
//             <Link href="/artists" className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition">
//               Browse Artists
//             </Link>
//             <Link href="/onboard" className="bg-white text-purple-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition">
//               Join as Artist
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Category Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Explore Artist Categories
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {categories.map((cat) => (
//               <CategoryCard
//                 key={cat.title}
//                 icon={cat.icon}
//                 title={cat.title}
//                 description={cat.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
