import React from 'react'
import parentLogo from "./parentLogo.png";
import studentLogo from "./studentLogo.png";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="container-fluid mt-3" style={{height:"80vh"}}>
            <h1 className='text-center'>Unlock Your Future with <i>MERNSCHOOL</i></h1>
            <p className='text-center display-6'>At MERNSCHOOL, we empower aspiring developers with cutting-edge skills in MongoDB, Express.js, React, and Node.js. </p>
        <div className="row">
            <div className="col-lg-4 col-12 p-3">
                <div className='d-flex'>
                    <div className='flex-fill align-items-lg-center justify-content-center'>
                        <img src={parentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                    </div>
                    <div className='flex-fill'>
                        <h5 className='text-success'>Parent Login</h5>
                        <Link>
                            <button type='submit' className='btn btn-success fw-bold'>
                                <i class="bi bi-box-arrow-in-right"></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 p-3">
                <div className='d-flex'>
                        <div className='flex-fill align-items-lg-center justify-content-center'>
                            <img src={studentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                        </div>
                        <div className='flex-fill'>
                            <h5  className='text-info'>Student Login </h5>
                            <Link to="/student-login">
                                <button type='submit'  className='btn btn-info fw-bold'>
                                    <i class="bi bi-box-arrow-in-right"/>
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
            <div className="col-lg-4  col-12 p-3">
            <div className='d-flex'>
                    <div className='flex-fill align-items-lg-center justify-content-center'>
                        <img src={parentLogo} alt="Logo" style={{width:70}} className="rounded-pill"/>
                    </div>
                    <div className='flex-fill'>
                        <h5 className='text-primary'>Faculty Login</h5>
                        <Link to="/student-login">
                                <button type='submit'  className='btn btn-primary fw-bold'>
                                    <i class="bi bi-box-arrow-in-right"/>
                                </button>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
