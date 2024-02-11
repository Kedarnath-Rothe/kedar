import { useState } from "react";
// import '../index.css';
import { useAuth } from "../store/auth";

import { toast } from "react-toastify";
import { baseURL } from "../url";


const Contact = () => {

    const [contact , setContact] = useState({
        username : "",
        email : "",
        message : "",
    })

    const[userData, setUserData] = useState(true);

    const { user } = useAuth();

    if(userData && user){
        setContact({
            username : user.username,
            email : user.email,
            message : "",
        })

        setUserData(false);
    }

    // handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name] : value,
        })
    }

    // handleSubmit
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(contact);

        try{
            const response = await fetch(`${baseURL}/api/form/contact`,{
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(contact)
            })

            if(response.ok){
                setContact({ message : "" });
                const data = await response.json();
                console.log(data);
                toast.success("Message send seccessfully");
            }else{
                toast.error("Fill inputs properly");
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    
    return (
    <>
    <section className="section-contact" >
        <div className="contact-content container" >
            <h1 className="main-heading" > Contact Us </h1>
        </div>

        <div className="container grid grid-two-cols" >
            <div className="contact-img " >
                <img src="/images/home.png" alt="Contact Image" /> 
            </div>

            <div className="section-form" >
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" >username</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            name="username" 
                            id="username" 
                            autoComplete="off" 
                            value={contact.username}
                            onChange={handleInput}
                            required />
                    </div>

                    <div>
                        <label htmlFor="email" >email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your name" 
                            name="email" 
                            id="email" 
                            autoComplete="off" 
                            value={contact.email}
                            onChange={handleInput}
                            required />
                    </div>

                    <div>
                    <label htmlFor="message" >message</label>
                        <textarea 
                            name="message"
                            id="message"
                            autoComplete="off"
                            value={contact.message}
                            onChange={handleInput}
                            required
                            cols='30'
                            rows='5'
                            ></textarea>
                    </div>

                    <div>
                        <button type="submit" >submit</button>
                    </div>
                </form>
            </div>  
        </div>

        <section>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7569.046665795067!2d73.88286100048846!3d18.459939429275952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf47d15ce33%3A0x8098faf1b47cc4ba!2sVishwakarma%20Institute%20of%20Information%20Technology%2C%20Survey%20No.%202%2F3%2F4%2C%20VIM%20Private%20Rd%2C%20Kapil%20Nagar%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1706119075952!5m2!1sen!2sin" 
            width="80%" 
            height="450"  
            allowFullScreen
            loading="lazy"  
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe> 
            </section>

    </section>
    </>
    )
}

export default Contact;