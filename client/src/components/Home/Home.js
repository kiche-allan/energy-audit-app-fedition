import { Link } from 'react-router-dom';

import './Home.css';

export const Home = () => {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>Track your Energy Consumption</h2>
                <h3>Conserve Energy</h3>
                <h4>
                    <Link to={'/register'}>
                        Register
                    </Link>
                    to learn more about us
                    <Link to={'/about'}>
                        more!
                    </Link>
                </h4>
            </div>
            <img src="/images/planet.png" alt="planet" />
        </section>
    );
};