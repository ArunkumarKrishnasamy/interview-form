import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Teachers from "./Teachers";
import CreateTeacher from "./CreateTeacher";
import { useState } from "react";
import { UserProvider } from "./UserContext";
import ViewTeacher from "./ViewTeacher";
import EditTeacher from "./EditTeacher";
import Students from "./Students";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";
import CreateStudent from "./CreateStudent";

function App() {
  const [teachers, setTeachers] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider value={{ teachers, setTeachers }}>
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar />
                <div className="container-fluid">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/create-teacher" element={<CreateTeacher />} />
                    <Route path="/view-teacher/:id" element={<ViewTeacher />} />
                    <Route path="/edit-teacher/:id" element={<EditTeacher />} />
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/view-student/:id" element={<ViewStudent/>}/>
                    <Route path="/edit-student/:id" element={<EditStudent/>}/>
                    <Route path="/create-student" element={<CreateStudent/>}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
