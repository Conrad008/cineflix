// import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, onDelete }) => {
    if(movies.length === 0 ) {
        return (
      <p className='text-center text-gray-400 italic py-6'>
         Your watchlist is empty!
      </p>
    );
    }
  return (
    <div className='space-y-4'>
        {movies.map((movie)=> (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          onDelete={onDelete} 
        />
        ))}
      
    </div>
  )
}

export default MovieList
