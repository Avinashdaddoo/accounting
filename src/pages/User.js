import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function User(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
       
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8001/users");
        if(response.status === 200) {
            setUsers(response.data);
        }
    };

    console.log("data=>", users);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow mt-5 mb-5">
                        
                        <div className="card-header d-flex justify-content-between">
                        <h4 className="d-flex mx-3">Users</h4>  
                        <Link type="submit" to="/adduser" className="btn btn-primary mx-3"><i className="fa fa-plus"></i>Add</Link>
                                      
                            
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr >
                                        <th scope="col">ID</th>
                                        <th scope="col" style={{width: '20%'}}>Name</th>
                                        <th scope="col" style={{width: '10%'}}>Email</th>
                                        <th scope="col" style={{width: '10%'}}>Mobile</th>
                                        <th scope="col" style={{width: '20%'}}>Address</th>
                                        <th scope="col" style={{width: '20%'}}>Department</th>
                                        <th scope="col" style={{width: ''}}>Description</th>
                                        <th scope="col" style={{width: ''}}>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map((item, index) => {
                                        return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.add}</td>
                                        <td>{item.work}</td>
                                        <td>{item.desc}</td>
                                        <td>
                                            <Link to={`/viewuser/${item.id}`}><i className="fa fa-eye mx-2 text-tertiary"></i></Link>
                                            <Link to={`/updateuser/${item.id}`}><i className="fa fa-pencil mr-2 text-secondary"></i></Link>
                                            <Link to={`/deleteuser/${item.id}`}><i className="fa fa-trash mx-2 text-danger"></i></Link>
                                        </td>
                                    </tr>
                                    )
                                    })}
                                </tbody>
                            </table>

                        </div>
                        <div className="card-footer">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default User;