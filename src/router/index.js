import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import User from "../pages/User"
import AddEditUser from "../pages/AddEditUser"
import AccountType from "../pages/accounting/AccountType"





function MyRouter(){
    return (
        <div>
           
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/users' element={<User/>}/>
                <Route path='/adduser' element={<AddEditUser/>}/>
                <Route path='/updateuser/:id' element={<AddEditUser/>}/>
                <Route path='/viewuser/:id' element={<AddEditUser/>}/>
                <Route path='/accounttype' element={<AccountType />} />
            </Routes>

        </div>
    )

}

export default MyRouter