import "./CategoryCard.css";

function CategoryCard(props) {
  const categoryType = props.categoryType;

  return (
    <div
      className="w-[20rem] h-[30rem] relative card"
      onClick={() => {
        loadCategoryData(categoryType);
        addHideClass();
      }}
    >
      <p className="text-4xl font-medium font-primary absolute bottom-2 w-[20rem] text-center">
        {categoryType}
      </p>
    </div>
  );
}

function loadCategoryData(category) {
  // TODO: Add a fetching support
}

function addHideClass() {
  const card = document.getElementById("card__scroller-container");
  console.log(card.classList);
  card.classList.add("hiding");
  console.log(card.classList);
}
export default CategoryCard;
