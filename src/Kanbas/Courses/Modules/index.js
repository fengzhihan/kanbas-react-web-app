import ModuleList from "./ModuleList";
import"./index.css";

function Modules() {
    return (
        <div>
            <h2>Modules</h2>
            <div className="btn btn-space">
                <button className="btn btn-secondary">Collapse All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">Publish All</button>
                <button className="btn btn-danger">+ Module</button>
            </div>
            <hr/>
            <ModuleList />
        </div>
    );
}
export default Modules;