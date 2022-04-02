import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function CreateTeacher() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startdate: "",
      salary: 0,
    },
    validate: (values) => {
      const errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Your Name";
        if (values.position === "") {
          errors.position = "Please Enter job Position";
        }
        if (values.office === "") {
          errors.office = "Please Enter Office Location";
        }

        if (values.age === 0 || values.age < 18) {
          errors.age = "Please Enter age it should be above 18";
        }
        if (values.salary === 0 || values.salary < 5000) {
          errors.salary = "Please Enter Salary and it should be above Rs.5000";
        }
        if (values.startdate === "") {
          errors.startdate = "Please Enter Start Date";
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
          navigate("/teachers");
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
          <label className="form-label">Position </label>
          <input
            type="text"
            className="form-control"
            id="position"
            name="position"
            onChange={formik.handleChange}
            value={formik.values.position}
            style={{ border: formik.errors.position ? "1px solid red" : "" }}
          />
          <span style={{ color: "red" }}>{formik.errors.position}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Office Location</label>

          <input
            type="text"
            className="form-control"
            id="office"
            name="office"
            style={{ border: formik.errors.office ? "1px solid red" : "" }}
            onChange={formik.handleChange}
            value={formik.values.office}
          />
          <span style={{ color: "red" }}>{formik.errors.office}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            required
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          <span style={{ color: "red" }}>{formik.errors.age}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startdate"
            name="startdate"
            onChange={formik.handleChange}
            value={formik.values.startdate}
          />
          <span style={{ color: "red" }}>{formik.errors.startdate}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            id="salary"
            name="salary"
            onChange={formik.handleChange}
            value={formik.values.salary}
          />
          <span style={{ color: "red" }}>{formik.errors.salary}</span>
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

export default CreateTeacher;
