import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <div className="buttons-container">
        <button
          className="wd-buttons module-module-button"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button className="wd-buttons" onClick={updateCourse}>
          Update
        </button>
      </div>

      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <input
        value={course.semester}
        className="form-control"
        onChange={(e) => setCourse({ ...course, semester: e.target.value })}
      />
      <input
        value={course.shortenTerm}
        className="form-control"
        onChange={(e) => setCourse({ ...course, shortenTerm: e.target.value })}
      />
      <hr />

      <h2>Published Courses (3)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link
                  className="card-text"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    style={{ height: 150 }}
                  />{" "}
                </Link>
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.number + " " + course._id + " " + course.name}{" "}
                  </Link>
                  <Link
                    className="card-text"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <p className="card-text">
                      {course.number + "." + course._id + "." + course.endDate}
                    </p>
                    <p className="card-text-term">
                      {course.endDate + " " + course.semester}
                    </p>
                  </Link>
                  <div className="class-buttons-container">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go{" "}
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
