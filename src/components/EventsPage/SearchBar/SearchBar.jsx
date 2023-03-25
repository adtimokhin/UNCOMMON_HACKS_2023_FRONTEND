import { NavLink } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div
      className="fixed flex bg-black w-screen text-white"
      style={{ justifyContent: "space-between" }}
    >
      <div className="p-4">
        <h2 className="capitalized text-4xl font-semibold">Events</h2>
      </div>
      <div className="p-4">
        <div
          className="w-fit searchbar rounded-md border-red-700 border-2 block"
          id="searchbar"
        >
          <input
            placeholder="enter event categories ..."
            className="outline-none text-slate-400 bg-transparent w-[60vw]"
            id="searchbar-input"
          />
          <button className="" id="search-button"></button>
        </div>
      </div>
      <div className="p-4">
        <NavLink to={"/"} className="text-4xl">
          <p>back</p>
        </NavLink>
      </div>
    </div>
  );
}

window.addEventListener("keydown", (e) => {
  const inputField = document.getElementById("searchbar-input");
  const keyCode = e.key;
  if (keyCode === "Enter" && inputField == document.activeElement) {
    console.log("Enter key pressed");
    const inputField = document.getElementById("searchbar-input");
    const newTag = inputField.value;
    inputField.value = "";

    console.log('newTag :>> ', newTag);
  }
});

export default SearchBar;
