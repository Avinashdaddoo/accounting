import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email:'',
  mobile: '',
  add:'',
  work:'',
  desc:'',
  }


const AddEditUser = () => {
  const [state, setState] = useState(initialState);
  const {name, email, mobile, add, work, desc} = state;

  const navigate = useNavigate();

  const AddUser = async (users) => {
    const response = await axios.post("http://localhost:8001/user", users);
    if(response.status === 200) {
      toast.success(response.data);
      
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !mobile || !add || !work || !desc){
      toast.error("Please fill all fields ");
    }else {
      AddUser(state);
      navigate('/users')
    }
      


  }

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({...state,[name]:value});
  }
  return (
    <div style={{ marginTop: "100px"}}>
      <form style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}} onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' value={name} onChange={handleInputChange }/>
        <label htmlFor='email'>Email</label>
        <input type="text" id='email' value={email} onChange={handleInputChange }/>
        <label htmlFor='mobile'>Mobile Number</label>
        <input type="text" id='mobile' value={mobile} onChange={handleInputChange }/>
        <label htmlFor='add'>Address</label>
        <textarea row="3" id='add' value={add} onChange={handleInputChange }/>
        <label htmlFor='work'>Work</label>
        <input type="text" id='work' value={work} onChange={handleInputChange }/>
        <label htmlFor='desc'>Remarks</label>
        <textarea row="3" id='desc' value={desc} onChange={handleInputChange }/>
        <input type="submit" className='' value='Add'/>
      </form>

    </div>
  )
}

export default AddEditUser