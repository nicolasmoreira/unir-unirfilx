import React, { useContext } from 'react';
import { movies } from '../data';
import { RentalContext } from '../contexts/RentalContext';
import './RentalPage.css';

const RentalPage = () => {
    const { rentals, addRental } = useContext(RentalContext);

    return (
        <div className="rental-page container">
            <h1>Alquileres</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-4 rental-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{movie.director} - {movie.year}</h6>
                                <p className="card-text">{movie.synopsis}</p>
                                <button className="btn btn-primary" onClick={() => addRental(movie)}>Alquilar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Mis Alquileres</h2>
            <div className="row">
                {rentals.map(rental => (
                    <div key={rental.id} className="col-md-4 rental-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{rental.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{rental.director} - {rental.year}</h6>
                                <p className="card-text">{rental.synopsis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RentalPage;
