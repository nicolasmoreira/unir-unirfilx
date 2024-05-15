import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchResults from './components/SearchResults';
import RentalPage from './components/RentalPage';
import PurchasePage from './components/PurchasePage';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/rentals" element={<RentalPage />} />
                <Route path="/purchases" element={<PurchasePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
