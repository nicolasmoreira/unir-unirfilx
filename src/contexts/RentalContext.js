import React, {createContext, useState} from 'react';

export const RentalContext = createContext();

export const RentalProvider = ({children}) => {
    const [rentals, setRentals] = useState([]);

    const addRental = (movie) => {
        if (!rentals.find(rental => rental.id === movie.id)) {
            setRentals([...rentals, movie]);
        }
    };

    const returnRental = (movieId) => {
        setRentals(rentals.filter(rental => rental.id !== movieId));
    };

    return (
        <RentalContext.Provider value={{rentals, addRental, returnRental}}>
            {children}
        </RentalContext.Provider>
    );
};
