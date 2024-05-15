import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results = [] }) => (
    <div className="search-results container">
        <div className="row">
            {results.map(movie => (
                <div key={movie.id} className="col-md-4 search-results__item">
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

export default SearchResults;
