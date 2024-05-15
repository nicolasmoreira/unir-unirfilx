import React, { useState } from 'react';
import { movies } from '../data';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.director.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredMovies);
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
            <div className="row search-bar__results">
                {results.map(movie => (
                    <div key={movie.id} className="col-md-4 search-bar__result-item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{movie.director} - {movie.year}</h6>
                                <p className="card-text">{movie.synopsis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
