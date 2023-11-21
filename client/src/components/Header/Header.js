import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import './Header.css';

export const Header = () => {
const {isAuthenticated} = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">Energy Audit App</Link></h1>
            <nav>
                <Link to="/catalog">All Energy Audits</Link>
                {/* Logged users */}
                {isAuthenticated && (
                    <div id="user">
                    <Link to="/diary">Diary</Link>
                    <Link to="/create-log">Data Entry</Link>
                    <Link to="/recommend">Recommendations</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                )}
                {/* Guest users */}
                {!isAuthenticated && (
                    <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/create-log">Data Entry</Link>
                    <Link to="/recommend">Recommendations</Link>
                    <Link to="/register">Register</Link>
                </div>
                )}
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};