import { Link } from "react-router-dom";
import Nav from "../../Nav";
function HelloWorld() {
    return (
        <div>
            {/* <Link to="/hello">Hello</Link> |
            <Link to="/Labs/">Labs</Link> |
            <Link to="/Kanbas">Kanbas</Link> */}
            <Nav/>
            <h1>Hello World!</h1>
        </div>
    )
};
export default HelloWorld;