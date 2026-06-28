import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieDisplay from './Components/MovieDisplay';

function App () {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/public/movies.json');
        
        if (!response.ok) {
          throw new Error('Failed to find the movie.');
      }

      const data = await response.json();

      const formatted = data.movies.map((movie) => ({
          id: movie.id,
          title: movie.Title,
          genre: movie.Runtime,
          year: movie.Year
        }));

        setMovies(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  const handleAddMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
}