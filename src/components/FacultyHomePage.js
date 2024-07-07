import React from "react";
import MarkSheet from "./marksheet.jpg";
import ProfilePic from "./profile.png";
import TimeTable from "./timetable.png";
export default function FacultyHomePage() {
  return (
    <div className="row justify-content-around align-items-center mt-5" style={{height:"70vh"}}>
      <div className="col-lg-3 shadow rounded-3">
        <div className="card border-0">
          <img
            src={ProfilePic}
            alt="payment"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Faculty</h5>
            <button type="submit" className="btn btn-primary mt-3">
              Faculty Details
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 shadow rounded-3">
        <div className="card border-0">
          <img
            src={MarkSheet}
            alt="marks"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Marks Sheet</h5>
            <button type="submit" className="btn btn-primary mt-3">
                Marks Upload
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 shadow rounded-3">
        <div className="card border-0">
          <img
            src={TimeTable}
            alt="student"
            className="card-img-top"
            style={{ height: "auto", width: "100px", margin: "0 auto", paddingTop: "20px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">Timetable</h5>
            <button type="submit" className="btn btn-primary mt-3">
                Timetable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}