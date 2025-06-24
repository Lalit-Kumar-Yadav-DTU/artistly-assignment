'use client'

import { useState } from 'react'

const mockArtists = [
  {
    name: 'Priya Sharma',
    bio: 'Energetic Bollywood performer with 5 years of experience at live events across India.',
    categories: ['Dancer'],
    languages: ['Hindi', 'English'],
    feeRange: '₹25,000 - ₹50,000',
    location: 'Mumbai, Maharashtra',
  },
  {
    name: 'DJ Nitro',
    bio: 'EDM and Bollywood DJ with club and wedding event experience in Delhi NCR.',
    categories: ['DJ'],
    languages: ['English'],
    feeRange: '₹50,000 - ₹100,000',
    location: 'New Delhi, Delhi',
  },
  {
    name: 'Aarav Saxena',
    bio: 'Award-winning motivational speaker, TEDx presenter and corporate leadership coach.',
    categories: ['Speaker'],
    languages: ['English', 'Hindi'],
    feeRange: '₹100,000+',
    location: 'Bangalore, Karnataka',
  }
]

export default function DashboardPage() {
  const [artists] = useState(mockArtists)

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr className="text-left text-sm font-medium text-gray-700 dark:text-gray-300">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Languages</th>
              <th className="px-4 py-3">Fee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
            {artists.map((artist, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-3 font-semibold">{artist.name}</td>
                <td className="px-4 py-3">{artist.categories.join(', ')}</td>
                <td className="px-4 py-3">{artist.location}</td>
                <td className="px-4 py-3">{artist.languages.join(', ')}</td>
                <td className="px-4 py-3">{artist.feeRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
