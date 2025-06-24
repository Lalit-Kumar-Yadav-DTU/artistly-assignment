export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden mx-auto w-full max-w-sm">
      <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <span className="text-white text-6xl">🎭</span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{artist.name}</h3>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
            {artist.category}
          </span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2 text-sm">
          <span className="mr-1">📍</span>
          {artist.location}
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{artist.bio}</p>

        <div className="mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">Languages:</p>
          <div className="flex flex-wrap gap-1">
            {artist.languages.map((lang, idx) => (
              <span
                key={idx}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">{artist.priceRange}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-3 rounded-md transition-colors">
            Ask for Quote
          </button>
        </div>
      </div>
    </div>
  )
}
























// // ArtistCard component - Displays individual artist information in card format
// // Props: artist object containing id, name, category, location, bio, languages, priceRange
// export default function ArtistCard({ artist }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden max-w-sm mx-auto">
//       {/* Artist image placeholder - Using gradient background */}
//       <div className="aspect-w-3 aspect-h-4 bg-gray-200">
//         <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
//           <span className="text-white text-6xl">🎭</span>
//         </div>
//       </div>
      
//       {/* Artist information section */}
//       <div className="p-6">
//         {/* Name and category header */}
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-xl font-semibold text-gray-900">{artist.name}</h3>
//           <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
//             {artist.category}
//           </span>
//         </div>

//         <div className="flex items-center text-gray-600 mb-2">
//           <span className="mr-1">📍</span>
//           <span className="text-sm">{artist.location}</span>
//         </div>

//         <p className="text-gray-600 text-sm mb-3 line-clamp-2">{artist.bio}</p>

//         <div className="mb-3">
//           <p className="text-sm text-gray-500 mb-1">Languages:</p>
//           <div className="flex flex-wrap gap-1">
//             {artist.languages.map((lang, index) => (
//               <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
//                 {lang}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <span className="text-lg font-semibold text-green-600">{artist.priceRange}</span>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
//             Ask for Quote
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
