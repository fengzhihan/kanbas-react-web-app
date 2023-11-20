import { Route, Routes, Navigate } from "react-router";
// import { Link } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";



function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = "http://localhost:4000/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    // const addNewCourse = () => {
    //     setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    // };
    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };



    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter(
            (c) => c._id !== course._id));
    };



    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // }

    const updateCourse = async (course) => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
        setCourse({ name: "" });
    }


    return (
        <Provider store={store}>
            <div className="d-flex">
                {/* <Link to="/hello">Hello</Link> |
            <Link to="/Labs/">Labs</Link> |
            <Link to="/Kanbas">Kanbas</Link> */}
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account />} />
                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        {/* <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<Account />} />
                        <Route path="History" element={<Account />} />
                        <Route path="Studio" element={<Account />} />
                        <Route path="Commons" element={<Account />} />
                        <Route path="Help" element={<Account />} /> */}
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;