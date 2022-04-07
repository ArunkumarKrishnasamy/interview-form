import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserProvider } from "./UserContext";
function ViewUser() {
  let params = useParams();

  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    async function fetchData(params) {
      try {
        let teacher = await axios.get(
          `https://62449f9839aae3e3b75250ef.mockapi.io/students/${params.id}`
        );
        console.log(teacher);
        setTeacher(teacher.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(params);
  }, []);
  return (
    <div>
      <div id="content">
        <h1 className="h3 mb-0 text-gray-800">Users Information</h1>
        <h1>{teacher.id}</h1>
        <h1>{teacher.name}</h1>
        <h4>{teacher.position}</h4>
        <h4> {teacher.age}</h4>
        <h4>{teacher.office}</h4>
        <h4>{teacher.salary}</h4>
      </div>

      <Link to={"/teachers"}>
        {" "}
        <button className="btn btn-primary mx-2"> Close</button>
      </Link>
    </div>
  );
}

export default ViewUser;
