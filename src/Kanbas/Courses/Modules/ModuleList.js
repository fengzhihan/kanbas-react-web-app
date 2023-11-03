import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";



function ModuleList() {
    const { courseId } = useParams();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };
    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         (module) => module._id !== moduleId));
    // };

    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // }
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    return (
        <ul className="list-group">
            <li className="list-group-item">

                <input value={module.name}
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add</button>
                <button onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <br />




                <textarea value={module.description}
                    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
            </li>





            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item module-list">
                        <button
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>

                        <button
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>

                        <h3>{module.name}</h3>
                        {/* <span class="float-end badge bg-primary rounded-pill">14</span> */}
                        <p>{module.description}</p>

                        {
                            module.lessons && (
                                <ul className="list-group">
                                    {
                                        module.lessons.map((lesson, index) => (
                                            <li key={index} className="list-group-item">
                                                <h4>{lesson.name}</h4>

                                                <p>{lesson.description}</p>

                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    );
}
export default ModuleList;