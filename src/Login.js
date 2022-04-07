import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function Login() {
  return (
    <div>
      <div className="col-md-6 col-lg-6 col-xl-6">
        <label className="form-label">User Name/ Email</label>
        <input
          type="text"
          className="form-control justify-content-center"
          name="username"
          id="username"
        />
      </div>

      <div className="col-md-6 col-lg-6 col-xl-6">
        <label className="form-label"> Password</label>
        <input
          type="password"
          className="form-control justify-content-center"
          id="password"
          name="password"
        />
      </div>

      <div className="col-md-6 col-lg-6 col-xl-6 m-5">
       <Link to={"/plans"}> <button
          className="btn btn-lg btn-primary justify-content-center"
          type="submit"
        >
          Login
        </button></Link>
      </div>
    </div>
  );
}

export default Login;
