import ModuleList from "../Modules/ModuleList";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
    return (
        <div className="row">
            <div className="col-10">
                <h2>Home</h2>
                <div className="btn btn-space">
                    <button className="btn btn-secondary">Collapse All</button>
                    <button className="btn btn-secondary">View Progress</button>
                    <button className="btn btn-secondary">Publish All</button>
                    <button className="btn btn-danger">+ Module</button>
                </div>
                <hr />

                <ModuleList />
            </div>


            <div className="col-2">
                <h2>Status</h2>
                <ul className="list-group">
                    <li className="list-group-item-ha">
                        Import Existing Content
                    </li>
                    <li className="list-group-item-ha">
                        Import From Commons
                    </li>
                    <li className="list-group-item-ha">
                        Choose Home Page
                    </li>
                    <li className="list-group-item-ha">
                        View Course Stream
                    </li>
                    <li className="list-group-item-ha">
                        New Announcement
                    </li>
                    <li className="list-group-item-ha">
                        New Analytics
                    </li>
                    <li className="list-group-item-ha">
                        View Course Notifications
                    </li>
                </ul>

                <h3>To Do</h3>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item-ha">
                        Grade A1 - ENV + HTML
                    </li>
                    <li className="list-group-item-ha">
                        Grade A2 - CSS + BOOTSTRAP
                    </li>
                </ul>


            </div>
        </div>
    );
}
export default Home;