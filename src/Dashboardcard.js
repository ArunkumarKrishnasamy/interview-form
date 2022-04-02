import React from 'react'

function Dashboardcard(props) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
    {props.card.inProgress ? (
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                Tasks
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mx-2 font-weight-bold text-gray-800">
                    50%
                  </div>
                </div>
                <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div
                      className=" progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={props.card.border}>
        <div className="card shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-uppercase mb-1">
                  <span className={props.card.titlecolor}>
                    {props.card.title}
                  </span>
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.card.value}
                </div>
              </div>
              <div className="col-auto">
                <i className="fa-2x text-gray-300 me-2">
                  <i className={props.card.icon}> </i>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Dashboardcard