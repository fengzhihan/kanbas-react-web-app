import Signin from "./users/signin";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";


function Project() {
  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/Project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/Project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/Project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/Project/search" className="list-group-item">
              Search
            </Link>
            <Link to="/Project/admin/users" className="list-group-item">
              Users
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/Project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;