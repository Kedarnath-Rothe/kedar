import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { baseURL } from "../url";
import { useAuth } from './../store/auth';



const AdminContacts = () => {

  const[contactData, setContactData] = useState([]);

  const { authorizationToken } = useAuth();

  const getContactsData = async() => {
    try{
      const response = await fetch(`${baseURL}/api/admin/contacts`, {
        method : "GET",
        headers : {
          Authorization : authorizationToken, 
        }
      })

      const data = await response.json();
      console.log(data);
      console.log('HH');

      console.log(response);


      if(response.ok){
        setContactData(data);
      }
      else{
        return; 

      }

    }
    catch(error){
      console.log('HH');
      console.log(error);
    }
  }


  //Define the function for the delete contacts

  const deleteContactById = async(id) => {
    try{
      const response = await fetch(`${baseURL}/api/admin/contacts/delete/${id}`,{
        method : "DELETE",
        headers : {
          Authorization : authorizationToken,
        }
      })

      if(response.ok){
        getContactsData();
        toast.success("Deleted Successfully...");
      }
      else{
        toast.error("Not Deleted...");
      }

    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getContactsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    return (
      <>
        <section className="admin-contacts-section" >
         <div className="container">
         <h1>Admin Contact Data</h1>
         </div>

          <div className="container admin-users" >
            {
              contactData.map((curElem, index) => {
                const {_id, username, email, message} = curElem;

                return (
                  <div key={index}>
                    <p><strong>{username}</strong></p>
                    <p><i>{email}</i></p>
                    <p>{message}</p>
                    <button className="btn" onClick={() => deleteContactById(_id)}>delete</button>
                  </div>)
              })
            }
          </div>
        </section>
      </>
    )
  }
  
  export default AdminContacts
  