import React from 'react';

export default function FacultyForgotpassword() {
  return (
    <div className='container-fluid mt-3 text-center'>
      <form className="row justify-content-center flex-column align-items-center"action="" id='form'>
            <h3 class="form-group"id="forgotHeading">Forgot Password</h3>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                <i className="bi bi-envelope-fill bi-lg"  id='icons'></i>
                <input type="email" className="form-control"id='UserEmail'placeholder="Enter Email" required/>                   
                <label htmlFor="UserEmail">Enter Faculty Email</label>
            </div>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                <i class="bi bi-person-fill bi-lg" id='icons'></i>
                <input type="text" className="form-control"id='UserName'placeholder="Enter Student Full Name" required/>                    
                <label htmlFor="UserName">Enter Faculty Full Name</label>
            </div>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                    <i class="bi bi-key-fill" id='icons'></i>
                    <input type="password" className="form-control " id="UserPassword"placeholder="Password" required/>
                    <label htmlFor="UserPassword">Password</label>
            </div>
            <div className="form-group form-floating col-8 col-lg-7 my-2">
                    <i class="bi bi-key-fill" id='icons'></i>
                    <input type="password" className="form-control " id="UserRe-Password"placeholder="Re-Password" required/>
                    <label htmlFor="UserRe-Password">Re-Password</label>
            </div>
            <button type="submit" className="btn btn-primary col-lg-3 col-4 my-4" id='UpdatingPassword'>Update Password</button>
      </form>
    </div>
  )
}