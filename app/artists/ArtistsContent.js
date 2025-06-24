'use client'

import { useEffect, useState } from 'react'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import artistsData from '@/data/artists.json'

export default function ArtistsContent() {
  const [artists] = useState(artistsData)

  const [filters, setFilters] = useState({
    category: [],
    location: [],
    priceRange: []
  })

  const [filteredArtists, setFilteredArtists] = useState(artistsData)

  useEffect(() => {
    let filtered = artists

    // Apply category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(artist =>
        filters.category.includes(artist.category)
      )
    }

    // Apply location filter
    if (filters.location.length > 0) {
      filtered = filtered.filter(artist =>
        filters.location.includes(artist.location)
      )
    }

    // Apply price filter
    if (filters.priceRange.length > 0) {
      filtered = filtered.filter(artist =>
        filters.priceRange.includes(artist.priceRange)
      )
    }

    setFilteredArtists(filtered)
  }, [filters, artists])

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters */}
      <div className="lg:w-1/4">
        <FilterBlock filters={filters} setFilters={setFilters} />
      </div>

      {/* Artists Grid */}
      <div className="lg:w-3/4">
        <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
          Showing {filteredArtists.length} of {artists.length} artists
          {(filters.category.length > 0 || filters.location.length > 0 || filters.priceRange.length > 0
          )}
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
  )
}
