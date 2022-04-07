import React from "react";
import Card from "./Card";
function Plans() {
  let priceCard = [
    {
      name: "FREE",
      price: 0,
      features: [
        {
          list: "Single User",
          isMute: false,
        },
        {
          list: "5GB Storage",
          isMute: false,
        },
      ],
    },
    {
      name: "SILVER",
      price: 9,
      features: [
        {
          list: "5 Users",
          isMute: false,
          isBold: true,
        },
        {
          list: "50GB Storage",
          isMute: false,
        },
      ],
    },
    {
      name: "GOLD",
      price: 49,
      features: [
        {
          list: "Unlimited Users",
          isMute: false,
          isBold: true,
        },
        {
          list: "150GB Storage",
          isMute: false,
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Choose Plan</h1>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              priceCard.map((card) => {
                return <Card priceData={card} key={card.name} />
              }
              )}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Plans;
