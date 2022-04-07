import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Teachers from "./Teachers";
import CreateUser from "./CreateUser";
import { useState } from "react";
import { UserProvider } from "./UserContext";
import ViewUser from "./ViewUser";
import Login from "./Login";
import Plans from "./Plans";
function App() {
  const [teachers, setTeachers] = useState([]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar />
                <div className="container-fluid">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/view-user/:id" element={<ViewUser />} />
                    <Route path="/login-user" element={<Login />} />
                    <Route path="/plans" element={<Plans/>}/>
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
