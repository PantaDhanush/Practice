import React from "react";
import { Link } from "react-router-dom";
import TimeTable from "./timetable.png";
import Payment from "./payment.png";
import MarkSheet from "./marksheet.jpg";
import ProfilePic from "./profile.png";
export default function StudentHomePage() {
  return (
    <div className="row justify-content-around align-items-center mt-5" style={{height:"70vh"}}>
      <div className="col-lg-2 shadow rounded-3">
        <div className="card border-0">
          <img
            src={ProfilePic}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Student</h5>
            <Link to='/Student-Details'>
                <button type="submit" className="btn btn-info mt-3">Student Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3">
        <div className="card border-0">
          <img
            src={MarkSheet}
            alt="marks"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Marks Sheet</h5>
            <button type="submit" className="btn btn-info mt-3">Marks Sheet</button>
          </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3">
        <div className="card border-0">
          <img
            src={TimeTable}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Timetable</h5>
            <Link to='/Student-TimeTable'>
                <button type="submit" className="btn btn-info mt-3">Timetable</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 shadow rounded-3">
        <div className="card border-0">
          <img
            src={Payment}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Fee Details</h5>
            <Link to='/Student-FeeDetails'>
                <button type="submit" className="btn btn-info mt-3">Fee Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}