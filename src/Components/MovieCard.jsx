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
      
    </div>
  )
}

export default MovieCard
