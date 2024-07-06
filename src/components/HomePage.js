import React from 'react'
import parentLogo from "./parentLogo.png";
import studentLogo from "./studentLogo.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container-fluid mt-3" style={{height:"80vh"}}>
            <h1>Responsive Columns</h1>
            <p>Resize the browser window to see the effect.</p>
            <p>The columns will automatically stack on top of each other when the screen is less than 576px wide.</p>
        <div className="row">
            <div className="col-lg-4 col-12 p-3">
                <div className='d-flex'>
                    <div className='flex-fill align-items-lg-center justify-content-center'>
                        <img src={parentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                    </div>
                    <div className='flex-fill'>
                        <h5>Parent Login</h5>
                        <button type='submit' className='btn btn-success fw-bold'>
                            {/* <Link><i class="bi bi-box-arrow-in-right"></i></Link> */}
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 p-3 border  border-info border-3">
                <div className='d-flex'>
                        <div className='flex-fill align-items-lg-center justify-content-center'>
                            <img src={studentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                        </div>
                        <div className='flex-fill'>
                            <h5>Student Login </h5>
                            <button type='submit'  className='btn btn-info fw-bold'>
                                <Link to="/student-login">
                                    <i class="bi bi-box-arrow-in-right"/>
                                </Link>
                            </button>
                        </div>
                </div>
            </div>
            <div className="col-lg-4  col-12 p-3">
            <div className='d-flex'>
                    <div className='flex-fill align-items-lg-center justify-content-center'>
                        <img src={parentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                    </div>
                    <div className='flex-fill'>
                        <h5>Faculty Login</h5>
                        <button type='submit' className='btn btn-success fw-bold'>Hello</button>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
