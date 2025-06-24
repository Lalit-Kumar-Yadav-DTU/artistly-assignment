'use client'

import { useState } from 'react'

const categories = ['Singer', 'DJ', 'Dancer', 'Speaker']
const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad']
const priceRanges = [
  '₹10,000 - ₹25,000',
  '₹15,000 - ₹30,000',
  '₹20,000 - ₹40,000',
  '₹25,000 - ₹50,000',
  '₹30,000 - ₹60,000',
  '₹40,000 - ₹80,000',
  '₹50,000 - ₹100,000'
]

export default function FilterBlock({ filters, setFilters }) {
  const [openDropdown, setOpenDropdown] = useState('')

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? '' : type)
  }

  const handleCheckboxChange = (type, value) => {
    setFilters(prev => {
      const alreadySelected = prev[type].includes(value)
      const updated = alreadySelected
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
      return { ...prev, [type]: updated }
    })
  }

  const renderDropdown = (label, type, options) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => toggleDropdown(type)}
        className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 text-left shadow-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {filters[type].length > 0 ? `${filters[type].length} selected` : `All ${label}`}
      </button>

      {openDropdown === type && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-900 border dark:border-gray-700 rounded shadow-md max-h-60 overflow-y-auto">
          <div className="p-2 space-y-1">
            {options.map((opt) => (
              <label key={opt} className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="accent-blue-600"
                  checked={filters[type].includes(opt)}
                  onChange={() => handleCheckboxChange(type, opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const hasAnyFilter = 
    filters.category.length > 0 || 
    filters.location.length > 0 || 
    filters.priceRange.length > 0

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-6 relative">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Filters</h3>

      {renderDropdown('Category', 'category', categories)}
      {renderDropdown('Location', 'location', locations)}
      {renderDropdown('Price Range', 'priceRange', priceRanges)}

      {hasAnyFilter && (
        <button
          onClick={() => setFilters({ category: [], location: [], priceRange: [] })}
          className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}






























// 'use client'

// export default function FilterBlock({ filters, setFilters }) {
//   const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Hyderabad']
//   const categories = ['Singer', 'DJ', 'Dancer', 'Speaker']
//   const priceRanges = [
//     '₹10,000 - ₹25,000',
//     '₹15,000 - ₹30,000',
//     '₹20,000 - ₹40,000',
//     '₹25,000 - ₹50,000',
//     '₹30,000 - ₹60,000',
//     '₹40,000 - ₹80,000',
//     '₹50,000 - ₹100,000'
//   ]

//   const handleChange = (type, value) => {
//     setFilters(prev => ({ ...prev, [type]: value }))
//   }

//   const hasAnyFilter = filters.category || filters.location || filters.priceRange

//   return (
//     <div className="bg-white rounded-lg shadow p-6 space-y-6">
//       <h3 className="text-xl font-semibold text-gray-800">Filters</h3>

//       {/* Category Filter */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//         <select
//           value={filters.category}
//           onChange={e => handleChange('category', e.target.value)}
//           className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//         >
//           <option value="">All</option>
//           {categories.map(c => (
//             <option key={c} value={c}>{c}</option>
//           ))}
//         </select>
//       </div>

//       {/* Location Filter */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//         <select
//           value={filters.location}
//           onChange={e => handleChange('location', e.target.value)}
//           className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//         >
//           <option value="">All</option>
//           {locations.map(l => (
//             <option key={l} value={l}>{l}</option>
//           ))}
//         </select>
//       </div>

//       {/* Price Range Filter */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
//         <select
//           value={filters.priceRange}
//           onChange={e => handleChange('priceRange', e.target.value)}
//           className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//         >
//           <option value="">All</option>
//           {priceRanges.map(p => (
//             <option key={p} value={p}>{p}</option>
//           ))}
//         </select>
//       </div>

//       {/* Clear Filters Button */}
//       {hasAnyFilter && (
//         <div className="pt-2">
//           <button
//             onClick={() => setFilters({ category: '', location: '', priceRange: '' })}
//             className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
//           >
//             Clear Filters
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
