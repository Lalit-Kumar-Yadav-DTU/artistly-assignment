

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
