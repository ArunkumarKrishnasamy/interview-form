import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function CreateUser() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: 0,
      password: "",
      repassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Your Name";
        if (values.email === "") {
          errors.email = "Please Enter E-mail";
        }
        if (values.phone === 0) {
          errors.phone = "Please Enter Phone No.";
        }

      
        if (values.password === "") {
          errors.startdate = "Please Enter password";
        }
        return errors;
      }
    },
    onSubmit: (values) => {
      let print = (values) => {
        try {
          axios.post(
            "https://62449f9839aae3e3b75250ef.mockapi.io/students",
            values
          );
        } catch (error) {
          console.log(error);
        }
      };
      print(values);

      formik.resetForm();
    },
  });

  return (
    <div>
      <form
        className="row g-3"
        onSubmit={async () => {
          await formik.handleSubmit();
          navigate("/dashboard");
        }}
      >
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{ border: formik.errors.name ? "1px solid red" : "" }}
          />
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            style={{ border: formik.errors.email ? "1px solid red" : "" }}
          />
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        </div>
       
     
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Phone No.</label>
          <input
            type={"tel"}
            className="form-control"
            id="phone"
            name="phone"
            required
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          <span style={{ color: "red" }}>{formik.errors.phone}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Create Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Re-Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        </div>

        <div className="col-12">
          <button
            disabled={!Object.keys(formik.errors).length === 0}
            className="btn btn-lg btn-primary"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
