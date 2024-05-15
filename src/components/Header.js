import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">UnirFlix</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Películas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Buscar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rentals">Alquileres</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchases">Compras</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
