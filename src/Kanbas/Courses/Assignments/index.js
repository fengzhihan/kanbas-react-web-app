import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="btn btn-space">
                <input type="text" placeholder="Search for Assignment"></input>
                <button className="btn btn-secondary">+ Group</button>
                <button className="x-icon btn btn-danger">+ Assignment</button>
            </div>
            <hr />
            
            <h2 className="assignment">Assignments for course {courseId}</h2>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;