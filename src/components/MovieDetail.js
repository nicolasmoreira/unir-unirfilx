import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';
import TrailerPlayer from './TrailerPlayer';
import { RentalContext } from '../contexts/RentalContext';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));
    const { rentals, addRental } = useContext(RentalContext);

    if (!movie) {
        return <div>Película no encontrada</div>;
    }

    const isRented = rentals.some(rental => rental.id === movie.id);

    return (
        <div className="movie-detail container">
            <div className="movie-detail__content">
                <h1>{movie.title}</h1>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Año:</strong> {movie.year}</p>
                <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
                <TrailerPlayer trailerUrl={movie.trailerUrl} />
                <button
                    className="btn btn-primary movie-detail__button"
                    onClick={() => addRental(movie)}
                    disabled={isRented}
                >
                    {isRented ? 'Ya Alquilada' : 'Alquilar'}
                </button>
            </div>
        </div>
    );
};

export default MovieDetail;
