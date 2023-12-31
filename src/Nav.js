// import { Link, useLocation } from "react-router-dom";
// function Nav() {
//     const { pathname } = useLocation();
//     return (
//         <nav className="nav nav-tabs mt-2">
//             <Link to="/Labs"
//                 className={`nav-link ${pathname.includes("Labs") ? "active" : ""}`}>Labs</Link>
//             <Link to="/hello"
//                 className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
//             <Link to="/Kanbas"
//                 className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
//         </nav>

//     );
// }
// export default Nav;
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/Labs">
                Labs</Link>
            {/* <Link className="nav-link" to="/Labs/a4">
                A4</Link> */}
            <Link className="nav-link" to="/hello">
                Hello</Link>
            <Link className="nav-link" to="/Kanbas">
                Kanbas</Link>
        </nav>
    );
}


export default Nav;