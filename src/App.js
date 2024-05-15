import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/search" component={SearchResults} />
          <Route path="/rentals" component={RentalPage} />
          <Route path="/purchases" component={PurchasePage} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
