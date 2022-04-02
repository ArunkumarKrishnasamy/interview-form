import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let students = await axios.get(
          "https://62449f9839aae3e3b75250ef.mockapi.io/users"
        );
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function deleteData(student) {
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
        text: `You won't be able to revert this file record of ${student.name}`,
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
              `https://62449f9839aae3e3b75250ef.mockapi.io/users/${student.id}`
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
            "Your student record is safe :)",
            "error"
          );
        }
      });
  }

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Students Information</h1>
        <Link
          to={"/create-student"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> New
          Student
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
                <th>Class</th>
                <th>Marks</th>
                <th>Result</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr>
                    <td>{student.id} </td>
                    <td>{student.name} </td>
                    <td>{student.class}</td>
                    <td>{student.marks}</td>
                    <td>{student.result}</td>

                    <td>
                      {" "}
                      <Link to={`/view-student/${student.id}`}>
                        {" "}
                        <button className="btn btn-primary mx-2"> View</button>
                      </Link>
                      <Link to={`/edit-student/${student.id}`}>
                        {" "}
                        <button className="btn btn-warning me-2"> Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                            deleteData(student);
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

export default Students;
