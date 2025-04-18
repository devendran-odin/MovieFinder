import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const fetchMovies = (movieName) => {
  console.log(movieName);
};

const SearchMovie = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let trimmedValue = inputValue.trim();
    if (trimmedValue.length == 0) {
      toast.error("Invalid movie name. Check spelling.");
    } else {
      setInputValue(trimmedValue);
      fetchMovies(trimmedValue);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1 className="text-[#F0BB78] text-4xl font-bold">MovieVerse</h1>
      <div className="py-10">
        <label htmlFor="input-text" className="text-[#FFF0DC] text-lg">
          {" "}
          Enter Movie name to search
        </label>
        <br></br>
        <div>
          <input
            type="text"
            name=""
            value={inputValue}
            onChange={handleChange}
            id="input-text"
            placeholder="God Father"
            className="bg-[#FFF0DC] py-2.5 px-3 w-1/2 my-2  outline-[#F0BB78]"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#F0BB78] text-[#543A14] mx-5  px-6 cursor-pointer font-semibold py-2.5"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchMovie;
