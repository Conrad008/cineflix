import { useState } from "react";

const MovieDisplay = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        if (!title || !genre || !year) return alert('Please fill out all available fields!');

        onAddMovie({
            id: Date.now(),
            title,
            genre,
            year: parseInt(year, 10)
         });
         
         setTitle('');
         setGenre('');
         setYear('');
        };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            Add New Movie
        </h2>
        <input type="text" 
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />

        <input 
        type="text" 
        placeholder="Genre" 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />

        <input 
        type="number" 
        placeholder="Release Year" 
        value={year} 
        onChange={(e) => setYear(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
        />



    </form>
  )
}

export default MovieDisplay
