import React, { createContext, useState } from 'react';

export const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
    const [rentals, setRentals] = useState([]);
    const [purchases, setPurchases] = useState([]);

    const addRental = (movie) => {
        setRentals([...rentals, movie]);
    };

    const addPurchase = (movie) => {
        setPurchases([...purchases, movie]);
    };

    return (
        <RentalContext.Provider value={{ rentals, addRental, purchases, addPurchase }}>
            {children}
        </RentalContext.Provider>
    );
};
