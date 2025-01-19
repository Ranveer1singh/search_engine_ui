'use client'
import { useSearchParams } from 'next/navigation'
import SearchResults from '@/components/SearchResults'
import SearchInteface from '@/components/SearchInteface'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <SearchInteface initialQuery={query} />
        <SearchResults query={query} />
      </div>
    </main>
  )
}