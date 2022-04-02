import React,{ useEffect, useState} from 'react'
import {Link, useParams } from 'react-router-dom'
import axios from 'axios';

function ViewStudent() {
    let params =useParams();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        async function fetchData(params) {
          try {
            let student = await axios.get(
              `https://62449f9839aae3e3b75250ef.mockapi.io/users/${params.id}`
            );
            console.log(student);
            setStudent(student.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData(params);
      }, []);



  return (
    <div>
      <div id="content">
        <h1 className="h3 mb-0 text-gray-800">Student Information</h1>
        <h1>{student.id}</h1>
        <h1>{student.name}</h1>
        <h4>{student.class}</h4>
        <h4> {student.marks}</h4>
        <h4>{student.result}</h4>
        
      </div>

      <Link to={"/students"}>
        {" "}
        <button className="btn btn-primary mx-2"> Close</button>
      </Link>
    </div>
  )
}

export default ViewStudent