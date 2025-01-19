'use client'
import { useState, useEffect } from 'react'

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return
      
      setLoading(true)
      try {
        // Replace this with your actual API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setResults([
          {
            title: `Result for "${query}" 1`,
            description: 'This is a sample search result description',
            url: '#'
          },
          {
            title: `Result for "${query}" 2`,
            description: 'Another sample search result description',
            url: '#'
          }
        ])
      } catch (error) {
        console.error('Error fetching results:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [query])

  if (!query) return null

  return (
    <div className="mt-8">
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">
            Showing results for: &quot;{query}&quot;
          </p>
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                  <a href={result.url}>{result.title}</a>
                </h2>
                <p className="text-gray-600 mt-2">{result.description}</p>
                <a href={result.url} className="text-green-600 text-sm hover:underline">
                  {result.url}
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SearchResults