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
      <div className="py-6 md:py-10 px-2 md:px-1">
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-text" className="text-[#FFF0DC] text-base block mb-2">
            Enter Movie name to search
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              id="input-text"
              placeholder="eg.. Avengers"
              className="bg-[#FFF0DC] py-2.5 px-3 w-full sm:w-1/2 outline-[#F0BB78]"
            />
            <button
              type="submit"
              className="bg-[#F0BB78] text-[#543A14] hover:bg-[#fad29b] px-4 cursor-pointer font-semibold py-2.5 whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchMovie;
