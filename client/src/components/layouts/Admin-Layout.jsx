import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";


export const AdminLayout = () => {

    const { user, isLoading } = useAuth();

    console.log(user);

    if(isLoading){
        return <h1>Loading ...</h1>
    }

    if(! user.isAdmin){
        return <Navigate to="/" />
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/admin/users' ><FaUser/>users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/admin/contacts' ><FaMessage/> contacts</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service' ><FaRegListAlt /> services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'><FaHome/> Home</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>


                <center><h2 className="h2">Admin Pannel is Here...</h2></center>
                <div className="container admin_pannel grid-two-cols"> 
                    <div>
                    <img className="admin_image" src={user.image} alt="User Image" width="300" /> 
                    </div>
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="hh">{user.username}</h2>
                        <br/>
                        <h2 className="hh"><i>{user.email}</i></h2>
                        <br/>
                        <h2 className="hh"><i>91+ {user.phone}</i></h2>
                        <br/> 
                    </div>
                </div> 
            </header>
            <Outlet/>
        </>
    )
}
 
