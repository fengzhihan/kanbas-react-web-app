import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-9gbn.onrender.com/api/courses";
const MODULES_URL = "https://kanbas-node-server-app-9gbn.onrender.com/api/modules";
// const COURSES_URL = "http://localhost:4000/api/courses"
// const MODULES_URL = "http://localhost:4000/api/modules"
// const API_BASE = process.env.REACT_APP_API_BASE;
// const COURSES_URL = `${API_BASE}/courses`;
// const MODULES_URL = `${API_BASE}/modules`;

// export const deleteModule = async (moduleId) => {
//     console.log('client.jsdeleteModule')
//     const response = await axios
//         .delete(`${MODULES_URL}/${moduleId}`);
//     console.log(response.data)
//     return response.data;
// };

export const deleteModule = async (moduleId) => {
    console.log('beforTry')
    try {
        const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting module:", error);
        throw error;
    }
};


export const updateModule = async (module) => {
    const response = await axios.
        put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
};

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};
