import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-9gbn.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-9gbn.onrender.com/api/assignments";
// const API_BASE = process.env.REACT_APP_API_BASE;
// const COURSES_URL = `${API_BASE}/courses`;
// const MODULES_URL = `${API_BASE}/modules`;
export const deleteAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};
export const updateAssignment = async (assignment) => {
    const response = await axios.
        put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};

export const findAssignmentForCourse = async (assignmentId) => {
    const response = await axios
        .get(`${ASSIGNMENTS_URL}/${assignmentId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};