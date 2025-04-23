import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      toast.error("Invalid movie name. Check spelling.");
    } else {
      navigate(`/search?query=${encodeURIComponent(trimmedValue)}`);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
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
