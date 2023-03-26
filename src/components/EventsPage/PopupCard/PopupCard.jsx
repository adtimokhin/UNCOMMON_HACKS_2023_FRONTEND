import React from "react";
import "./PopupCard.css";

function PopupCard(props) {
  // {
  // title: "Card 5",
  // location: "Location 4",
  // imageURL: "https://via.placeholder.com/400x300",
  // }
  return (
    <div className="absolute h-[100%] w-screen">
      <div
        className="absolute top-0 left-0 h-[100%] w-screen bg-black bg-opacity-50 z-50 border-4 border-spacing-2 rounded-md border-black"
        id="popup-card"
        onClick={() => {
          props.onPopUpCardClick();
        }}
      ></div>

      <div
        className="h-[120vh] w-[60%] left-[50%] bg-black top-[10%] absolute z-[60]"
        style={{ transform: "translateX(-50%)" }}
      >
        <img
          className="w-full h-[50%] object-fit absolute"
          src={props.cardData.imageUrl}
          alt="popup card image"
        />

        <div className="h-[10%] w-full bg-gradient-to-t from-black to-transparent absolute left-0 bottom-[46%]"></div>

        <div
          id="card_content"
          className="text-white w-full absolute top-[44%] h-[56%]"
        >
          <h3
            className="p-10 text-3xl font-bold"
            style={{ transform: "translateY(-40%)" }}
          >
            {props.cardData.title}
          </h3>

          <p className="pl-6">
            <span>⏰:</span> {props.cardData.date} <span> @ </span> {props.cardData.time}
          </p>
          <p className="pl-6">
            <span>🏛️:</span> {props.cardData.location}
          </p>

          <p className="w-full p-4"> 
            <span>💬:</span> {props.cardData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
