import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function User(){
    useEffect(()=>{
        axios.get("http://localhost:8001/").then(res =>console.log(res)).catch(err => console.log(err))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow mt-5 mb-5">
                        
                        <div className="card-header d-flex justify-content-between">
                        <h4 className="d-flex mx-3">Users</h4>  
                        <Link type="submit" to="" className="btn btn-primary mx-3"><i className="fa fa-plus"></i>Add</Link>
                                      
                            
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr >
                                        <th scope="col">ID</th>
                                        <th scope="col" style={{width: '40%'}}>Name</th>
                                        <th scope="col" style={{width: '20%'}}>Email</th>
                                        <th scope="col" style={{width: '20%'}}>Phone</th>
                                        <th scope="col" style={{width: '20%'}}>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Avinash</td>
                                        <td>avinash@gmail.com</td>
                                        <td>58348015</td>
                                        <td>
                                            <Link to=""><i class="fa fa-pencil mr-2 text-secondary"></i></Link>
                                            <Link to=""><i class="fa fa-trash mx-2 text-danger"></i></Link>
                                        </td>
                                    </tr>
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