import { useState, useRef, useEffect } from 'react'
import useSWR from 'swr'
import Axios from '../Axios'
import { Loader2, MessageSquareWarning, Search } from 'lucide-react'

export const QuickBar = () => {
  const [query, setQuery] = useState('')
  const wrapperRef = useRef(null)

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    error: categoriesError
  } = useSWR('product/allcategory', Axios)

  const {
    data: searchResults,
    isLoading: searchLoading,
    error: searchError
  } = useSWR(
    query ? `product/search?search=${encodeURIComponent(query)}` : null,
    Axios
  )

  const categories = categoriesData?.data?.data || []

  useEffect(() => {
    function handleClickOutside (event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <div className='w-full mt-[80px] sm:mt-[128px] bg-gradient-to-r from-white via-purple-50 to-white py-8 px-6 sm:px-12 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto relative' ref={wrapperRef}>
        <div className='flex flex-wrap justify-center gap-4 mb-8'>
          {categoriesLoading ? (
            <p className='text-gray-500 flex items-center gap-2'>
              <Loader2 className='animate-spin' size={18} /> Yuklanmoqda...
            </p>
          ) : categoriesError ? (
            <p className='text-red-500 flex items-center gap-2'>
              <MessageSquareWarning size={18} /> Kategoriya yuklashda xatolik
            </p>
          ) : (
            categories.map((cat, index) => (
              <button
                key={index}
                className='px-5 py-2 text-sm font-medium rounded-full bg-purple-100 text-purple-700
                               hover:bg-purple-300 hover:text-purple-900 transition shadow-md'
              >
                {cat}
              </button>
            ))
          )}
        </div>
        {/* Search input */}
        <div className='relative max-w-xl mx-auto'>
          <input
            type='text'
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Qidiruv...'
            className='w-full pl-12 pr-5 py-3 text-sm rounded-full border border-gray-300 bg-white shadow-sm placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-purple-500 transition'
            autoComplete='off'
          />
          <div className='absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 pointer-events-none'>
            <Search size={20} />
          </div>
        </div>

        {/* Quick categories */}

        {/* Search results modal */}
        {query && (
          <div
            className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full max-w-xl bg-white rounded-2xl shadow-lg border border-purple-200 z-50'
            style={{ maxHeight: '320px', overflowY: 'auto' }}
          >
            {searchLoading ? (
              <p className='text-gray-500 flex items-center gap-2 px-5 py-4'>
                <Loader2 className='animate-spin' size={18} /> Qidirilmoqda...
              </p>
            ) : searchError ? (
              <p className='text-red-500 flex items-center gap-2 px-5 py-4'>
                <MessageSquareWarning size={18} /> Qidiruvda xatolik
              </p>
            ) : searchResults?.data?.length > 0 ? (
              <ul className='divide-y divide-gray-100 text-gray-700 text-sm'>
                {searchResults.data.map(item => (
                  <li
                    key={item.id}
                    className='px-5 py-3 cursor-pointer hover:bg-purple-100 transition'
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-400 italic text-center py-4'>
                Hech narsa topilmadi
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
