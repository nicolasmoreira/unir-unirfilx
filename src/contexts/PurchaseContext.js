import React, {createContext, useState} from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({children}) => {
    const [purchases, setPurchases] = useState([]);

    const addPurchase = (movie) => {
        if (!purchases.find(purchase => purchase.id === movie.id)) {
            setPurchases([...purchases, movie]);
        }
    };

    return (
        <PurchaseContext.Provider value={{purchases, addPurchase: addPurchase}}>
            {children}
        </PurchaseContext.Provider>
    );
};
