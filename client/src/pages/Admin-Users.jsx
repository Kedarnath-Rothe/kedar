import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

import { Link } from 'react-router-dom';
import { baseURL } from "../url";

 const AdminUsers = () => {

  const[users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsersData = async() => {
    try{
      const response = await fetch(`${baseURL}/api/admin/users`, {
        method : "GET",
        headers : {
          Authorization : authorizationToken,
        }
      })

      const data = await response.json();
      console.log(data);
      setUsers(data);

    }
    catch(error){
      console.log(error.message);
    }
  }

  //Delete the use on delete button
  const deleteUser = async(id) => {
    try{
      const response = await fetch(`${baseURL}/api/admin/users/delete/${id}`, {
        method : "DELETE",
        headers : {
          Authorization : authorizationToken,
        }
      })

      const data = await response.json();
      console.log(data);
      
      if(response.ok){
        getAllUsersData();
      }
    }
    catch(error){
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllUsersData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
     <section className="admin-users-section">
      <div className="container">
        <h1>Admin Users Data</h1>
      </div>
      <div className="container admin-users">
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Dalete</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map( (curUser) => 
                   ( 
                    !curUser.isAdmin && (
                      <tr key={curUser._id}>
                        <td>{ curUser.username }</td>
                        <td>{ curUser.email }</td>
                        <td>{ curUser.phone }</td>
                        <td className="edit" ><button><Link className="edit2" to = {`/admin/user/${curUser._id}/edit`}>Edit</Link></button></td>
                      <td className="delete" > <button onClick={() => deleteUser(curUser._id) }>Delete</button> </td>
                  </tr>
                    ) )
                )
              }
            </tbody>
        </table>
      </div>
     </section>
    </>
  )
}

export default AdminUsers
