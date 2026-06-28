import React from 'react'

const MovieCard = ({movie, onDelete}) => {
  return (
    <div className='flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
        <div>
            <h3 className='text-lg font-semibold text-gray-800'>{movie.title}</h3>
            <p className='text-sm text-gray-500 mt-1'>
                <span className='font-medium text-gray-700'>Genre/Length:</span>{movie.genre}
            </p>
            <p className='text-sm text-gray-500'>
                <span className='font-medium text-gray-700'>Year:</span> {movie.year}
            </p>
        </div>
        <button className='px-3 py-1.5 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400'
        onClick={() => onDelete(movie.id)}
        >
            Remove
        </button>
      
    </div>
  )
}

export default MovieCard
