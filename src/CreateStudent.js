import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";


function CreateStudent() {
  
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      marks: 0,
      result: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.name === "") {
        errors.name = "Please Enter Your Name";
        if (values.class === "") {
          errors.class = "Please Enter Your Class";
        }
        if (values.marks === "") {
          errors.marks = "Please Enter Your Marks";
        }

        if (values.result === "") {
          errors.result = "Please Enter Result";
        }
        return errors;
      }
    },
    onSubmit: (values) => {
      let print = (values) => {
        try {
          axios.post(
            "https://62449f9839aae3e3b75250ef.mockapi.io/users",
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
          navigate("/students");
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
          <label className="form-label">Class </label>
          <input
            type="text"
            className="form-control"
            id="class"
            name="class"
            onChange={formik.handleChange}
            value={formik.values.class}
            style={{ border: formik.errors.class ? "1px solid red" : "" }}
          />
          <span style={{ color: "red" }}>{formik.errors.class}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Marks Obtained</label>

          <input
            type="number"
            className="form-control"
            id="marks"
            name="marks"
            style={{ border: formik.errors.marks ? "1px solid red" : "" }}
            onChange={formik.handleChange}
            value={formik.values.marks}
          />
          <span style={{ color: "red" }}>{formik.errors.marks}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xl-4">
          <label className="form-label">Result</label>
          <input
            type="text"
            className="form-control"
            id="result"
            name="result"
            onChange={formik.handleChange}
            value={formik.values.result}
          />
          <span style={{ color: "red" }}>{formik.errors.result}</span>
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

export default CreateStudent;
