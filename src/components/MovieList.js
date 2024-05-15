import React from 'react';
import { movies } from '../data';
import './MovieList.css';

const MovieList = () => (
    <div className="movie-list container">
        <div className="row movie-list__row">
            {movies.map(movie => (
                <div key={movie.id} className="col-md-4 movie-list__item">
                    <div className="card mb-4 movie-list__card">
                        <div className="card-body movie-list__body">
                            <h5 className="card-title movie-list__title">{movie.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted movie-list__subtitle">{movie.director} - {movie.year}</h6>
                            <p className="card-text movie-list__text">{movie.synopsis}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default MovieList;
