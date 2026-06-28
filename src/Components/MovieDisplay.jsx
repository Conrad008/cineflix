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
    <form>

    </form>
  )
}

export default MovieDisplay
