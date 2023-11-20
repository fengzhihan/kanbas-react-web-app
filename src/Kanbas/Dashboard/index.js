import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
 
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <div className="ms-5">
                <h2>Published Courses ({courses.length})</h2>
                <hr />

                <div className="d-flex flex-wrap">
                    {courses.map((course, index) => (
                        <div className="card m-2" style={{ width: "18rem" }}>
                            < img src="/images/teslabot.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                                    {course.name}
                                </Link>
                                <p className="card-text">
                                    This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p >
                            </div>
                        </div>
                    ))}
                </div>


                <h5>Course</h5>
                <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />

                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />


                <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />



                <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button onClick={addNewCourse} >
                    Add
                </button>
                <button onClick={updateCourse} >
                    Update
                </button>




                <div className="list-group">
                    {courses.map((course) => (
                        <Link key={course._id}>
                            to={`/Kanbas/Courses/${course._id}`}
                            className="list-group-item"
                            {course.name}
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course);
                                }}>
                                Delete
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;