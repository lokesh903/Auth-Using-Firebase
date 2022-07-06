import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const [error,setError]=useState("")
    const { currentUser,logout } = useAuth()
    const navigate=useNavigate()
    async function handelLogout(){
        try{
            setError("")
           await logout()
            navigate("/login")
        }catch{
            setError("Unabel to LogOut")
        }
    }
    function handelUpdate(){
        return null
    }
  return (
    <div className='container w-100 my-10 text-center'>
    {currentUser && (<h1><strong> Email: </strong> {currentUser.email}</h1>)}
    <hr />

    <NavLink to="/updateprofile" className='btn btn-light'>Update profile </NavLink> 
    <button type="submit" className="btn btn-light" onClick={handelLogout}>Log Out</button>
    
    
    </div>
  )
}
