import React from 'react'
import personLogo from './personLogo.png';
export default function StudentDetails() {
  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-center'>
            <img src={personLogo} alt="ProfilePhoto"style={{width:130}} className="rounded-3 d-block border border-2 border-warning" />
      </div>
      <div className='text-center'><h3>Ram</h3></div>
      <div>
        <table className='table table-bordered table-dark opacity-75 shadow table-hover'>
            <tbody>
                <tr>
                    <td>Registration Number</td>
                    <td>22BCE</td>
                </tr>
                <tr>
                    <td>STUDENT NAME</td>
                    <td>RAM</td>
                </tr>
                <tr>
                    <td>DATE OF BIRTH</td>
                    <td>18-jul-2900</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>MALE</td>
                </tr>
                <tr>
                    <td>STUDENT MOBILE NUMBER</td>
                    <td>8927*******</td>
                </tr>
                <tr>
                    <td>PARENT MOBILE NUMBER</td>
                    <td>8927*******</td>
                </tr>
                <tr>
                    <td>NATIVE LANGUAGE	</td>
                    <td>TELUGU</td>
                </tr>
                <tr>
                    <td>NATIVE STATE</td>
                    <td>TAMIL NADU</td>
                </tr>
                <tr>
                    <td>BLOOD GROUP</td>
                    <td>O+</td>
                </tr>
                <tr>
                    <td>NATIONALITY</td>
                    <td>INDIAN</td>
                </tr>
                <tr>
                    <td>RELIGION</td>
                    <td>HINDU</td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td>GANDHI NAGAR,CHENNAI,TAMIL NADU</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
