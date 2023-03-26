import { useEffect, useState } from "react";
import CardRow from "./CardRow/CardRow";
import "./EventsPage.css";
import PopupCard from "./PopupCard/PopupCard";
import SearchBar from "./SearchBar/SearchBar";
import { getAllEvents } from "../../../utils/database";
import CircleLoader from "react-spinners/CircleLoader";

function EventsPage() {
  const [popupCard, setPopupCard] = useState("");
  const [screenContent, setScreenContent] = useState(
    <div className="left-[50%] absolute ">
      <CircleLoader color="#000000" size={200} />
    </div>
  );

  useEffect(() => {
    const getData = () => {
      const eventsData = getAllEvents();

      const rows = [];
      for (var i = 0; i < eventsData.length; i++) {
        if (i % 3 == 0 && i != 0) {
          rows.push(
            <CardRow
              cardData={eventsData.slice(i - 3, i + 1)}
              onCardClick={(data) => {
                setPopupCard(
                  <PopupCard
                    onPopUpCardClick={() => {
                      setPopupCard("");
                    }}
                    cardData={data}
                  />
                );
              }}
            />
          );
        }
      }

      if (eventsData.length % 4 !== 0) {
        rows.push(
          <CardRow
            cardData={eventsData.slice(
              eventsData.length - (eventsData.length % 4),
              eventsData.length
            )}
            onCardClick={(data) => {
              setPopupCard(
                <PopupCard
                  onPopUpCardClick={() => {
                    setPopupCard("");
                  }}
                  cardData={data}
                />
              );
            }}
          />
        );
      }
      setScreenContent(rows);
    };

    getData();
  }, [screenContent, popupCard]);

  return (
    <div className="w-screen relative h-[200vh]">
      {/* Search Bar */}
      {popupCard}
      <SearchBar />
      <div className="p-32 text-[#EBDBD3]">mmf</div>
      {screenContent}
    </div>
  );
}

export default EventsPage;
