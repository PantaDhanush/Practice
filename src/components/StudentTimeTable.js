import React from 'react'

export default function StudenntTimeTable() {
  return (
    <div className='container mt-3'>
      <h1 className='text-center text-info mt-5'>TIME TABLE</h1>
        <table class="table table-bordered text-center opacity-75 shadow table-hover mt-5">
            <thead>
                <tr className='table-primary'>
                    <th>COURSE TITLE</th>
                    <th>COURSE ID</th>
                    <th>FACULTY NAME</th>
                    <th>ROOM NO</th>
                    <th>TIMINGS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>MONGO DB</td>
                    <td>CSE-1003</td>
                    <td>KRISHNA</td>
                    <td>101</td>
                    <td><strong>9:00 AM-9:50 AM</strong></td>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>CSE-1002</td>
                    <td>RAMUDU</td>
                    <td>204</td>
                    <td><strong>10:00 AM-10:50 AM</strong></td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>CSE-1004</td>
                    <td>VENKATESH</td>
                    <td>108</td>
                    <td><strong>2:00 PM-2:50 PM</strong></td>
                </tr>
                <tr>
                    <td>DBMS</td>
                    <td>CSE-2007</td>
                    <td>Divya</td>
                    <td>118</td>
                    <td><strong>4:00 PM-4:50 PM</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
