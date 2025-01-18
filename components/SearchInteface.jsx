'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react';

const SearchInterface = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulated search delay - replace with actual API call
    setTimeout(() => {
      setResults([
        { title: 'Sample Result 1', description: 'This is a sample search result description', url: '#' },
        { title: 'Sample Result 2', description: 'Another sample search result description', url: '#' },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Search Engine</h1>
        <p className="text-gray-600">Find what you're looking for</p>
      </header>

      {/* Search Form */}
      <div className="max-w-3xl mx-auto px-4">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query..."
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500"
          >
            <Search size={20} />
          </button>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mt-8 space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                  <a href={result.url}>{result.title}</a>
                </h2>
                <p className="text-gray-600 mt-2">{result.description}</p>
                <a href={result.url} className="text-green-600 text-sm hover:underline">{result.url}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInterface;