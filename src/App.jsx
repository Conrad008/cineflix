import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';


function App () {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch('/movies.json');
        
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

  const filteredMovies = movies.filter(movie => {
  const titleMatch = movie && movie.title ? movie.title.toLowerCase().includes(searchTerm.toLowerCase()) : false;
  const genreMatch = movie && movie.genre ? movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) : false;
  return titleMatch || genreMatch;
  });

  return (
    <div className='min-h-screen bg-slate-100 py-10 px-4'>
      <div className='max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-slate-200'>

        <header className='mb-6'>
          <h1 className='text-3xl font-extrabold text-center text-slate-800 flex items-center justify-center gap-2'>
            CineFlix Central
          </h1>

          <p className="text-center text-sm text-slate-500 mt-1">Movies straight from the cineflix database</p>

        </header>

        <main>


          <div className="mb-6">
            <input 
              type="text"
              placeholder="Filter by title or genre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="border-t border-slate-100 pt-6">
            {loading && (
              <p className="text-center py-6 text-sky-600 font-semibold animate-pulse">
                loading movie...
              </p>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
                <strong>Data Failure:</strong> {error}
              </div>
            )}

            {!loading && !error && (
              <MovieList movies={filteredMovies} onDelete={handleDeleteMovie} />
            )}
          </div>
        </main>

      </div>

    </div>
  )
}

export default App 