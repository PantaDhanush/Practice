import React from 'react'
import logo from "./logo.jpeg";
import{Link} from "react-router-dom";
import "./Custom.css";
export default function StudentLogin() {
  return (
    <div style={{height:"70vh"}}>
    <div className='row my-5 mx-5  justify-content-center' style={{height: "70vh"}}>
      <div className='col-12 col-lg-6 d-flex align-items-end  align-items-lg-center justify-content-center'>
            <img src={logo} alt="Logo" style={{width:230}} className="rounded-pill"/>
      </div>
      <div className='col-10 col-lg-6 mt-4 pt-4 d-flex align-items-lg-center align-items-start justify-content-center'>
        <div>
            <form>
                <div className='row align-items-center justify-content-center px-5'>
                <h3 class="form-group col-10 col-lg-6" id='studentheading'>Login to Student Portal</h3>
                <div className="form-group form-floating col-10 col-lg-8 my-4">
                    <i className="bi bi-envelope-fill bi-lg"></i>
                    <input type="email" className="form-control"id='UserEmail'placeholder="Enter Email" required/>                    
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <label htmlFor="UserEmail">Enter Email</label>

                </div>
                <div className="form-group form-floating mb-3 col-lg-8 col-10">
                    <i class="bi bi-key-fill"></i>
                    <input type="password" className="form-control " id="UserPassword"placeholder="Password" required/>
                    <label htmlFor="UserPassword">Password</label>
                </div>
                    <div className="form-group mb-3 col-lg-8 col-10 d-flex justify-content-end">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                <button type="submit" className="btn btn-info col-lg-8 col-10">Log in</button>
                </div>
            </form>
            </div>
            </div>
    </div>
    </div>
  )
}
