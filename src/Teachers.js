import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import Swal from "sweetalert2";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect((values) => {
    async function fetchData(values) {
      try {
        let teachers = await axios.get(
          "https://62449f9839aae3e3b75250ef.mockapi.io/students"
        );
        setTeachers(teachers.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(values);
  }, []);
  function deleteData(teacher) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to revert this file record of ${teacher.name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(
              `https://62449f9839aae3e3b75250ef.mockapi.io/students/${teacher.id}`
            );
          } catch (error) {
            console.log(error);
          }
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your file record is safe :)",
            "error"
          );
        }
      });
  }

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Information</h1>
        <Link
          to={"/create-teacher"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          Teacher
        </Link>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => {
                return (
                  <tr>
                    <td>{teacher.id} </td>
                    <td>{teacher.name} </td>
                    <td>{teacher.position}</td>
                    <td>{teacher.office}</td>
                    <td>{teacher.age}</td>
                    <td>{teacher.startdate}</td>
                    <td>{teacher.salary}</td>
                    <td>
                      {" "}
                      <Link to={`/view-teacher/${teacher.id}`}>
                        {" "}
                        <button className="btn btn-primary mx-2"> View</button>
                      </Link>
                      <Link to={`/edit-teacher/${teacher.id}`}>
                        {" "}
                        <button className="btn btn-warning me-2"> Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                          deleteData(teacher);
                        }}
                      >
                        {" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
