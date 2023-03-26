import React from "react";
import Card from "../Card/Card";
import "./CardRow.css"; // import the CardRow.css file

const CardRow = (props) => {
  const cardData = props.cardData;

  return (
    <div className="card-row flex justify-between w-full h-[20%]">
      {cardData.map((card, index) => (
        <div className="w-1/4 p-4">
          <Card
            key={index}
            cardData={card}
            onCardClick={props.onCardClick}
          />
        </div>
      ))}
    </div>
  );
};

export default CardRow;
