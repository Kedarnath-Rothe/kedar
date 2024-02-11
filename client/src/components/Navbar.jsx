import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import './Navbar.css';

const Navbar = () => {

    const { isLoggedIn, user } = useAuth();

    return(
        <header>
        <div className="container" >
            <div className="logo-brand" >
               <NavLink className='l' to="/" > KedarRothe </NavLink>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink className='navlink' to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to="/about" >About</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to="/service" >Services</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to="/contact" >Contact</NavLink>
                    </li>

                    {isLoggedIn ? (
                        <>
                        <li>
                        <NavLink className='navlink' to="/logout" >Logout</NavLink>
                        </li>

                        {user.isAdmin && (
                                    <li>
                                        <NavLink className='navlink' to="/admin">Admin</NavLink>
                                    </li>
                        )}
                        </>
                        
                    )
                    : (
                    <>
                    <li>
                        <NavLink className='navlink' to="/register" >Register</NavLink>
                    </li>
                    <li>
                        <NavLink className='navlink' to="/login" >Login</NavLink>
                    </li>
                    </>

                    )}
                    
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Navbar;