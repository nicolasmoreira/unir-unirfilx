import React, {useState} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './Home.css';

const Home = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="home">
            <div className="home__content">
                <img src="/logo192.png" width={'30%'} alt="UnirFlix Logo" className="home__logo"/>
                <h1>Bienvenido a UnirFlix</h1>
                <p>Tu plataforma de streaming favorita para ver trailers de películas españolas.</p>
                <SearchBar setResults={setResults}/>
            </div>
            <SearchResults results={results}/>
        </div>
    );
};

export default Home;
