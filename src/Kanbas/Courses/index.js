import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";



function Courses({ }) {
    const { courseId } = useParams();
    const URL = "https://kanbas-node-server-app-9gbn.onrender.com/api/courses";
    // const URL = "http://localhost:4000/api/courses"
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);



    // const { pathname } = useLocation();
    // const [empty, kanbas, courses, id, screen] = pathname.split("/");
    // const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <div>
                <h5 className="course-head">
                    {/* {course.number} - {screen} */}
                    <button className="x-icon btn btn-secondary">Student View</button>
                </h5>
                <div className="course-head-line"><hr /></div>
            </div>

            <CourseNavigation />

            <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{
                    left: "320px",
                    top: "70px",
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route
                        path="Assignments/:assignmentId"
                        element={<AssignmentEditor />}
                    />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;
