import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';
import TrailerPlayer from './TrailerPlayer';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    return (
        <div className="movie-detail container">
            <h1>{movie.title}</h1>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Año:</strong> {movie.year}</p>
            <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
            <TrailerPlayer trailerUrl={movie.trailerUrl} />
        </div>
    );
};

export default MovieDetail;
