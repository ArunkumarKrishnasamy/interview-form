import React from 'react'

function Card(props) {
  return (
   
        <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.priceData.name}</h5>
          <h6 className="card-price text-center">${props.priceData.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            {
              props.priceData.features.map((feature) => {
                return (
                  <li key={feature.list} className={`${feature.isMute ?        "text-muted" : ""} ${feature.isBold ? "fw-bold" : ""}`}>
                    <span className="fa-li">
                      <i className={!feature.isMute ? "fa fa-check" : "fa fa-times"}>
                      </i>
                    </span>
                    <strong>{feature.list1}</strong> {feature.list}
                  </li>
                )
              })
            }

          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Choose this Plan</a>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Card