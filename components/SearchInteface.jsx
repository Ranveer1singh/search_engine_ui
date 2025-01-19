'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

const SearchInterface = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center p-2">
        <h1 className='font-bold text-blue-600 text-2xl'>
          Search AnyThing
        </h1>
      </div>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  )
}

export default SearchInterface