import React, { useContext } from 'react';
import { movies } from '../data';
import { RentalContext } from '../contexts/RentalContext';
import './PurchasePage.css';

const PurchasePage = () => {
    const { purchases, addPurchase } = useContext(RentalContext);

    return (
        <div className="purchase-page container">
            <h1>Compras</h1>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-4 purchase-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{movie.director} - {movie.year}</h6>
                                <p className="card-text">{movie.synopsis}</p>
                                <button className="btn btn-primary" onClick={() => addPurchase(movie)}>Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Mis Compras</h2>
            <div className="row">
                {purchases.map(purchase => (
                    <div key={purchase.id} className="col-md-4 purchase-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{purchase.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{purchase.director} - {purchase.year}</h6>
                                <p className="card-text">{purchase.synopsis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchasePage;
