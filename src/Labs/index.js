// import Assignment3 from "./a3";
// // import { Link } from "react-router-dom";
// import Nav from "../Nav";

// function Labs() {
//     return (
//         <div className="container">
//             <Nav/>
//             {/* <Link to="/hello">Hello</Link> |
//             <Link to="/Labs/a3">A3</Link> |
//             <Link to="/Kanbas">Kanbas</Link> */}
//             <Assignment3 />


//         </div>
//     );
// }
// export default Labs;
// import Nav from "../Nav";
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import Assignment6 from "./a6";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    const { pathname } = useLocation();
    // const { pathname } = location;
    return (
        <Provider store={store}>
            <div>

                <nav className="nav nav-tabs mb-2">
                    <Link className="nav-link" to="/Labs">
                        Labs</Link>
                    <Link className="nav-link" to="/hello">
                        Hello</Link>
                    <Link className="nav-link" to="/Kanbas">
                        Kanbas</Link>
                </nav>




                <h1>Labs</h1>
                <div className="nav nav-pills">
                    <Link
                        to="/Labs/a3"
                        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
                    >
                        Assignment 3
                    </Link>
                    <Link
                        to="/Labs/a4"
                        className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
                    >
                        Assignment 4
                    </Link>
                    <Link
                        to="/Labs/a5"
                        className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
                    >
                        Assignment 5
                    </Link>
                    <Link
                        to="/Labs/a6"
                        className={`nav-link ${pathname.includes("a6") ? "active" : ""}`}
                    >
                        Assignment 6
                    </Link>
                </div>

                <Routes>

                    <Route path="/" element={<Navigate to="a3" />} />
                    <Route path="a3" element={<Assignment3 />} />
                    <Route path="a4/*" element={<Assignment4 />} />
                    <Route path="a5" element={<Assignment5 />} />
                    <Route path="a6" element={<Assignment6 />} />
                </Routes>

            </div>
        </Provider>

    );
}

export default Labs;