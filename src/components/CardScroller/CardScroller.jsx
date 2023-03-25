import "./CardScroller.css";

function CardScroller(props) {
  return (
    <div id="container-outer">
    <div
      className="flex align-middle w-fit"
      id="card__scroller-container"
      data-mousedownat="0"
      data-prevpercentage="0"
    >
      {props.children}
    </div>
    </div>
  );
}

export default CardScroller;
