'use client'

export default function FilterBlock({ filters, setFilters }) {
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad']
  const categories = ['Singer', 'DJ', 'Dancer', 'Speaker']
  const priceRanges = [
    '₹10,000 - ₹25,000',
    '₹15,000 - ₹30,000',
    '₹20,000 - ₹40,000',
    '₹25,000 - ₹50,000',
    '₹30,000 - ₹60,000',
    '₹40,000 - ₹80,000',
    '₹50,000 - ₹100,000'
  ]

  const handleChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }))
  }

  const hasAnyFilter = filters.category || filters.location || filters.priceRange

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Filters</h3>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={filters.category}
          onChange={e => handleChange('category', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <select
          value={filters.location}
          onChange={e => handleChange('location', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All</option>
          {locations.map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
        <select
          value={filters.priceRange}
          onChange={e => handleChange('priceRange', e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All</option>
          {priceRanges.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      {hasAnyFilter && (
        <div className="pt-2">
          <button
            onClick={() => setFilters({ category: '', location: '', priceRange: '' })}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}
