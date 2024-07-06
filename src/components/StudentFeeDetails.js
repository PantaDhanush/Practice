import React from 'react'

export default function StudentFeeDetails() {
  return (
    <div className='container mt-3'>
        <h1 className='text-center text-info mt-5'>Receipts</h1>
        <table class="table table-bordered text-center opacity-75 shadow table-hover mt-5">
            <thead>
                <tr className='table-primary'>
                    <th>RECEIPT NUMBER</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9865</td>
                    <td>18-JUN-2022</td>
                    <td>70000.0</td>
                </tr>
                <tr>
                    <td>5885</td>
                    <td>6-OCT-2022</td>
                    <td>100000.0</td>
                </tr>
                <tr>
                    <td>2837</td>
                    <td>23-MAR-2023</td>
                    <td>80000.0</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
