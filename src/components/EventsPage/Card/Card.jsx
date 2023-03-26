import React from 'react';
import './Card.css';

const Card = (props) => {
  const cardData = props.cardData;

  

  return (
    <div className="card-event relative rounded-lg shadow-lg p-6 h-[100%]" onClick={() => {
        props.onCardClick(cardData)
    }}>
      <img
        src={cardData.imageURL}
        alt={cardData.title}
        className="absolute h-full w-full object-cover z-0 top-0 left-0"
        draggable="false"
      />
      <div className="absolute z-10 bottom-2 left-5">
        <h2 className="text-xl font-bold mb-4 bg-slate-50">{cardData.title}</h2>
        <p className="text-gray-700 bg-slate-50">{cardData.location}</p>
      </div>
    </div>
  );
};

export default Card;
