// import { Link, useLocation } from "react-router-dom";
// function KanbasNavigation() {
//     const links = ["Account", "Dashboard", "Courses", "Calendar"];
//     const { pathname } = useLocation();
//     return (
//         <div className="list-group" style={{ width: 150 }}>
//             {links.map((link, index) => (
//                 <Link
//                     key={index}
//                     to={`/Kanbas/${link}`}
//                     className={`list-group-item ${pathname.includes(link) && "active"}`}>
//                     {link}
//                 </Link>
//             ))}
//         </div>
//     );
// }
// export default KanbasNavigation;

import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import "./index.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <FaInbox className="wd-icon"/>,
        History: < FaClock className="wd-icon"/>,
        Studio: <FaComment className="wd-icon"/>,
        Commons: <FaCompass className="wd-icon"/>,
        Help: <FaQuestion className="wd-icon"/>,
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkToIconMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;