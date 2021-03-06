import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { signup } = useAuth()
  var handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password doesn't match !");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login")

    } catch (error) {
      setError(`unable to Create Account because ${error}` );
    }
    setLoading(false);

  };
  return (
    <div className="d-flex align-items-center justify-content-center " style={{"height":"100vh"}}>
      <div className="w-100">
      <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded  ">
        <h1>SignUp Form</h1>
        
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
            onClick={signup}
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign Up
          </button>
        </form>
        
        
      </div>
      <div className="w-100 text-center mt-2">
        Allready have an email, <NavLink to="/login">LogIn</NavLink>
      </div>
      </div>
    </div>
  );
}
