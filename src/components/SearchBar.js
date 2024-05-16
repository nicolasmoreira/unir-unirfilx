import React, {useState} from 'react';
import {movies} from '../data';
import './SearchBar.css';

const SearchBar = ({setResults}) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.length >= 3) {
            const filteredMovies = movies.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase()) ||
                movie.director.toLowerCase().includes(query.toLowerCase()) ||
                movie.year === parseInt(query, 10) ||
                movie.synopsis.toLowerCase().includes(query.toLowerCase()) ||
                movie.actors.indexOf(query.toLowerCase()) !== -1 ||
                movie.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredMovies);
        }
    };

    return (
        <div className="search-bar container mt-4">
            <div className="input-group mb-3 search-bar__group">
                <input
                    type="text"
                    className="form-control search-bar__input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar películas..."
                />
                <div className="input-group-append search-bar__append">
                    <button className="btn btn-primary search-bar__button" onClick={handleSearch}>Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
