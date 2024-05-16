import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import RentalPage from './components/RentalPage';
import PurchasePage from './components/PurchasePage';
import {RentalProvider} from './contexts/RentalContext';
import {PurchaseProvider} from './contexts/PurchaseContext';
import './App.css';

function App() {
    return (
        <PurchaseProvider>
            <RentalProvider>
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/movies" element={<MovieList/>}/>
                        <Route path="/movies/:id" element={<MovieDetail/>}/>
                        <Route path="/rentals" element={<RentalPage/>}/>
                        <Route path="/purchases" element={<PurchasePage/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </RentalProvider>
        </PurchaseProvider>
    );
}

export default App;
