import Link from 'next/link'

// CategoryCard component - Displays individual artist category with navigation
// Props: category object containing name, description, icon, and count
export default function CategoryCard({ category }) {
  return (
    // Wrap entire card in Link for navigation to filtered artists page
    <Link href={`/artists?category=${category.name.slice(0, -1)}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer">
        {/* Category icon - Large emoji for visual appeal */}
        <div className="text-4xl mb-4">{category.icon}</div>
        
        {/* Category name - Main heading */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
        
        {/* Category description - Brief explanation */}
        <p className="text-gray-600 mb-4">{category.description}</p>
        
        {/* Artist count - Shows available artists in this category */}
        <span className="text-blue-600 font-medium">{category.count}</span>
      </div>
    </Link>
  )
}
