import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  let params = useParams();
  const [student, setStudent] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    async function fetchData(params) {
      let student = await axios.get(
        `https://62449f9839aae3e3b75250ef.mockapi.io/users/${params.id}`
      );
      setStudent(formik.setValues(student.data));
    }
    fetchData(params);
  }, []);
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
          errors.class = "Please Enter Class";
        }
        if (values.marks === "") {
          errors.marks = "Please Enter Marks";
        }

        if (values.result === "") {
          errors.result = "Please Enter Result";
        }
        return errors;
      }
    },
    onSubmit: (values) => {
      async function submit() {
        try {
          await axios.put(
            `https://62449f9839aae3e3b75250ef.mockapi.io/users/${values.id}`,
            values
          );
        } catch (error) {
          console.log(error);
        }
      }

      submit(values);
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
)}

export default EditStudent;
