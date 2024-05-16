import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {movies} from '../data';
import TrailerPlayer from './TrailerPlayer';
import {RentalContext} from '../contexts/RentalContext';
import {PurchaseContext} from '../contexts/PurchaseContext';
import './MovieDetail.css';

const MovieDetail = () => {
    const {id} = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));
    const {rentals, addRental} = useContext(RentalContext);
    const {purchases, addPurchase} = useContext(PurchaseContext);
    const [rating, setRating] = useState(() => {
        const savedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
        return savedRatings[movie?.id] || 0;
    });

    useEffect(() => {
        const savedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
        savedRatings[movie.id] = rating;
        localStorage.setItem('ratings', JSON.stringify(savedRatings));
    }, [rating, movie.id]);

    if (!movie) {
        return <div>Película no encontrada</div>;
    }

    const isRented = rentals.some(rental => rental.id === movie.id);
    const isPurchased = purchases.some(purchase => purchase.id === movie.id);

    return (
        <div className="movie-detail container">
            <div className="movie-detail__content">
                <h1>{movie.title}</h1>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Año:</strong> {movie.year}</p>
                <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
                <p><strong>Actores:</strong> {movie.actors.join(', ')}</p>
                <p><strong>Categoría:</strong> {movie.category}</p>
                <p><strong>Lenguaje:</strong> {movie.language}</p>
                <TrailerPlayer trailerUrl={movie.trailerUrl}/>
                <button
                    className="btn btn-primary movie-detail__button"
                    onClick={() => addRental(movie)}
                    disabled={isRented}
                >
                    {isRented ? 'Ya Alquilada' : 'Alquilar'}
                </button>
                &nbsp; &nbsp;
                <button
                    className="btn btn-primary movie-detail__button"
                    onClick={() => addPurchase(movie)}
                    disabled={isPurchased}
                >
                    {isPurchased ? 'Ya Comprada' : 'Disponible'}
                </button>
                <div className="movie-detail__rating">
                    <h3>Calificación</h3>
                    {[1, 2, 3, 4, 5].map(value => (
                        <span
                            key={value}
                            className={`star ${value <= rating ? 'selected' : ''}`}
                            onClick={() => setRating(value)}
                        >
                        &#9733;
                    </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
