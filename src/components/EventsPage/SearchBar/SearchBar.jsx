import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListOfCategories from "../ListOfCategories/ListOfCategories";
import "./SearchBar.css";

function SearchBar() {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const inputField = document.getElementById("searchbar-input");
      const keyCode = e.key;
      if (
        keyCode === "Enter" &&
        inputField == document.activeElement &&
        inputField.value !== ""
      ) {
        if (categories === "") {
          console.log(inputField.value);
          setCategories([<p>{inputField.value}</p>]);
        } else {
          const newCat = [...categories, <p>{inputField.value}</p>];
          console.log(newCat);
          console.log(categories);
          setCategories(newCat);
        }
        // console.log([...categories, <p>{inputField.value}</p>]);
        // setCategories([...categories, <p>{inputField.value}</p>]);
        inputField.value = "";
      }
    });
  }, []);

  return (
    <div
      className="fixed flex bg-black w-screen text-white z-50 shadow-xl"
      style={{ justifyContent: "space-between" }}
    >
      <div className="p-4">
        <h2 className="capitalized text-4xl font-semibold">Events</h2>
      </div>
      <div className="p-4">
        <div
          className="w-fit searchbar rounded-md border-red-700 border-2 block p-4"
          id="searchbar"
        >
          <input
            placeholder="enter event categories ..."
            className="outline-none text-slate-400 bg-transparent w-[60vw]"
            id="searchbar-input"
          />
          <button className="" id="search-button"></button>
        </div>

        <ListOfCategories>{categories}</ListOfCategories>
      </div>
      <div className="p-4">
        <NavLink to={"/"} className="text-4xl">
          <p>back</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SearchBar;
