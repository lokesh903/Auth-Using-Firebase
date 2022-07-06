import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { updateEmail,updatePassword,currentUser } = useAuth()

    var handelSubmit = async (e) => {
      e.preventDefault();
      setError("");
        setLoading(true);
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Password doesn't match!");
      }
      var promises=[]
      if(emailRef.current.value!==currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
      }
      if(passwordRef){
        promises.push(updatePassword(passwordRef.current.value))
      }
      Promise.all(promises).then(()=>{
        navigate("/")
      }).catch((err)=>{
        setError(`Unabel to update Proflie : ${err}`)
    }).finally(()=>{
        setLoading(false)
    })
      
  
    };
    return (
      <div className="d-flex align-items-center justify-content-center " style={{"height":"100vh"}}>
        <div className="w-100">
        <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded  ">
          <h1>Update Profile</h1>
          
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
                defaultValue={currentUser.email}
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                ref={passwordConfirmRef}
              />
            </div>
  
            <button
              disabled={loading}
              
              type="submit"
              className="btn btn-primary w-100"
            >
              Update Profile 
            </button>
          </form>

        </div>
       
        </div>
      </div>
  )
}
