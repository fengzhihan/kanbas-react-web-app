import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5() {
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href="http://localhost:4000/a5/welcome"
                    className="list-group-item">
                    Welcome
                </a>
            </div>
            <br />
            <h2>3.1</h2>
            <hr />
            <h2>Simple API Examples</h2>
            <EncodingParametersInURLs/>
            <br/>
            <h2>3.2</h2>
            <hr />
            <WorkingWithObjects />
            {/* <h1>3.2.4 Extra Credit Part</h1> */}
            <br/>
            <h2>3.3</h2>
            <hr />
            <WorkingWithArrays />
        </div>
    );
}
export default Assignment5;