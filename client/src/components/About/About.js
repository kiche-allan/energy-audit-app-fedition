import './About.css';

export const About = () => {
    return (
        <section id="about">

        <div className="about-message">
            <h2>About Energy Audit App:</h2>
            <p>
Empower your energy efficiency with our innovative energy audit app. Uncover hidden inefficiencies, gain data-driven insights, optimize energy usage, and reduce costs.</p>
        </div>
        <img src="/images/about.png" alt="planet" />

        <div id="about-page">
            <h1>What We Cover:</h1>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/Energy-Audit.jpg" />
                </div>
                <h3>Energy Audit</h3>
                <div className="quotes">
                    <p>"Audit your energy spends"</p>
                </div>
            </div>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/rec.jpeg"/>
                </div>
                <h3>Analytics</h3>
                <div className="quotes">
                    <p>"Graphically show energy use"</p>
                </div>
            </div>

            <div className="log">
                <div className="image-wrap">
                    <img src="/images/rec.jpeg" />
                </div>
                <h3>Recommendations</h3>
                <div className="quotes">
                    <p>"Show best practices, use cases and efficient methods of energy conservation"</p>
                </div>
            </div>

        </div>
    </section>
    );
}