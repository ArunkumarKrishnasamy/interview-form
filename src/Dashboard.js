import React from 'react' ;
import { Link } from "react-router-dom";
import Dashboardcard from "./Dashboardcard";

let cards = [
    {
      title: " Earnings (Monthly)",
      value: "$40000",
      border: "border-left-primary",
      titlecolor: "text-primary",
      icon: "fas fa-calendar",
    },
    {
      title: "Earnings (Annual)",
      value: "$215000",
      border: "border-left-success",
      titlecolor: "text-success ",
      icon: "fas fa-dollar-sign",
    },
    {
      title: "Tasks",
      isProgressbar: true,
      border: "border-left-info",
      titlecolor: "text-info",
      inProgress: true,
    },
    {
      title: "Pending Request",
      value: 18,
      border: "border-left-warning",
      titlecolor: "text-warning",
      icon: "fas fa-comments",
    },
  ];

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link
          to={"/create-teacher"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          Teacher
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          {cards.map((card) => {
            return <Dashboardcard card={card} key={card.title} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard