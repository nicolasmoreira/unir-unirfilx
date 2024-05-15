import React, { useContext } from 'react';
import { RentalContext } from '../contexts/RentalContext';
import './RentalPage.css';

const RentalPage = () => {
    const { rentals, returnRental } = useContext(RentalContext);

    return (
        <div className="rental-page container">
            <h1>Mis Alquileres</h1>
            <div className="row">
                {rentals.map(rental => (
                    <div key={rental.id} className="col-md-4 rental-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{rental.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{rental.director} - {rental.year}</h6>
                                <p className="card-text">{rental.synopsis}</p>
                                <button
                                    className="btn btn-secondary rental-page__button"
                                    onClick={() => returnRental(rental.id)}
                                >
                                    Devolver
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RentalPage;
