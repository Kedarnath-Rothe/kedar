import { useAuth } from '../store/auth';

const Service = () => {

    const { services } = useAuth();
    return(
        <section className="section-services" >
            <div className="container" >
                <h1 className="main-heading" >Services</h1>
            </div>

            <div className="container grid grid-three-cols" >

            {
                services.map((curElem, index) => {
                    return (
                <div className="card" key={index}>
                    <div className="card-img" >
                        <img src={`../../carimages/${curElem.image}`} alt="hi" width='500'/>
                    </div>
                    <div className="card-details" > 
                      <h2>{curElem.carname}</h2> 
                      <p>{curElem.price}</p> 
                    </div>
                </div>

                    )
                })
            }

            </div>

        </section>
    )
}

export default Service;