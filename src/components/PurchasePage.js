import React, {useContext} from 'react';
import './PurchasePage.css';
import {PurchaseContext} from "../contexts/PurchaseContext";

const PurchasePage = () => {
    const {purchases} = useContext(PurchaseContext);

    return (
        <div className="purchase-page container">
            <h1>Mis Compras</h1>
            <div className="row">
                {purchases.map(rental => (
                    <div key={rental.id} className="col-md-4 rental-page__item">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{rental.title}</h5>
                                <h6 className="card-subtitle mb-2">{rental.director} - {rental.year}</h6>
                                <p className="card-text">{rental.synopsis}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchasePage;
