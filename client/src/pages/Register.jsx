import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseURL } from "../url";

const Register = () => {
    const [loading, setLoading] = useState(false); // State variable for loading status

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        image: null,
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "image") {
            value = e.target.files[0];
        }

        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting the form

        try {
            const formData = new FormData();
            formData.append("username", user.username);
            formData.append("email", user.email);
            formData.append("phone", user.phone);
            formData.append("password", user.password);
            formData.append("image", user.image);

            const response = await fetch(`${baseURL}/api/auth/register`, {
                method: "POST",
                body: formData,
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success("Registration successful");
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                    image: null,
                });
                navigate('/');
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
            }
        } catch (error) {
            console.error("ERROR", error);
        } finally {
            setLoading(false); // Set loading back to false after form submission
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/register.png" width="500" height="500" alt="Register image" />
                            </div>

                            <div className="registration-form">
                                <h1 className="main-heading mb-3"> Registration Form </h1>
                                <br />

                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone"
                                            id="phone"
                                            maxLength='10'
                                            minLength='10'
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="image">UserImage</label>
                                        <input
                                            type="file"
                                            name="image"
                                            id="image"
                                            accept="image/*"
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    {loading ? (
                                        <div className="loader">
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="#4fa94d"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />

                                        </div>
                                    ) : (
                                        <button type="submit" className="btn btn-submit">
                                            Register Now
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Register;
