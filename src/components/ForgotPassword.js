import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ForgotPassword() {
  
    const emailRef = useRef();

 
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const { forgotPassword } = useAuth();
  var handelSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setMessage("")
      setLoading(true)
      await forgotPassword(emailRef.current.value);
      setMessage("Reset link is sent to your password")
      
    } catch(error){
      setError(`unable to Reset Password  ${error}`);
    }
    setLoading(false)
  };
  return (
    <div className='d-flex align-items-center' style={{"height":"100vh"}}>
        <div className='w-100'>

      <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Password Reset</h1>
        
        <hr />
        {error && (
            <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {message && (
            <div className="alert alert-success" role="alert">
            {message}
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

          <button
            disabled={loading}
            // onClick={login}
            type="submit"
            className="btn btn-primary w-100"
          >
            Send Email
          </button>
        </form>
       

        </div>
        <div className="mb-3">
          
          
        <div className="w-100 text-center mt-2">
        Wish to Log in, <NavLink to="/login">LogIn</NavLink>
      </div>
          
      </div>
      </div>
    </div>
  )
}
