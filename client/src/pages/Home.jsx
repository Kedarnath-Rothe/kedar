import { NavLink } from 'react-router-dom';
import { Analytics } from '../components/Analytics';
import '../index.css';
const Home = () => {
    return (
    
        <>
            <main> 
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                       <div className="hero-content" >
                        <p>This is our best Car Rental Company</p>
                        <h1>Wellcome to Car Company</h1>
                        <p>
                        Student Council observed the problem faced by girls of Parking of Vehicles behind the Cafeteria today and it was immediately brought to notice of Management. Please Note the New Parking Rule that Only Girls students can park their vehicle in E building Parking space w.e.f 24th January 2024
                        </p>
                        <div className="btn btn-group" >
                            <NavLink to="/contact" >
                                <button className="btn" >Contact Now</button>
                            </NavLink>
                            <NavLink to="/service" >
                                <button className="btn secondary-btn" >Learn More</button>
                            </NavLink>
                        </div>
                       </div>

                       <div className='hero-image' >
                        <img src='/images/home.png' width='400' height='400' alt='Home image' />
                       </div>

                    </div>
                </section>
            </main>

            {/* Second section */}

            <Analytics/>

            {/* {Third Section} */}

            <section className="section-hero">
                    <div className="container grid grid-two-cols">

                       <div className='hero-image' >
                        <img src='/images/home.png' width='400' height='400' alt='Home image' />
                       </div>

                       <div className="hero-content" >
                        <p>We are here to provide sevices</p>
                        <h1>Get Started Today</h1>
                        <p>
                        Student Council observed the problem faced by girls of Parking of Vehicles behind the Cafeteria today and it was immediately brought to notice of Management. Please Note the New Parking Rule that Only Girls students can park their vehicle in E building Parking space w.e.f 24th January 2024
                        </p>
                        <div className="btn btn-group" >
                            <NavLink to="/contact" >
                                <button className="btn" >Contact Now</button>
                            </NavLink>
                            <NavLink to="/service" >
                                <button className="btn secondary-btn" >Learn More</button>
                            </NavLink>
                        </div>
                       </div>

                    </div>
                </section>
        </>
        
    )
}

export default Home;