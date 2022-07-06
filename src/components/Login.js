import React, { useState, useRef } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate =useNavigate()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  var handelSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch(error){
      setError(`unable to Login  ${error}`);
    }
    setLoading(false)
  };
  return (
    <div className="d-flex align-items-center " style={{"height":"100vh"}}>
      <div className="w-100">

      
      <div className="container w-50 shadow-lg  p-3 mb-5 bg-white rounded ">
        <h1>Login Form</h1>
        
        <hr />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              ref={passwordRef}
            />
          </div>
          
          
          <button
            disabled={loading}
            onClick={login}
            type="submit"
            className="btn btn-primary w-100"
          >
            Log In
          </button>
        </form>
        <div className="w-100 text-center mt-3">
            <NavLink to="/forgotpassword">Forgot Password?</NavLink>
        </div>
        
            
     
            
      </div>
      <div className="w-100 text-center mt-2">
            Need an account? <NavLink to="/signup">Sign Up</NavLink>
          </div>
      </div>
    </div>
  );
}
