'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import artistsData from '@/data/artists.json'

export default function ArtistsContent() {
  const searchParams = useSearchParams()

  const [artists] = useState(artistsData)
  const [filteredArtists, setFilteredArtists] = useState(artistsData)
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    location: '',
    priceRange: ''
  })

  useEffect(() => {
    let filtered = artists

    if (filters.category) {
      filtered = filtered.filter(artist =>
        artist.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    if (filters.location) {
      filtered = filtered.filter(artist =>
        artist.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.priceRange) {
      filtered = filtered.filter(artist =>
        artist.priceRange.includes(filters.priceRange)
      )
    }

    setFilteredArtists(filtered)
  }, [filters, artists])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse Artists</h1>
          <p className="text-xl text-gray-600">Discover talented performers for your next event</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterBlock filters={filters} setFilters={setFilters} />
          </div>

          <div className="lg:w-3/4">
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredArtists.length} of {artists.length} artists
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredArtists.map(artist => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>

            {filteredArtists.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No artists found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
