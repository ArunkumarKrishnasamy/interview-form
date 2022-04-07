import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1 className="h3 mb-0 text-gray-800  ">Dashboard</h1>
      <div className="d-sm-flex align-items-center justify-content-center m-2">
        <Link
          to={"/login-user"}
          className="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm m-2"
        >
          Log in
        </Link>

        <Link
          to={"/create-user"}
          className="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
