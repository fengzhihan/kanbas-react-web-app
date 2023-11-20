// import React, { useEffect, useState } from "react";
// import "./moduleList.css";
// import { useParams } from "react-router-dom";
// import db from "../../Database";
// import { useSelector, useDispatch } from "react-redux";
// import {
//     addModule,
//     deleteModule,
//     updateModule,
//     setModule,
//     setModules,
// } from "./modulesReducer";
// import { findModulesForCourse, createModule } from "./client";
// // import {createModule, findModulesForCourse} from "./client";
// // import * as client from "./client";



// function ModuleList() {
//     const { courseId } = useParams();
//     useEffect(() => {
//         findModulesForCourse(courseId)
//             .then((modules) =>
//                 dispatch(setModules(modules))
//             );
//     }, [courseId]);
//     const modules = useSelector((state) => state.modulesReducer.modules);
//     const module = useSelector((state) => state.modulesReducer.module);
//     const dispatch = useDispatch();

//     const handleAddModule = () => {
//         createModule(courseId, module).then((module) => {
//             dispatch(addModule(module));
//         });
//     };



//     return (
//         <ul className="list-group">
//             <li className="list-group-item">

//                 <input value={module.name}
//                     onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
//                 />
//                 <button className="btn btn-success" onClick={handleAddModule}>
//                     Add</button>
//                 <button onClick={() => dispatch(updateModule(module))}>
//                     Update
//                 </button>
//                 <br />




//                 <textarea value={module.description}
//                     onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
//                 />
//             </li>





//             {modules
//                 .filter((module) => module.course === courseId)
//                 .map((module, index) => (
//                     <li key={index} className="list-group-item module-list">
//                         <button
//                             onClick={() => dispatch(setModule(module))}>
//                             Edit
//                         </button>

//                         <button
//                             onClick={() => dispatch(deleteModule(module._id))}>
//                             Delete
//                         </button>

//                         <h3>{module.name}</h3>
//                         {/* <span class="float-end badge bg-primary rounded-pill">14</span> */}
//                         <p>{module.description}</p>

//                         {
//                             module.lessons && (
//                                 <ul className="list-group">
//                                     {
//                                         module.lessons.map((lesson, index) => (
//                                             <li key={index} className="list-group-item">
//                                                 <h4>{lesson.name}</h4>

//                                                 <p>{lesson.description}</p>

//                                             </li>
//                                         ))
//                                     }
//                                 </ul>
//                             )
//                         }
//                     </li>
//                 ))
//             }
//         </ul>
//     );
// }
// export default ModuleList;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { createModule, findModulesForCourse } from "./client";
import * as client from "./client";
import * as modulesReducer from './modulesReducer.js'



function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId, dispatch]);   

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => { 
        console.log('deleteModule')
        client.deleteModule(moduleId).then((status) => {
            dispatch(modulesReducer.deleteModule(moduleId));
            console.log('moduleId', moduleId)
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };


    return (
        <ul className="list-group">
            <li className="list-group-item justify-content-between d-flex ">
                <div className="wd-inputs">
                    <input className="form-control wd-module-title-input"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }
                    />
                    <textarea className="form-control wd-module-des-input"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                </div>
                <div>
                    <button className="btn btn-primary"
                        onClick={() => handleUpdateModule(module)}>
                        Update
                    </button>

                    <button className="btn btn-success"
                        onClick={
                            () => handleAddModule()}>
                        Add</button>

                </div>
            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item wd-module-item">

                            <h3>
                                {module.name}
                                <div className="d-block float-end">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <button className="btn btn-success"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>

                                </div>

                            </h3>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;